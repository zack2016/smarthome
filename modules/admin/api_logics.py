#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
#  Copyright 2018-      Martin Sinn                         m.sinn@gmx.de
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
#  along with SmartHomeNG.  If not, see <http://www.gnu.org/licenses/>.
#########################################################################


import os
import logging
import json
import cherrypy
import time
import lib.config
from lib.module import Modules
from lib.utils import Utils
from lib.logic import Logics
from lib.plugin import Plugins
from lib.scheduler import Scheduler
from .rest import RESTResource


class LogicsController(RESTResource):
    logics = None
    _logicname_prefix = 'logics.'  # prefix for scheduler names

    def __init__(self, module):
        self._sh = module._sh
        self.module = module
        self.base_dir = self._sh.get_basedir()
        self.logger = logging.getLogger(__name__)

        self.logics_dir = os.path.join(self.base_dir, 'logics')
        self.logics = Logics.get_instance()
        self.logger.info("__init__ self.logics = {}".format(self.logics))
        self.plugins = Plugins.get_instance()
        self.logger.info("__init__ self.plugins = {}".format(str(self.plugins)))
        self.scheduler = Scheduler.get_instance()
        self.logger.info("__init__ self.scheduler = {}".format(self.scheduler))

        self.blockly_plugin_loaded = None
        self.logics_data = {}
        return

    def logics_initialize(self):
        """
        Initialize access to logics API and test if Blockly plugin is loaded

        This can't be done during __init__, since not all components are loaded/initialized
        at that time.
        """
        if self.logics is not None:
            return

        self.logics = Logics.get_instance()
        self.yaml_updates = (self.logics.return_config_type() == '.yaml')

        # find out if blockly plugin is loaded
        if self.blockly_plugin_loaded == None:
            self.blockly_plugin_loaded = False
            for x in self.plugins.return_plugins():
                try:
                    if x.get_shortname() == 'blockly':
                        self.blockly_plugin_loaded = True
                except:
                    pass
        return

    def fill_logicdict(self, logicname):
        """
        Returns a dict filled with information of the specified loaded logic
        """
        mylogic = dict()
        loaded_logic = self.logics.return_logic(logicname)
        if loaded_logic is not None:
            mylogic['name'] = loaded_logic.name
            mylogic['enabled'] = loaded_logic.enabled
            mylogic['logictype'] = self.logics.return_logictype(loaded_logic.name)
            mylogic['userlogic'] = self.logics.is_userlogic(loaded_logic.name)
            mylogic['filename'] = loaded_logic.filename
            mylogic['pathname'] = loaded_logic.pathname
            mylogic['cycle'] = ''
            if hasattr(self.logics.return_logic(logicname), 'cycle'):
                mylogic['cycle'] = loaded_logic.cycle
                if mylogic['cycle'] == None:
                    mylogic['cycle'] = ''

            mylogic['crontab'] = ''
            if hasattr(loaded_logic, 'crontab'):
                if loaded_logic.crontab is not None:
                    mylogic['crontab'] = Utils.strip_quotes_fromlist(self.list_to_editstring(loaded_logic.crontab))

                mylogic['crontab'] = Utils.strip_square_brackets(mylogic['crontab'])

            mylogic['watch_item'] = ''
            mylogic['watch_item_list'] = []
            if hasattr(loaded_logic, 'watch_item'):
                # Attention: watch_items are always stored as a list in logic object
                mylogic['watch_item'] = Utils.strip_quotes_fromlist(str(loaded_logic.watch_item))
                mylogic['watch_item_list'] = loaded_logic.watch_item

            mylogic['next_exec'] = ''

            if self.scheduler.return_next(self._logicname_prefix + loaded_logic.name):
                mylogic['next_exec'] = self.scheduler.return_next(
                    self._logicname_prefix + loaded_logic.name).strftime('%Y-%m-%d %H:%M:%S%z')

            mylogic['last_run'] = ''
            if loaded_logic.last_run():
                mylogic['last_run'] = loaded_logic.last_run().strftime('%Y-%m-%d %H:%M:%S%z')

            mylogic['visu_acl'] = ''
            if hasattr(loaded_logic, 'visu_acl'):
                if loaded_logic.visu_acl != 'None':
                    mylogic['visu_acl'] = Utils.strip_quotes_fromlist(str(loaded_logic.visu_acl))

        return mylogic

    def list_to_editstring(self, l):
        """
        """
        if type(l) is str:
            self.logger.debug("list_to_editstring: >{}<  -->  >{}<".format(l, l))
            return l

        edit_string = ''
        for entry in l:
            if edit_string != '':
                edit_string += ' | '
            edit_string += str(entry)
        self.logger.debug("list_to_editstring: >{}<  -->  >{}<".format(l, edit_string))
        return edit_string

    def logic_findnew(self, loadedlogics):
        """
        Find new logics (logics defined in /etc/logic.yaml but not loaded)
        """
        _config = {}
        _config.update(
            self.logics._read_logics(self.logics._get_logic_conf_basename(), self.logics.get_logics_dir()))

        self.logger.info("logic_findnew: _config = '{}'".format(_config))
        newlogics = []
        for configlogic in _config:
            found = False
            for l in loadedlogics:
                if configlogic == str(l['name']):
                    found = True
            if not found:
                self.logger.info("LogicsController (logic_findnew): name = {}".format(configlogic))
                if _config[configlogic] != 'None':
                    mylogic = {}
                    mylogic['name'] = configlogic
                    mylogic['userlogic'] = True
                    mylogic['logictype'] = self.logics.return_logictype(mylogic['name'])
                    if mylogic['logictype'] == 'Python':
                        mylogic['filename'] = _config[configlogic]['filename']
                        mylogic['pathname'] = self.logics.get_logics_dir() + mylogic['filename']
                    elif mylogic['logictype'] == 'Blockly':
                        mylogic['filename'] = _config[configlogic]['filename']
                        mylogic['pathname'] = \
                        os.path.splitext(self.logics.get_logics_dir() + _config[configlogic]['filename'])[
                            0] + '.blockly'
                    else:
                        mylogic['filename'] = ''

                    newlogics.append(mylogic)
        return newlogics

    @cherrypy.expose
    def index(self):
        """
        return an object with type info about all logics
        """

        # create a list of dicts, where each dict contains the information for one logic
        self.logger.info("LogicsController(): index")

        if self.plugins is None:
            self.plugins = Plugins.get_instance()
        if self.scheduler is None:
            self.scheduler = Scheduler.get_instance()

        logics_list = []
        self.logics_initialize()

        for ln in self.logics.return_loaded_logics():
            logic = self.fill_logicdict(ln)
            if logic['logictype'] == 'Blockly':
                logic['pathname'] = os.path.splitext(logic['pathname'])[0] + '.blockly'
            logics_list.append(logic)
            self.logger.debug(
                "- logic = {}, enabled = {}, , logictype = {}, filename = {}, userlogic = {}, watch_item = {}".format(
                    str(logic['name']), str(logic['enabled']), str(logic['logictype']), str(logic['filename']),
                    str(logic['userlogic']), str(logic['watch_item'])))

        logics_new = sorted(self.logic_findnew(logics_list), key=lambda k: k['name'])
        logics_sorted = sorted(logics_list, key=lambda k: k['name'])
        self.logics_data = {'logics_new': logics_new, 'logics': logics_sorted}
        return json.dumps(self.logics_data)
