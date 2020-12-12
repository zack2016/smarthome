#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
# Copyright 2011-2014 Marcus Popp                          marcus@popp.mx
# Copyright 2016      Christian Strassburg            c.strassburg@gmx.de
# Copyright 2016-     Martin Sinn                           m.sinn@gmx.de
# Copyright 2020-     Bernd Meiners                 bernd.meiners@mail.de
#########################################################################
#  This file is part of SmartHomeNG.
#
#  SmartHomeNG is free software: you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#
#  SmartHomeNG is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with SmartHomeNG. If not, see <http://www.gnu.org/licenses/>.
#########################################################################


#########################################################################
#
# TO DO:
# - Isolate Logging (MemLog, etc.) to lib module
# - remove all remarks with old code (that has been moved to lib modules)
#
#########################################################################



#####################################################################
# Check Python Version
#####################################################################
import sys

#####################################################################
# prevent user root
#####################################################################
import os

#####################################################################
# Import minimum set of Python Core Modules
#####################################################################
import datetime
import gc
import locale


#####################################################################
# Import Python Core Modules
#####################################################################

import json
import logging
import logging.handlers
import logging.config
import platform
import shutil

import signal
import subprocess
import threading
import time
import traceback
try:
    import psutil
except:
    pass

BASE = os.path.sep.join(os.path.realpath(__file__).split(os.path.sep)[:-2])
PIDFILE= os.path.join(BASE,'var','run','smarthome.pid')

#####################################################################
# Import SmartHomeNG Modules
#####################################################################
import lib.config
import lib.connection
import lib.daemon
import lib.item
import lib.log
import lib.logic
import lib.module
import lib.plugin
import lib.scene
import lib.scheduler
import lib.tools
import lib.utils
import lib.orb
import lib.backup
import lib.translation
from lib.shtime import Shtime
import lib.shyaml
from lib.shpypi import Shpypi

from lib.constants import (YAML_FILE, CONF_FILE, DEFAULT_FILE)

#import bin.shngversion
#MODE = 'default'
#VERSION = bin.shngversion.get_shng_version()


#####################################################################
# Classes
#####################################################################

class _LogHandler(logging.StreamHandler):
    """
    LogHandler used by MemLog
    """
    def __init__(self, log, shtime):
        logging.StreamHandler.__init__(self)
        self._log = log
        self._shtime = shtime

    def emit(self, record):
        try:
            self.format(record)
            timestamp = datetime.datetime.fromtimestamp(record.created, self._shtime.tzinfo())
            self._log.add([timestamp, record.threadName, record.levelname, record.message])
        except Exception:
            self.handleError(record)

class SmartHome():
    """
    SmartHome ist the main class of SmartHomeNG. All other objects can be addressed relative to
    the main oject, which is an instance of this class. Mostly it is reffered to as ``sh``, ``_sh`` or ``smarthome``.
    """

    # default values, if values are not specified in smarthome.yaml
    _default_language = 'de'
    _fallback_language_order = 'en,de'
    _threadinfo_export = False

    # for scheduler
    _restart_on_num_workers = 30

    # ---

    BASE = os.path.sep.join(os.path.realpath(__file__).split(os.path.sep)[:-2])



    def initialize_vars(self):
        # the APIs available though the smarthome object instance:
        self.shtime = None

        self.items = None
        self.plugins = None
        self.logics = None
        self.scheduler = None

        self.plugin_load_complete = False
        self.item_load_complete = False
        self.plugin_start_complete = False

        self._smarthome_conf_basename = None
        self._log_buffer = 50
        self.__logs = {}
        self.__event_listeners = {}
        self.__all_listeners = []
        self.modules = []
        self.__children = []


    def initialize_dir_vars(self):
        self._base_dir = BASE
        self.base_dir = self._base_dir  # **base_dir** is deprecated. Use method get_basedir() instead. - for external modules using that var (backend, ...?)

        self._extern_conf_dir = BASE

        self._etc_dir = os.path.join(self._base_dir, 'etc')
        self._var_dir = os.path.join(self._base_dir, 'var')
        self._lib_dir = os.path.join(self._base_dir,'lib')
        self._plugins_dir = os.path.join(self.base_dir, 'plugins')
        self._env_dir = os.path.join(self._lib_dir, 'env' + os.path.sep)

        self._env_logic_conf_basename = os.path.join(self._env_dir ,'logic')
        self._items_dir = os.path.join(self._base_dir, 'items'+os.path.sep)
        self._logic_conf_basename = os.path.join(self._etc_dir, 'logic')
        self._logic_dir = os.path.join(self._base_dir, 'logics'+os.path.sep)
        self._cache_dir = os.path.join(self._var_dir,'cache'+os.path.sep)
        self._log_conf_basename = os.path.join(self._etc_dir,'logging')

        _module_conf_basename = os.path.join(self._etc_dir, 'module')
        _module_conf = ''  # is filled by module.py while reading the configuration file, needed by Backend plugin

        _plugin_conf_basename = os.path.join(self._etc_dir, 'plugin')

    #    _plugin_conf = ''	# is filled by plugin.py while reading the configuration file, needed by Backend plugin


    def create_directories(self):
        """
        Create directories used by SmartHomeNG if they don't exist
        """
        if not os.path.exists(self._var_dir):
            os.makedirs(self._var_dir)
            os.makedirs(os.path.join(self._var_dir, 'backup'))
            os.makedirs(self._cache_dir)
            os.makedirs(os.path.join(self._var_dir, 'db'))
            os.makedirs(os.path.join(self._var_dir, 'log'))
            os.makedirs(os.path.join(self._var_dir, 'run'))


    def __init__(self, MODE, extern_conf_dir=''):
        """
        Initialization of main smarthome object
        """
        self.shng_status = {'code': 0, 'text': 'Initalizing'}
        self._logger = logging.getLogger(__name__)

        self.initialize_vars()
        self.initialize_dir_vars()
        self.create_directories()

        self.PYTHON_VERSION = lib.utils.get_python_version()

        if os.name != 'nt':
            self.python_bin = os.environ.get('_','')
        else:
            self.python_bin = sys.executable

        if extern_conf_dir != '':
            self._extern_conf_dir = extern_conf_dir

        # set default timezone to UTC
        self.shtime = Shtime(self)

        threading.currentThread().name = 'Main'
        self.alive = True

        import bin.shngversion
        VERSION = bin.shngversion.get_shng_version()
        self.version = VERSION
        self.connections = []

        self._etc_dir = os.path.join(self._extern_conf_dir, 'etc')
        self._items_dir = os.path.join(self._extern_conf_dir, 'items'+os.path.sep)
        self._logic_dir = os.path.join(self._extern_conf_dir, 'logics'+os.path.sep)
        self._scenes_dir = os.path.join(self._extern_conf_dir, 'scenes'+os.path.sep)
        self._smarthome_conf_basename = os.path.join(self._etc_dir,'smarthome')
        self._logic_conf_basename = os.path.join(self._etc_dir, 'logic')
        self._module_conf_basename = os.path.join(self._etc_dir,'module')
        self._plugin_conf_basename = os.path.join(self._etc_dir,'plugin')
        self._log_conf_basename = os.path.join(self._etc_dir,'logging')

        self._pidfile = PIDFILE

        # check config files
        self.checkConfigFiles()

        if MODE == 'unittest':
            return

        #############################################################
        # Reading smarthome.yaml

        config = lib.config.parse_basename(self._smarthome_conf_basename, configtype='SmartHomeNG')
        if config != {}:
            for attr in config:
                if not isinstance(config[attr], dict):  # ignore sub items
                    vars(self)['_' + attr] = config[attr]
            del(config)  # clean up
        else:
            # no valid smarthome.yaml found
            print("No base configuration - terminating SmartHomeNG")
            print("Hint: Are Language (preferably: DE_de) and character (UTF-8) set configured in operating system?")
            exit(1)
        if hasattr(self, '_module_paths'):
            sys.path.extend(self._module_paths if type(self._module_paths) is list else [self._module_paths])

        #############################################################
        # Setting (local) tz if set in smarthome.yaml
        if hasattr(self, '_tz'):
            self.shtime.set_tz(self._tz)
            del(self._tz)

        #############################################################
        # test if needed Python packages are installed
        # - core requirements = libs
        # self.shpypi = Shpypi(self)
        # core_reqs = shpypi.test_core_requirements(logging=False)
        # if core_reqs == 0:
        #     print("Trying to restart shng")
        #     print()
        #     exit(0)
        # elif core_reqs == -1:
        #     print("Unable to install core requirements")
        #     print()
        #     exit(1)

        #############################################################
        # setup logging
        self.init_logging(self._log_conf_basename, MODE)

        self.shng_status = {'code': 1, 'text': 'Initalizing: Logging initalized'}

        #############################################################
        # Fork process and write pidfile
        if MODE == 'default':
            lib.daemon.daemonize(PIDFILE)
        else:
            lib.daemon.write_pidfile(os.getpid(), PIDFILE)
            print("-----------------  Init SmartHomeNG {}  -----------------".format(self.version))

        #############################################################
        # Write startup message to log(s)
        pid = lib.daemon.read_pidfile(PIDFILE)
        self._logger.warning("--------------------   Init SmartHomeNG {}   --------------------".format(self.version))
        self._logger.warning("Running in Python interpreter 'v{}' on {} (pid={})".format(self.PYTHON_VERSION, platform.platform(), pid))

        default_encoding = locale.getpreferredencoding() # returns cp1252 on windows
        if not (default_encoding in  ['UTF8','UTF-8']):
            self._logger.warning("Encoding should be UTF8 but is instead {}".format(default_encoding))

        if self._extern_conf_dir != BASE:
            self._logger.warning("Using config dir {}".format(self._extern_conf_dir))

        #############################################################
        # Initialize multi-language support
        lib.translation.initialize_translations(self._base_dir, self._default_language, self._fallback_language_order)

        #############################################################
        # Test if plugins are installed
        if not os.path.isdir(self._plugins_dir):
            self._logger.critical("Plugin folder does not exist!")
            self._logger.critical("Please create folder '{}' and install plugins.".format(self._plugins_dir))
            self._logger.critical("Aborting")
            exit(1)
        if not os.path.isdir(os.path.join(self._plugins_dir, 'database')):
            self._logger.critical("No plugins found in folder '{}'. Please install plugins.".format(self._plugins_dir))
            self._logger.critical("Aborting")
            exit(1)

        #############################################################
        # test if needed Python packages for configured plugins
        # are installed
        self.shpypi = Shpypi.get_instance()
        if self.shpypi is None:
            self.shpypi = Shpypi(self)
        if hasattr(self, '_shpypi_crontab'):
            self.shpypi.set_scheduler_crontab(self._shpypi_crontab)

        base_reqs = self.shpypi.test_base_requirements(self)
        if base_reqs == 0:
            self.restart('SmartHomeNG (Python package installation)')
            exit(5)    # exit code 5 -> for systemctl to restart ShamrtHomeNG
        elif base_reqs == -1:
            self._logger.critical("Python package requirements for modules are not met and unable to install base requirements")
            self._logger.critical("Do you have multiple Python3 Versions installed? Maybe PIP3 looks into a wrong Python environment. Try to configure pip_command in etc/smarthome.yaml")
            self._logger.critical("Aborting")
            exit(1)

        plugin_reqs = self.shpypi.test_conf_plugins_requirements(self._plugin_conf_basename, self._plugins_dir)
        if plugin_reqs == 0:
            self.restart('SmartHomeNG (Python package installation)')
            exit(5)    # exit code 5 -> for systemctl to restart ShamrtHomeNG
        elif plugin_reqs == -1:
            self._logger.critical("Python package requirements for configured plugins are not met and unable to install those requirements")
            self._logger.critical("Do you have multiple Python3 Versions installed? Maybe PIP3 looks into a wrong Python environment. Try to configure pip_command in etc/smarthome.yaml")

            self._logger.critical("Aborting")
            exit(1)

        self.shng_status = {'code': 2, 'text': 'Initalizing: Requirements checked'}


        self.shtime._initialize_holidays()


        # Add Signal Handling
#        signal.signal(signal.SIGHUP, self.reload_logics)
        signal.signal(signal.SIGINT, self.stop)
        signal.signal(signal.SIGTERM, self.stop)

        #############################################################
        # Check Time
        while datetime.date.today().isoformat() < '2016-03-16':  # XXX update date
            time.sleep(5)
            self._logger.info("Waiting for updated time.")

        #############################################################
        # Catching Exceptions
        sys.excepthook = self._excepthook

        #############################################################
        # Setting debug level and adding memory handler
        self.initMemLog()

        # test if a valid locale is set in the operating system
        if os.name != 'nt':
            pass
        try:
            if not any(utf in os.environ['LANG'].lower() for utf in ['utf-8', 'utf8']):
                self._logger.error("Locale for the enviroment is not set to a valid value. Set the LANG environment variable to a value supporting UTF-8")
        except:
            self._logger.error("Locale for the enviroment is not set. Defaulting to en_US.UTF-8")
            os.environ["LANG"] = 'en_US.UTF-8'
            os.environ["LC_ALL"] = 'en_US.UTF-8'

        #############################################################
        # Link Tools
        self.tools = lib.tools.Tools()

        #############################################################
        # Link Sun and Moon
        self.sun = False
        self.moon = False
        if lib.orb.ephem is None:
            self._logger.warning("Could not find/use ephem!")
        elif not hasattr(self, '_lon') and hasattr(self, '_lat'):
            self._logger.warning('No latitude/longitude specified => you could not use the sun and moon object.')
        else:
            if not hasattr(self, '_elev'):
                self._elev = None
            self.sun = lib.orb.Orb('sun', self._lon, self._lat, self._elev)
            self.moon = lib.orb.Orb('moon', self._lon, self._lat, self._elev)


    def get_defaultlanguage(self):
        """
        Returns the configured default language of SmartHomeNG
        """
        return self._default_language


    def set_defaultlanguage(self, language):
        """
        Returns the configured default language of SmartHomeNG
        """
        self._default_language = language
        lib.translation.set_default_language(language)


    def get_basedir(self):
        """
        Function to return the base directory of the running SmartHomeNG installation

        :return: Base directory as an absolute path
        :rtype: str
        """
        return self._base_dir


    def get_confdir(self):
        """
        Function to return the config directory (that contain 'etc', 'logics' and 'items' subdirectories)

        :return: Config directory as an absolute path
        :rtype: str
        """
        return self._extern_conf_dir


    def get_etcdir(self):
        """
        Function to return the etc config directory

        :return: Config directory as an absolute path
        :rtype: str
        """
        return self._etc_dir


    def get_vardir(self):
        """
        Function to return the var directory used by SmartHomeNG

        :return: var directory as an absolute path
        :rtype: str
        """
        return self._var_dir


    def getBaseDir(self):
        """
        Function to return the base directory of the running SmartHomeNG installation

        **getBaseDir()** is deprecated. Use method get_basedir() instead.

        :return: Base directory as an absolute path
        :rtype: str
        """
        self._deprecated_warning('sh.get_basedir()')
        return self._base_dir


    def checkConfigFiles(self):
        """
        This function checks if the needed configuration files exist. It checks for CONF and YAML files.
        If they dont exist, it is checked if a default configuration exist. If so, the default configuration
        is copied to corresponding configuration file.

        The check is done for the files that have to exist (with some content) or SmartHomeNG won't start:

        - smarthome.yaml / smarthome.conf
        - logging.yaml
        - plugin.yaml / plugin.conf
        - module.yaml / module.conf
        - logic.yaml / logic.conf

        """
        configs = ['holidays', 'logging', 'logic', 'module', 'plugin', 'smarthome']

        for c in configs:
            default = os.path.join(self._base_dir, 'etc', c + YAML_FILE + DEFAULT_FILE)
            conf_basename = os.path.join(self._etc_dir, c)
            if((c == 'logging' and not (os.path.isfile(conf_basename + YAML_FILE))) or
               (c != 'logging' and not (os.path.isfile(conf_basename + YAML_FILE)) and not (os.path.isfile(conf_basename + CONF_FILE)))):
                if os.path.isfile(default):
                    shutil.copy2(default, conf_basename + YAML_FILE)


    def init_logging(self, conf_basename='', MODE='default'):
        """
        This function initiates the logging for SmartHomeNG.
        """
        if conf_basename == '':
            conf_basename = self._log_conf_basename
        #fo = open(conf_basename + YAML_FILE, 'r')
        doc = lib.shyaml.yaml_load(conf_basename + YAML_FILE, True)
        if doc == None:
            print()
            print("ERROR: Invalid logging configuration in file 'logging.yaml'")
            exit(1)
        self.logging_config = doc
        logging.config.dictConfig(doc)
        #fo.close()
        if MODE == 'interactive':  # remove default stream handler
            logging.getLogger().disabled = True
        elif MODE == 'verbose':
            logging.getLogger().setLevel(logging.INFO)
        elif MODE == 'debug':
            logging.getLogger().setLevel(logging.DEBUG)
        elif MODE == 'quiet':
            logging.getLogger().setLevel(logging.WARNING)
#       log_file.doRollover()


    def initMemLog(self):
        """
        This function initializes all needed datastructures to use the (old) memlog plugin
        """

        self.log = lib.log.Log(self, 'env.core.log', ['time', 'thread', 'level', 'message'], maxlen=self._log_buffer)
        _logdate = "%Y-%m-%d %H:%M:%S"
        _logformat = "%(asctime)s %(levelname)-8s %(threadName)-12s %(message)s"
        formatter = logging.Formatter(_logformat, _logdate)
        log_mem = _LogHandler(self.log, self.shtime)
        log_mem.setLevel(logging.WARNING)
        log_mem.setFormatter(formatter)
        logging.getLogger('').addHandler(log_mem)


    #################################################################
    # Process Methods
    #################################################################

    def start(self):
        """
        This function starts the threads of the main smarthome object.

        The main thread that is beeing started is called ``Main``
        """

        self.shng_status = {'code': 10, 'text': 'Starting'}

        threading.currentThread().name = 'Main'

        #############################################################
        # Start Scheduler
        #############################################################
        self.scheduler = lib.scheduler.Scheduler.get_instance()
        if self.scheduler is None:
            self.scheduler = lib.scheduler.Scheduler(self)
        self.trigger = self.scheduler.trigger
        self.scheduler.start()

        #############################################################
        # Init Connections
        #############################################################
        self.connections = lib.connection.Connections()

        #############################################################
        # Init and start loadable Modules
        #############################################################
        self.shng_status = {'code': 11, 'text': 'Starting: Initalizing and starting loadable modules'}

        self._logger.info("Init loadable Modules")
        self.modules = lib.module.Modules(self, configfile=self._module_conf_basename)
        self.modules.start()

        #############################################################
        # Init Item-Wrapper
        #############################################################
        self.items = lib.item.Items(self)

        #############################################################
        # Init Plugins
        #############################################################
        self.shng_status = {'code': 12, 'text': 'Starting: Initalizing plugins'}

        self._logger.info("Init Plugins")
        self.plugins = lib.plugin.Plugins(self, configfile=self._plugin_conf_basename)
        self.plugin_load_complete = True

        #############################################################
        # Init Items (load item definitions)
        #############################################################
        self.shng_status = {'code': 13, 'text': 'Starting: Loading item definitions'}

        self._logger.info("Start initialization of items")
        self.items.load_itemdefinitions(self._env_dir, self._items_dir, self._etc_dir, self._plugins_dir)

        self.item_count = self.items.item_count()
        self._logger.info("Items initialization finished, {} items loaded".format(self.items.item_count()))
        self.item_load_complete = True

        #############################################################
        # Init Logics
        #############################################################
        self.shng_status = {'code': 15, 'text': 'Starting: Initializing logics'}

        self.logics = lib.logic.Logics(self, self._logic_conf_basename, self._env_logic_conf_basename)
        # signal.signal(signal.SIGHUP, self.logics.reload_logics)

        #############################################################
        # Init Scenes
        #############################################################
        lib.scene.Scenes(self)

        #############################################################
        # Start Connections
        #############################################################
        self.scheduler.add('sh.connections', self.connections.check, cycle=10, offset=0)
        self._export_threadinfo()

        #############################################################
        # Start Plugins
        #############################################################
        self.shng_status = {'code': 16, 'text': 'Starting: Starting plugins'}

        self.plugins.start()
        self.plugin_start_complete = True

        #############################################################
        # Execute Maintenance Method
        #############################################################
        self.scheduler.add('sh.garbage_collection', self._maintenance, prio=8, cron=['init', '4 2 * *'], offset=0)
        if self._threadinfo_export:
            self.scheduler.add('sh.thread_info', self._export_threadinfo, prio=8, cycle=120, offset=0)

        #############################################################
        # Main Loop
        #############################################################
        self.shng_status = {'code': 20, 'text': 'Running'}
        self._logger.warning("SmartHomeNG initialization finished")

        while self.alive:
            try:
                self.connections.poll()
            except Exception as e:
                self._logger.exception("Connection polling failed: {}".format(e))


    def stop(self, signum=None, frame=None):
        """
        This method is used to stop SmartHomeNG and all it's threads
        """
        self.shng_status = {'code': 31, 'text': 'Stopping'}

        self.alive = False
        self._logger.info("stop: Number of Threads: {}".format(threading.activeCount()))

        self.items.stop()
        self.scheduler.stop()
        if self.plugins is not None:
            self.plugins.stop()
        if self.modules is not None:
            self.modules.stop()
        self.connections.close()

        self.shng_status = {'code': 32, 'text': 'Stopping: Stopping threads'}

        for thread in threading.enumerate():
            if thread.name != 'Main':
                try:
                    thread.join(1)
                except Exception as e:
                    pass

        if threading.active_count() > 1:
            header_logged = False
            for thread in threading.enumerate():
                if thread.name != 'Main' and thread.name[0] !=  '_' and not thread.name.startswith('ThreadPoolExecutor'):
                #if thread.name != 'Main' and thread.name[0] !=  '_':
                    if not header_logged:
                        self._logger.warning("The following threads have not been terminated properly by their plugins (please report to the plugin's author):")
                        header_logged = True
                    self._logger.warning("-Thread: {}, still alive".format(thread.name))
#            if header_logged:
#                self._logger.warning("SmartHomeNG stopped")
#        else:
        self._logger.warning("SmartHomeNG stopped")

        self.shng_status = {'code': 33, 'text': 'Stopped'}

        lib.daemon.remove_pidfile(PIDFILE)

        logging.shutdown()
        exit(5)  # exit code 5 -> for systemctl to restart ShamrtHomeNG


    def restart(self, source=''):
        """
        This method is used to restart the python interpreter and SmartHomeNG
        """
        if self.shng_status['code'] == 30:
            self._logger.warning("Another RESTART is issued, while SmartHomeNG is restarting. Reason: "+source)
        else:
            self.shng_status = {'code': 30, 'text': 'Restarting'}
            if source != '':
                source = ', initiated by ' + source
            self._logger.warning("SmartHomeNG restarting"+source)
            # python_bin could contain spaces (at least on windows)
            python_bin = sys.executable
            if ' ' in python_bin:
                python_bin = '"'+python_bin+'"'
            command = python_bin + ' ' + os.path.join(self._base_dir, 'bin', 'smarthome.py') + ' -r'
            self._logger.info("Restart command = '{}'".format(command))
            try:
                p = subprocess.Popen(command, shell=True)
                exit(5)  # exit code 5 -> for systemctl to restart ShamrtHomeNG
            except subprocess.SubprocessError as e:
                self._logger.error("Restart command '{}' failed with error {}".format(command,e))


    def list_threads(self, txt):

        cp_threads = 0
        http_threads = 0
        for thread in threading.enumerate():
            if thread.name.find("CP Server") == 0:
                cp_threads += 1
            if thread.name.find("HTTPServer") == 0:
                http_threads +=1

        self._logger.info("list_threads: {} - Number of Threads: {} (CP Server={}, HTTPServer={}".format(txt, threading.activeCount(), cp_threads, http_threads))
        for thread in threading.enumerate():
            if thread.name.find("CP Server") != 0 and thread.name.find("HTTPServer") != 0:
                self._logger.info("list_threads: {} - Thread {}".format(txt, thread.name))
        return


    #################################################################
    # Item Methods
    #################################################################
    def __iter__(self):
#        for child in self.__children:
#            yield child
        return self.items.get_toplevel_items()


    #################################################################
    # Log Methods
    #################################################################
    """
    SmartHomeNG internally keeps a list of logs which can be extended
    Currently these logs are created by several plugins
    (plugins memlog, operationlog and visu_websocket) and initMemLog function of SmartHomeNG
    """
    def add_log(self, name, log):
        """
        Adds a log to the list of logs

        :param name: Name of log
        :param log: Log object, essentially an object based of a double ended queue
        """
        self.__logs[name] = log

    def return_logs(self):
        """
        Function to the list of logs

        :return: List of logs
        :rtype: list
        """
        return self.__logs


    #################################################################
    # Event Methods
    #################################################################
    def add_event_listener(self, events, method):
        """
        This Function adds listeners for a list of events. This function is called from
        plugins interfacing with visus (e.g. visu_websocket)

        :param events: List of events to add listeners for
        :param method: Method used by the visu-interface
        :type events: list
        :type method: object
        """

        for event in events:
            if event in self.__event_listeners:
                self.__event_listeners[event].append(method)
            else:
                self.__event_listeners[event] = [method]
        self.__all_listeners.append(method)


    def return_event_listeners(self, event='all'):
        """
        This function returns the listeners for a specified event.

        :param event: Name of the event or 'all' to return all listeners
        :type event: str

        :return: List of listeners
        :rtype: list
        """

        if event == 'all':
            return self.__all_listeners
        elif event in self.__event_listeners:
            return self.__event_listeners[event]
        else:
            return []


    #################################################################
    # Helper Methods
    #################################################################
    def _maintenance(self):
        self._logger.debug("_maintenance: Started")
        self._garbage_collection()
        references = sum(self._object_refcount().values())
        self._logger.debug("_maintenance: Object references: {}".format(references))

    def _excepthook(self, typ, value, tb):
        mytb = "".join(traceback.format_tb(tb))
        self._logger.error("Unhandled exception: {1}\n{0}\n{2}".format(typ, value, mytb))

    def _garbage_collection(self):
        c = gc.collect()
        self._logger.debug("Garbage collector: collected {0} objects.".format(c))


    def _export_threadinfo(self):

        filename = os.path.join(self.base_dir, 'var', 'run','threadinfo.json')
        if self._threadinfo_export:
            all_threads = []
            for t in threading.enumerate():
                # create thread list to be written to ../var/run
                at = {}
                at['id'] = t.ident
                try:
                    at['native_id'] = t.native_id
                except:
                    at['native_id'] = ''
                at['name'] = t.name
                all_threads.append(at)

            # write thread list to ../var/run
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(all_threads, f, ensure_ascii=False, indent=4)

        else:
            if os.path.exists(filename):
                os.remove(filename)

    def object_refcount(self):
        """
        Function to return the number of defined objects in SmartHomeNG

        :return: Number of objects
        :rtype: int
        """

        objects = self._object_refcount()
        objects = [(x[1], x[0]) for x in list(objects.items())]
        objects.sort(reverse=True)
        return objects


    def _object_refcount(self):
        objects = {}
        for module in list(sys.modules.values()):
            for sym in dir(module):
                try:
                    obj = getattr(module, sym)
                    if isinstance(obj, type):
                        objects[obj] = sys.getrefcount(obj)
                except:
                    pass
        return objects


    #####################################################################
    # Diplay DEPRECATED warning
    #####################################################################
    def _deprecated_warning(self, n_func=''):
        """
        Display function deprecated warning
        """
        if hasattr(self, '_deprecated_warnings'):
            if lib.utils.Utils.to_bool(self._deprecated_warnings) == False:
                return
        else:
            return # if parameter is not defined

        d_func = 'sh.'+str(sys._getframe(1).f_code.co_name)+'()'
        if n_func != '':
            n_func = '- use the '+n_func+' instead'
        try:
            d_test = ' (' + str(sys._getframe(2).f_locals['self'].__module__) + ')'
        except:
            d_test = ''

        called_by = str(sys._getframe(2).f_code.co_name)
        in_class = ''
        try:
            in_class = 'class ' + str(sys._getframe(2).f_locals['self'].__class__.__name__) + d_test
        except:
            in_class = 'a logic?' + d_test
        if called_by == '<module>':
            called_by = str(sys._getframe(3).f_code.co_name)
            level = 3
            while True:
                level += 1
                try:
                    c_b = str(sys._getframe(level).f_code.co_name)
                except ValueError:
                    c_b = ''
                if c_b == '':
                    break
                called_by += ' -> ' + c_b

#            called_by = str(sys._getframe(3).f_code.co_name)

        if not hasattr(self, 'dep_id_list'):
            self.dep_id_list = []
        id_str = d_func + '|' + in_class + '|' + called_by
        if not id_str in self.dep_id_list:
            self._logger.warning("DEPRECATED: Used function '{}', called in '{}' by '{}' {}".format(d_func, in_class, called_by, n_func))
            self.dep_id_list.append(id_str)
        return


    #####################################################################
    # THE FOLLOWING METHODS ARE DEPRECATED
    #####################################################################

    # obsolete by utils.
    def string2bool(self, string):
        """
        Returns the boolean value of a string

        DEPRECATED - Use lib.utils.Utils.to_bool(string) instead

        :param string: string to convert
        :type string: str

        :return: Parameter converted to bool
        :rtype: bool
        """
        self._deprecated_warning('lib.utils.Utils.to_bool(string) function')
        try:
            return lib.utils.Utils.to_bool(string)
        except Exception as e:
            return None


    #################################################################
    # Item Methods
    #################################################################
    def add_item(self, path, item):
        """
        Function to to add an item to the dictionary of items.
        If the path does not exist, it is created

        DEPRECATED - Use the Items-API instead

        :param path: Path of the item
        :param item: The item itself
        :type path: str
        :type item: object
        """
        self._deprecated_warning('Items-API')
        return self.items.add_item(path, item)


    def return_item(self, string):
        """
        Function to return the item for a given path

        DEPRECATED - Use the Items-API instead

        :param string: Path of the item to return
        :type string: str

        :return: Item
        :rtype: object
        """
        self._deprecated_warning('Items-API')
        return self.items.return_item(string)


    def return_items(self):
        """"
        Function to return a list with all items

        DEPRECATED - Use the Items-API instead

        :return: List of all items
        :rtype: list
        """
        self._deprecated_warning('Items-API')
        return self.items.return_items()


    def match_items(self, regex):
        """
        Function to match items against a regular expresseion

        DEPRECATED - Use the Items-API instead

        :param regex: Regular expression to match items against
        :type regex: str

        :return: List of matching items
        :rtype: list
        """
        self._deprecated_warning('Items-API')
        return self.items.match_items(regex)
#        regex, __, attr = regex.partition(':')
#        regex = regex.replace('.', '\.').replace('*', '.*') + '$'
#        regex = re.compile(regex)
#        attr, __, val = attr.partition('[')
#        val = val.rstrip(']')
#        if attr != '' and val != '':
#            return [self.__item_dict[item] for item in self.__items if regex.match(item) and attr in self.__item_dict[item].conf and ((type(self.__item_dict[item].conf[attr]) in [list,dict] and val in self.__item_dict[item].conf[attr]) or (val == self.__item_dict[item].conf[attr]))]
#        elif attr != '':
#            return [self.__item_dict[item] for item in self.__items if regex.match(item) and attr in self.__item_dict[item].conf]
#        else:
#            return [self.__item_dict[item] for item in self.__items if regex.match(item)]


    def find_items(self, conf):
        """"
        Function to find items that match the specified configuration

        DEPRECATED - Use the Items-API instead

        :param conf: Configuration to look for
        :type conf: str

        :return: list of matching items
        :rtype: list
        """
        self._deprecated_warning('Items-API')
        return self.items.find_items(conf)


    def find_children(self, parent, conf):
        """
        Function to find children with the specified configuration

        DEPRECATED - Use the Items-API instead

        :param parent: parent item on which to start the search
        :param conf: Configuration to look for
        :type parent: str
        :type conf: str

        :return: list or matching child-items
        :rtype: list
        """
        self._deprecated_warning('Items-API')
        return self.items.find_children(parent, conf)


    #################################################################
    # Module Methods
    #################################################################
    def return_modules(self):
        """
        Returns a list with the names of all loaded modules

        DEPRECATED - Use the Modules-API instead

        :return: list of module names
        :rtype: list
        """
        self._deprecated_warning('Modules-API')
        return self.modules.return_modules()


    def get_module(self, name):
        """
        Returns the module object for the module named by the parameter
        or None, if the named module is not loaded

        DEPRECATED - Use the Modules-API instead

        :param name: Name of the module to return
        :type name: str

        :return: list of module names
        :rtype: object
        """
        self._deprecated_warning('Modules-API')
        return self.modules.get_module(name)


    #################################################################
    # Plugin Methods
    #################################################################
    def return_plugins(self):
        """
        Returns a list with the instances of all loaded plugins

        DEPRECATED - Use the Plugins-API instead

        :return: list of plugin names
        :rtype: list
        """

        self._deprecated_warning('Plugins-API')
        return self.plugins.return_plugins()


    #################################################################
    # Logic Methods
    #################################################################
    def reload_logics(self, signum=None, frame=None):
        """
        Function to reload all logics

        DEPRECATED - Use the Logics-API instead
        """
        self._deprecated_warning('Logics-API')
        self.logics.reload_logics(signum, frame)


    def return_logic(self, name):
        """
        Returns (the object of) one loaded logic with given name

        DEPRECATED - Use the Logics-API instead

        :param name: name of the logic to get
        :type name: str

        :return: object of the logic
        :rtype: object
        """
        self._deprecated_warning('Logics-API')
        self.logics.return_logic(name)


    def return_logics(self):
        """
        Returns a list with the names of all loaded logics

        DEPRECATED - Use the Logics-API instead

        :return: list of logic names
        :rtype: list
        """
        self._deprecated_warning('Logics-API')
        self.logics.return_logics()


    #################################################################
    # Time Methods
    #################################################################
    def now(self):
        """
        Returns the actual time in a timezone aware format

        DEPRECATED - Use the Shtime-API instead

        :return: Actual time for the local timezone
        :rtype: datetime
        """

        self._deprecated_warning('Shtime-API')
        return self.shtime.now()

    def tzinfo(self):
        """
        Returns the info about the actual local timezone

        DEPRECATED - Use the Shtime-API instead

        :return: Timezone info
        :rtype: str
        """

        self._deprecated_warning('Shtime-API')
        return self.shtime.tzinfo()


    def utcnow(self):
        """
        Returns the actual time in GMT

        DEPRECATED - Use the Shtime-API instead

        :return: Actual time in GMT
        :rtype: datetime
        """

        self._deprecated_warning('Shtime-API')
        return self.shtime.utcnow()


    def utcinfo(self):
        """
        Returns the info about the GMT timezone

        DEPRECATED - Use the Shtime-API instead

        :return: Timezone info
        :rtype: str
        """

        self._deprecated_warning('Shtime-API')
        return self.shtime.utcinfo()


    def runtime(self):
        """
        Returns the uptime of SmartHomeNG

        DEPRECATED - Use the Shtime-API instead

        :return: Uptime in days, hours, minutes and seconds
        :rtype: str
        """

        self._deprecated_warning('Shtime-API')
        return self.shtime.runtime()

