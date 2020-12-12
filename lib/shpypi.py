#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
# Copyright 2018-       Martin Sinn                         m.sinn@gmx.de
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


try:
    import pkg_resources
except:
    print()
    print("ERROR: setuptools are not installed")
    print("Install with 'pip3 install setuptools'")
    print()
    exit(1)


import logging
import os
import pathlib
import sys
import fnmatch
import datetime
import time
import re

# to be able to run first pypi check in commandline mode
try:
    import requests
    import xmltodict
except:
    pass

from lib.utils import Utils
from lib.constants import (YAML_FILE)


_shpypi_instance = None    # Pointer to the initialized instance of the Shpypi class (for use by static methods)


class Shpypi:

    def __init__(self, sh=None, base=None):
        """

        :param smarthome:

        NOTE: During initialization (and initial calls to some methods, the logging interface is not yet initialized!!!
        """
        self.logger = logging.getLogger(__name__)

        global _shpypi_instance
        if _shpypi_instance is not None:
            import inspect
            curframe = inspect.currentframe()
            calframe = inspect.getouterframes(curframe, 4)
            self.logger.critical("A second 'shpypi' object has been created. There should only be ONE instance of class 'Shpypi'!!! Called from: {} {} ({})".format(calframe[1][1], calframe[1][2], calframe[1][3]))

        _shpypi_instance = self
        self.req_files = Requirements_files()

        self.scheduler_crontab = ['init', '7 3 * *']

        self.sh = sh
        if sh is None:
            self.logger.debug("SmartHomeNG is None")
            if base:
                self._sh_dir = base
                self._error = False
        else:
            self._sh_dir = sh.get_basedir()    # anders bestimmen für tools/build_requirements.py

            self._error = False
        self.logger.debug("SmartHomeNG is using '{}' as base directory".format(self._sh_dir))
        return


    # --------------------------------------------------------------------------------------------
    #   Following (static) method of the class Shpypi implement the API for PyPI checking in shNG
    # --------------------------------------------------------------------------------------------

    @staticmethod
    def get_instance():
        """
        Returns the instance of the Shpypi class, to be used to access the shpypi-API

       .. code-block:: python

           from lib.shpypi import Shtime
           shtime = Shpypi.get_instance()

           # to access a method (eg. to get timezone info):
           shtime.tzinfo()


        :return: shinfo instance
        :rtype: object or None
        """
        if _shpypi_instance == None:
            return None
        else:
            return _shpypi_instance


    def set_scheduler_crontab(self, crontab):
        """
        Set schedule for shpypi task

        :param crontab: crontab entry for the update task for PyPI releases
        """
        self.scheduler_crontab = ['init', crontab]


    def get_installed_packages(self):
        """
        Returns a dict with the versions of the installed packages

        When problems with requirements occur, it probably has to do with multiple Python 3 versions beeing installed
        Make sure, the packages are installed into the Python version you are using to start SmartHomeNG

            instead of using
                [sudo] pip[3] install [--upgrade] <package(s)>,
            use
                [sudo] <python used to start SmartHomeNG> -m pip[3] install [--upgrade] <package(s)>

        How to change from default to alternative Python version on Debian Linux:

            https://linuxconfig.org/how-to-change-from-default-to-alternative-python-version-on-debian-linux

        :return: dict of package and version
        :rtype: dict
        """

        installed_packages = pkg_resources.working_set

        installed_packages_dict = {}
        for dist in installed_packages:
            installed_packages_dict[dist.key] = dist.version

        self.logger.info("get_installed_packages: installed_packages_dict = {}".format(installed_packages_dict))
        return installed_packages_dict


    # def get_installed_packages(self):
    #     """
    #     Returns a dict with the versions of the installed packages
    #
    #     :return: dict of package and version
    #     :rtype: dict
    #     """
    #     import subprocess
    #
    #     test = subprocess.check_output(['pip3', 'freeze'])
    #     test_list = test.decode().split('\n')
    #     test_dict = {}
    #     self.logger.info("shpypi: Installed Python packages:")
    #     for pkg in test_list:
    #         if '==' in pkg:
    #             p,v = pkg.split('==')
    #             self.logger.info(" - {}: v{}".format(p, v))
    #             test_dict[p.lower()] = v
    #     return test_dict


    def test_requirements(self, filepath, logging=True, hard_requirement=True):
        if logging:
            self.logger.info("test_requirements: filepath '{}' is being checked".format(filepath))

        req_dict = self.parse_requirementsfile(filepath)
        inst_dict = self.get_installed_packages()

        requirements_met = True
        for req_pkg in req_dict:
            inst_vers = inst_dict.get(req_pkg.lower(), '-')
            min = req_dict[req_pkg].get('min', '*')
            max = req_dict[req_pkg].get('max', '*')
            if min == '*':
                min_met = True
            else:
                min_met = self._compare_versions(min, inst_vers, '<=')
            if max == '*':
                max_met = True
            else:
                max_met = self._compare_versions(inst_vers, max, '<=')

            if inst_vers == '-' or (not min_met) or (not max_met):
                requirements_met = False
                if logging:
                    if hard_requirement:
                        if inst_vers == '-' and min == '*':
                            self.logger.error("test_requirements: '{}' not installed, any version needed".format(req_pkg))
                        elif inst_vers == '-':
                            self.logger.error("test_requirements: '{}' not installed. Minimum v{} needed".format(req_pkg, min))
                        elif not min_met:
                            self.logger.error("test_requirements: '{}' v{} too old. Minimum v{} needed".format(req_pkg, inst_vers, min))
                        else:
                            self.logger.error("test_requirements: '{}' v{} too new. Maximum v{} needed".format(req_pkg, inst_vers, max))
                else:
                    if not self._error:
                        print()
                        self._error = True
                    if inst_vers == '-' and min == '*':
                        print("test_requirements: '{}' not installed, any version needed".format(req_pkg))
                    elif inst_vers == '-':
                        print("test_requirements: '{}' not installed. Minimum v{} needed".format(req_pkg, min))
                    elif not min_met:
                        print("test_requirements: '{}' v{} too old. Minimum v{} needed".format(req_pkg, inst_vers, min))
                    else:
                        print("test_requirements: '{}' v{} too new. Maximum v{} needed".format(req_pkg, inst_vers, max))

        return requirements_met


    def test_core_requirements(self, logging=True, pip3_command=None):

        # build an actual requirements file for core+modules
        # req_files = Requirements_files()
        self.req_files.create_requirementsfile('base')
        self.req_files.create_requirementsfile('all')
        self.req_files.create_requirementsfile('core')

        # test if the requirements of the core.txt file are met
        complete_filename = os.path.join(self._sh_dir, 'requirements', 'core.txt')
        requirements_met = self.test_requirements(os.path.join(complete_filename), logging)

        if requirements_met:
            os.remove(complete_filename)
            return 1
        else:
            if self.install_requirements('core', logging, pip3_command):
                return 0
            else:
                if logging:
                    self.logger.error("test_core_requirements: Python package requirements not met - Should terminate")
                else:
                    # no logging, if called before logging is configured
                    #print("Python package requirements not met - SmartHomeNG is terminating")
                    pass
                return -1



    _conf_plugin_filelist = []


    def test_base_requirements(self, sh=None):

        if sh is not None:
            self.sh = sh
        # build an actual requirements file for core+modules
        # req_files = Requirements_files()
        self.req_files.create_requirementsfile('base')

        # test if the requirements of the base.txt file are met
        requirements_met = self.test_requirements(os.path.join(self._sh_dir, 'requirements', 'base.txt'), logging)

        if requirements_met:
            return 1
        else:
            if self.install_requirements('base', logging):
                return 0
            else:
                self.logger.info("test_base_requirements: Python package requirements not met")
                return -1


    def test_conf_plugins_requirements(self, plugin_conf_basename, plugins_dir):
        # import lib.shyaml here, so test_base_requirements() can be run even if ruamel.yaml package is not installed
        import lib.shyaml as shyaml

        if not os.path.isfile(plugin_conf_basename+ YAML_FILE):
            self.logger.warning("Requirments for configured plugins were not checked because the plugin configuration is not in YAML format")
            return True

        plugin_conf = shyaml.yaml_load(plugin_conf_basename + YAML_FILE, ordered=False)

        req_dict = {}
        if plugin_conf is not None:
            for plugin_instance in plugin_conf:
                plugin_name = plugin_conf[plugin_instance].get('plugin_name', None)
                class_path = plugin_conf[plugin_instance].get('class_path', None)
                plugin = ''
                if class_path:
                    if class_path.startswith('plugins.'):
                        sp = class_path.split('.')
                        if len(sp) == 2:
                            plugin = sp[1]
                if plugin == '' and plugin_name:
                    plugin = plugin_name

                filename = os.path.join(plugins_dir, plugin, 'requirements.txt')
                if not os.path.isfile(filename):
                    filename = ''
                else:
                    if plugin != '':
                        req_dict[plugin] = filename

        self._conf_plugin_filelist = []
        for plugin in req_dict:
            self._conf_plugin_filelist.append(req_dict[plugin])

        #req_files = Requirements_files()
        self.req_files.set_conf_plugin_files(self._conf_plugin_filelist)
        self.req_files.create_requirementsfile('conf_all')

        requirements_met = self.test_requirements(os.path.join(self._sh_dir, 'requirements', 'conf_all.txt'), True)
        if requirements_met:
            return 1
        else:
            if self.install_requirements('conf_all', logging):
                return 0
            else:
                self.logger.info("test_conf_plugins_requirements: Python package requirements for configured plugins not met")
                return -1

    def get_pip_command(self):
        """
        returns the correct pip command
        """
        try:
            pip_command = self.sh._pip_command
            if logging:
                self.logger.warning("PIP command read from smarthome.yaml: '{}'".format(pip_command))
            return pip_command
        except:
            pass

        if self.sh:
            #print("self.sh.python_bin="+self.sh.python_bin)
            python_bin_path = os.path.split(self.sh.python_bin)[0]
        else:
            python_bin_path = os.path.split(sys.executable)[0]
        print("python_bin_path={}".format(python_bin_path))

        if not os.name == 'nt':
            pip_command = os.path.join(python_bin_path, 'pip3')
            if not os.path.isfile(pip_command):
                python_bin_path, python_bin_executable = os.path.split(os.__file__)
                pip_command = os.path.join(python_bin_path[:python_bin_path.find('/lib')], 'bin', ('pip' + python_bin_path[-3:]))
                if not os.path.isfile(pip_command):
                    # use pip3 if pip3.x does not exist
                    pip_command = os.path.join(python_bin_path[:python_bin_path.find('/lib')], 'bin', 'pip3')
        else:
            pip_command = pathlib.Path(python_bin_path) / 'scripts' / 'pip.exe'
            if not pip_command.is_file():
                pass

        return str(pip_command)

    def install_requirements(self, req_type, logging=True, pip3_command=None):
        req_type_display = req_type
        if req_type == 'conf_all':
            req_type_display = 'plugin'
        complete_filename = os.path.join(self._sh_dir, 'requirements', req_type + '.txt')
        if logging:
            self.logger.warning("Installing "+req_type_display+" requirements for the current user, please wait...")
        else:
            print()
            print("Installing "+req_type_display+" requirements for the current user, please wait...")

        if pip3_command:
            pip_command = pip3_command
        else:
            pip_command = self.get_pip_command()
        self.logger.warning("> using PIP command: '{}'".format(pip_command))
        if logging:
            self.logger.info('> '+pip_command+' install -r requirements/'+req_type+'.txt --user --no-warn-script-location')
        else:
            #print('> ' + pip_command + ' install -r requirements/' + req_type + '.txt --user --no-warn-script-location')
            pass

        stdout, stderr = Utils.execute_subprocess(pip_command+' install -r requirements/'+req_type+'.txt --user --no-warn-script-location')
        ####
        pip_log_name = os.path.join(self._sh_dir, 'var', 'log', 'pip3_outout.log')
        with open(pip_log_name, 'w', encoding='utf8') as outfile:
            outfile.write(stdout)
        if stderr != '':
            pip_log_name = os.path.join(self._sh_dir, 'var', 'log', 'pip3_error.log')
            with open(pip_log_name, 'w', encoding='utf8') as outfile:
                outfile.write(stderr)
            if 'virtualenv' in stderr and '--user' in stderr:
                if logging:
                    self.logger.warning("Running in a virtualenv environment - installing " + req_type_display + " requirements only to actual virtualenv, please wait...")
                else:
                    print("Running in a virtualenv environment,")
                    print("installing "+req_type_display+" requirements only to actual virtualenv, please wait...")
                stdout, stderr = Utils.execute_subprocess('pip3 install -r requirements/'+req_type+'.txt')
        if logging:
            self.logger.debug("stdout = 'Output from PIP command:\n{}'".format(stdout))
        if not logging:
            print()

        if stderr == '':
            if logging:
                self.logger.warning(req_type_display+" requirements installed")
            else:
                print(req_type_display+" requirements installed")
                print()
            #print('len(stdout)=' + str(len(str(stdout))))
            #print(stdout)
            return True
        else:
            if stdout.find("Successfully installed") > -1:
                # result on windows nt:
                # WARNING: You are using pip version 19.2.3, however version 20.2.1 is available.
                # You should consider upgrading via the 'python -m pip install --upgrade pip' command.
                if stderr.find("You should consider upgrading via") > -1 and stderr.find("pip install --upgrade pip") > -1:
                    #if logging:
                    #    self.logger.warning(stderr)
                    return True
            if logging:
                self.logger.error(stderr)
            else:
                #print('len(stderr)='+str(len(str(stderr))))
                print('ERROR:')
                print(stderr)
        return False


    def parse_requirementsfile(self, file_path):
        """
        Parses the requirements file and returns the requirements as a dict

        The resulting dict has the package name as the key and the requirements string as the value

        Syntax of requirements-string:
        - operator: <, <=, ==, >=, >>
        - source: <name of plugin> or 'core'
        - version_relation: <operator><version>
        - pyversion_relation: <operator><pyversion>
        - version_relations: <version_relation>,<version_relation>
        - py_vers_requirement: <version_relations>;<pyversion_relation>
        - py_vers_requirements: <py_vers_requirement> | <py_vers_requirement>
        - requirement_string: <py_vers_requirements> (<source>)


        :param file_path: pathname to file with python requirements
        :type file_path: str

        :return: Requirements defined in the file
        :rtype: dict
        """

        self.logger.info("parse_requirementsfile: file_path = {}".format(file_path))
        do_log = file_path.endswith('conf_all.txt')

        req_dict = {}
        try:
            fobj = open(file_path, encoding='utf8')
        except:
            return req_dict

        # process file
        for rline in fobj:
            line_raw = self._remove_comments(rline)

            if len(line_raw) > 0:
                try:
                    line, line_pyvers = line_raw.split(';')
                    line_pyvers = ';' + line_pyvers
                except:
                    line = line_raw
                    line_pyvers = ''

                if ">" in line:
                    key = line[0:line.find(">")].lower().strip()
                    if key in req_dict:
                        req_dict[key] += " | " + line[line.find(">"):len(line)].lower().strip() + line_pyvers
                    else:
                        req_dict[key] = line[line.find(">"):len(line)].lower().strip() + line_pyvers

                elif "<" in line:
                    key = line[0:line.find("<")].lower().strip()
                    if key in req_dict:
                        req_dict[key] += " | " + line[line.find("<"):len(line)].lower().strip() + line_pyvers
                    else:
                        req_dict[key] = line[line.find("<"):len(line)].lower().strip() + line_pyvers

                elif "=" in line:
                    key = line[0:line.find("=")].lower().strip()
                    if key in req_dict:
                        req_dict[key] += " | " + line[line.find("="):len(line)].lower().strip() + line_pyvers
                    else:
                        req_dict[key] = line[line.find("="):len(line)].lower().strip() + line_pyvers

                else:
                    key = line.lower().strip()
                    if key in req_dict:
                        req_dict[key] += " | " + '==*' + line_pyvers
                    else:
                        req_dict[key] = '==*' + line_pyvers
                if do_log:
                    self.logger.info("parse_requirementsfile: line_raw = '{}', req_dict['{}'] = '{}'".format(line_raw, key, req_dict[key]))

        fobj.close()

        result_dict = {}
        if do_log:
            self.logger.debug("parse_requirementsfile: req_dict = '{}'".format(req_dict))
        for pkg in req_dict:
            if do_log:
                self.logger.debug("parse_requirementsfile  : pkg = {}, req_dict[pkg] = {}".format(pkg, req_dict[pkg]))
            result_dict[pkg] = self._split_requirement(req_dict[pkg], do_log)
            if do_log:
                self.logger.info("parse_requirementsfile: pkg = {}, result_dict[pkg] = '{}'".format(pkg, result_dict[pkg]))
            if type(result_dict[pkg]) is list:
                self.logger.warning(" - {}: MULTIPLE requirements {}".format(pkg, result_dict[pkg]))
            # self.logger.warning(" - {}: req_str = '{}', requirements = {}".format(pkg, req_dict[pkg], result_dict[pkg]))
        # self.logger.warning("parse_requirementsfile: result_dict = {}".format(result_dict))

        return result_dict




    package_list = []  # list of packages - gets filled by get_packagelist()


    def set_packagedata(self, name, add=False):
        """
        Add a package dict to the list (if the package name does not jet exist) and return the index to that list entry

        :param name: name of the Python packahe
        :type name: str

        :return: index of the packages' dict within the list
        :rtype: int
        """
        list_index = next((index for (index, d) in enumerate(self.package_list) if d["name"] == name), None)
        if list_index == None and add:
            package = {}
            package['name'] = name
            package['vers_installed'] = '-'
            package['is_required'] = False
#            package['is_required_for_modules'] = False
            package['is_required_for_plugins'] = False
            package['is_required_for_testsuite'] = False
            package['is_required_for_docbuild'] = False
            package['required_group'] = '6'
            package['sort'] = self._build_sortstring(package)

            package['vers_req_min'] = ''
            package['vers_req_max'] = ''
            package['vers_req_msg'] = ''
            package['vers_req_source'] = ''

            package['vers_ok'] = False
            package['vers_recent'] = False
            package['pypi_version'] = '--'
            package['pypi_version_ok'] = True
            package['pypi_version_not_available_msg'] = ''
            package['pypi_doc_url'] = ''


            self.package_list.append(package)
            list_index = len(self.package_list) - 1

        return list_index


    def get_packagelist(self):
        """
        Get the combined list of installed and required packages

        :return: Complete list of package date
        :rtype: list
        """

        self.package_list = []

        # process required base packages
        required_packages = self.parse_requirementsfile(os.path.join(self._sh_dir, 'requirements', 'base.txt'))
        self.logger.info("get_packagelist: required_packages = {}".format(required_packages))

        for pkg_name in required_packages:
            if required_packages[pkg_name] != {}:   # ignore empty requirements (e.g. requirement exists only for other Python version
                index = self.set_packagedata(pkg_name, add=True)
                if index != None:
                    package = self.package_list[index]

                    package['is_required'] = True
                    package['sort'] = self._build_sortstring(package)

                    package['vers_req_min'] = required_packages[pkg_name].get('min', '*')
                    package['vers_req_max'] = required_packages[pkg_name].get('max', '*')
                    package['vers_req_msg'] = ''
                    package['vers_req_source'] = ''
                    package['sort'] = self._build_sortstring(package)


        # process installed packages
        installed_packages = self.get_installed_packages()
        self.logger.info("get_packagelist: installed_packages = {}".format(installed_packages))
        for pkg_name in installed_packages:
            index = self.set_packagedata(pkg_name, add=True)
            if index != None:
                package = self.package_list[index]

                package['vers_installed'] = installed_packages[pkg_name]

        self.logger.info("get_packagelist: package_list = {}".format(self.package_list))


        # process required (all) packages
        required_packages = self.parse_requirementsfile(os.path.join(self._sh_dir, 'requirements', 'all.txt'))
        self.logger.info("get_packagelist: required_packages = {}".format(required_packages))

        for pkg_name in required_packages:
            if required_packages[pkg_name] != {}:   # ignore empty requirements (e.g. requirement exists only for other Python version
                index = self.set_packagedata(pkg_name, add=False)
                if index != None:
                    package = self.package_list[index]

                    if package['is_required'] == False:
                        package['is_required_for_plugins'] = True
                        package['sort'] = self._build_sortstring(package)

                    package['vers_req_min'] = required_packages[pkg_name].get('min', '*')
                    package['vers_req_max'] = required_packages[pkg_name].get('max', '*')
                    package['vers_req_msg'] = ''
                    package['vers_req_source'] = ''


        # process required doc-packages
        required_packages = self.parse_requirementsfile(os.path.join(self._sh_dir, 'doc', 'requirements.txt'))
        self.logger.info("get_packagelist: required_doc_packages = {}".format(required_packages))

        for pkg_name in required_packages:
            if required_packages[pkg_name] != {}:   # ignore empty requirements (e.g. requirement exists only for other Python version
                index = self.set_packagedata(pkg_name, add=True)
                if index != None:
                    package = self.package_list[index]

                    if package['is_required'] == False:
                        package['is_required_for_docbuild'] = True
                        package['sort'] = self._build_sortstring(package)

                    if package['vers_req_min'] == '' and package['vers_req_max'] == '':
                        package['vers_req_min'] = required_packages[pkg_name].get('min', '*')
                        package['vers_req_max'] = required_packages[pkg_name].get('max', '*')
                    package['vers_req_msg'] = ''
                    package['vers_req_source'] = ''


        # process required test-packages
        required_packages = self.parse_requirementsfile(os.path.join(self._sh_dir, 'requirements', 'test.txt'))
        self.logger.info("get_packagelist: required_test_packages = {}".format(required_packages))

        for pkg_name in required_packages:
            if required_packages[pkg_name] != {}:   # ignore empty requirements (e.g. requirement exists only for other Python version
                index = self.set_packagedata(pkg_name, add=True)
                package = self.package_list[index]

                if package['is_required'] == False:
                    package['is_required_for_testsuite'] = True
                    package['sort'] = self._build_sortstring(package)

                if package['vers_req_min'] == '' and package['vers_req_max'] == '':
                    package['vers_req_min'] = required_packages[pkg_name].get('min', '*')
                    package['vers_req_max'] = required_packages[pkg_name].get('max', '*')
                package['vers_req_msg'] = ''
                package['vers_req_source'] = ''

        self.pypi_timeout = 4
        # check if pypi service is reachable
        if self.pypi_timeout <= 0:
            pypi_available = False
            # pypi_unavailable_message = translate('PyPI Prüfung deaktiviert')
            pypi_unavailable_message = 'PyPI Prüfung deaktiviert'
        else:
            pypi_available = True
            try:
                import socket
                sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                sock.settimeout(self.pypi_timeout)
                # sock.connect(('pypi.python.org', 443))
                sock.connect(('pypi.org', 443))
                sock.close()
            except:
                pypi_available = False

        # look for PyPI release data of the packages
        from lib.scheduler import Scheduler
        if self.pypi_timeout > 0:
            self.scheduler = Scheduler.get_instance()
            self.scheduler.add('shpypi.get_releasedata', self.lookup_pypi_releasedata, cron = self.scheduler_crontab)
        else:
            self.lookup_pypi_releasedata(False)

        sorted_package_list = sorted(self.package_list, key=lambda k: k['sort'], reverse=False)
        self.logger.info("get_packagelist: Returning sorted_package_list = {}".format(sorted_package_list))
        return sorted_package_list


    def lookup_pypi_releasedata(self, pypi_available=True):
        self.logger.debug("lookup_pypi_releasedata: pypi_available={}".format(pypi_available))
        for package in self.package_list:
            if (package['is_required'] == True) or True:
                if pypi_available :
                    self.get_package_releases_data(package)
                    #scheduler.add(self, name, obj, prio=3, cron=None, cycle=None, value=None, offset=None, next=None, from_smartplugin=False):
                    #self._sh.scheduler.add(self._itemname_prefix + self._path, self, cron=self._crontab, cycle=cycle)
                else:
                    self.logger.warning("get_packagelist ({}): PyPI nicht erreichbar".format(package))
                    if package['pypi_version'] == '':
                        package['pypi_version'] = '--'
                    package['pypi_version_not_available_msg'] = 'PyPI nicht erreichbar'

            # check if installed version is ok and recent
            self.check_package_version_data(package)
        return


    def check_package_version_data(self, package):
        # check if installed version is ok and recent
        if package['vers_installed'] != '-':
            min = package['vers_req_min']
            max = package['vers_req_max']
            recent = package['pypi_version']
            inst_vers = package['vers_installed']
            if min == '*':
                min_met = True
            else:
                min_met = self._compare_versions(min, inst_vers, '<=')
            if max == '*':
                max_met = True
            else:
                max_met = self._compare_versions(inst_vers, max, '<=')
            if min_met and max_met:
                package['vers_ok'] = True
            recent_met = self._compare_versions(inst_vers, recent, '==')
            if recent_met:
                package['vers_recent'] = True
            if max != '*':
                pypi_ok = self._compare_versions(recent, max, '<=')
                if not pypi_ok:
                    package['pypi_version_ok'] = False
        return


    def get_releasedata_frompypi(self, package):
        """
        Get data of available releases from pypi.org via
        :param package:
        :return:
        """
        result = []
        r = requests.get('https://pypi.org/rss/project/' + package + '/releases.xml')
        if r.status_code == 200:
            xmldict = xmltodict.parse(r.text)

            pypi_item_list = xmldict['rss']['channel']['item']
            if isinstance(pypi_item_list, dict):
                pypi_item_list = [pypi_item_list]
            for i in pypi_item_list:
                result.append(dict(i))

        return result


    def get_package_releases_data(self, package):
        """

        :param instance:
        :param owner:
        :return:
        """

        version_read = False
        while version_read == False:
            package['pypi_version'] = '--'
            package['pypi_version_not_available_msg'] = '?'
            package['pypi_version_ok'] = False
            package['pypi_doc_url'] = ''

            available = self.get_releasedata_frompypi(package['name'])
            self.logger.debug("get_package_releases_data: -> pypi package: project_name {}, availabe = {}".format(package['name'], available))
            try:
                package['pypi_version'] = available[0]['title']
                package['pypi_version_not_available_msg'] = ""
                package['pypi_version_ok'] = True
                package['pypi_doc_url'] = 'https://pypi.org/pypi/' + package['name']
                version_read = True
            except:
                pass

            self.logger.debug("get_package_releases_data ({}): Version {}".format(package['name'], package['pypi_version']))

        return


    def _build_sortstring(self, package):
        """
        Build and return the sort string, based on on the is_required_* elements of the requirements dict

        :param package: package requirements
        :type package: dict

        :return: sortstring
        :rtype: str
        """
        result = ''
        if package['is_required']:
            result = '1'
#        elif package['is_required_for_modules']:
#            result = '2'
        elif package['is_required_for_plugins']:
            result = '3'
        elif package['is_required_for_testsuite']:
            result = '4'
        elif package['is_required_for_docbuild']:
            result = '5'
        else:
            result = '6'

        package['required_group'] = result
        result += package['name']
        return result


    def _remove_comments(self, rline):
        """
        :param rline: line from which comments are to be removed
        :type rline: str

        :return: processed line
        :rtype: str
        """
        line = ''
        if len(rline) > 0:
            # remove comments ans strip leading-/trailing spaces
            if rline.find('#') == -1:
                line = rline
            else:
                line = rline[0:rline.find("#")]
        return line.lower().strip()




    def _split_requirement(self, req_str, do_log=False):
        """
        Split requirement string

        :param req_str:
        :return:
        """
        pyversion = "{0}.{1}".format(sys.version_info[0], sys.version_info[1])

        # Split requirement string into list of requirements (with python version)
        requirements_list = req_str.split('|')
        result_list = []
        for i in range(0, len(requirements_list)):
            # Split requirement (with python version) into list of requirement and python version
            requirement = requirements_list[i].split(';')   # split requirement into list of requirement and pyvers requirement
            if do_log:
                self.logger.debug("- _split_requirement *1: {} -> requirement = {}".format(requirements_list[i], requirement))
            if len(requirement) == 1:
                result_list.append(self._split_requirement_to_min_max(requirement[0]))
            else:
                # python version sppecified in requirement
                for j in range(0, len(requirement)):
                    requirement[j] = requirement[j].strip()
                if do_log:
                    self.logger.info("- _split_requirement *2: {} -> requirement = {}".format(requirements_list[i], requirement))
                if requirement[1].startswith('python_version'):
                    requirement[1] = requirement[1].replace('python_version', '')

                operator, version = self._split_operator(requirement[1])
                if self._compare_versions(pyversion, version, operator):
                    result_list.append(self._split_requirement_to_min_max(requirement[0]))

        if len(result_list) > 2:
            # Hier sollten die Einträge noch konsolidiert werden
            # Vorübergehend: Eine Liste von dicts zurückliefern
            return result_list

        if len(result_list) == 2:
            result = {}

            #consolidate minimum values (only '*' at the moment)
            val0 = result_list[0].get('min', None)
            val1 = result_list[1].get('min', None)
            if  val0 is not None and val1 is not None:
                # Consolidate minimum requirements
                if val0 == '*':
                    result['min'] = val1
                elif val1 == '*':
                    result['min'] = val0
            elif val0 is None:
                result['min'] = val1
            elif val1 is None:
                result['min'] = val0

            #consolidate maximum values (only '*' at the moment)
            val0 = result_list[0].get('max', None)
            val1 = result_list[1].get('max', None)
            if  val0 is not None and val1 is not None:
                # Consolidate minimum requirements
                if val0 == '*':
                    result['max'] = val1
                elif val1 == '*':
                    result['max'] = val0
            elif val0 is None:
                result['max'] = val1
            elif val1 is None:
                result['max'] = val0

            return result

        if len(result_list) == 0:
            return {}

        return result_list[0]



    def _split_operator(self, reqstring):
        """
        split operator and version from string

        :param reqstring: string containing operator and version
        :type reqstring: str

        :return: operator, version
        :rtype: str, str
        """
        version = ''
        if not(type(reqstring) is str):
            self.logger.warning('_split_operator: reqstring = {}'.format(reqstring))
        reqstring = reqstring.strip()
        for operator in ['==', '<=', '>=', '<', '>']:
            if reqstring.startswith(operator):
                # strip operator (and quotes)
                version = Utils.strip_quotes(reqstring[len(operator):].strip())
                break
        if version == '':
            return '', reqstring.strip()
        else:
            return operator.strip(), version.strip()



    def _split_requirement_to_min_max(self, requirement):
        result = {}
        reqs = requirement.split(',')
        for req in reqs:
            operator, version = self._split_operator(req)
            if operator in ['>=', '==', '>']:
                result['min'] = version
            if operator in ['<', '<=', '==']:
                result['max'] = version

        return result



    def _compare_versions(self, vers1, vers2, operator):
        """
        Compare two version numbers and return if the condition is met

        :param vers1:
        :param vers2:
        :param operator:
        :type vers1: str
        :type vers2: str
        :type operator: str

        :return: true if condition is met
        :rtype: bool
        """
        v1 = self._version_to_list(vers1)
        v2 = self._version_to_list(vers2)

        result = False
        if v1 == v2 and operator in ['>=', '==', '<=']:
            result = True
        if v1 < v2 and operator in ['<', '<=']:
            result = True
        if v1 > v2 and operator in ['>', '>=']:
            result = True

        self.logger.debug("_compare_versions: - - - vers1 = {}, vers2 = {}, v1 = {}, v2 = {}, operator = '{}', result = {}".format(vers1, vers2, v1, v2, operator, result))
        return result


    def _version_to_list(self, vers):
        """
        Split version number to list and get rid of non-numeric parts

        :param vers:

        :return: version as list
        :rtype: list
        """
        # create list with [major,minor,revision,build]
        vsplit = vers.split('.')
        while len(vsplit) < 4:
            vsplit.append('0')

        # get rid of non numeric parts
        vlist = []
        for v in vsplit:
            vi = 0
            try:
                vi = int(v)
            except:
                pass
            vlist.append(vi)

        return vlist



# ===================================================================================================
#
# The following class can create requirements-files for one of the following selections:
#
#  - core
#  - modules
#  - base (core + modules)
#  - plugins (all plugins in directory ../plugins
#  - all (core + modules + plugins)
#

class Requirements_files():

    _module_files = []
    _plugin_files = []
    _core_files = []  # to be a list in the future

    def __init__(self):

        self.logger = logging.getLogger(__name__)

        self._conf_plugin_files = []
        self.sh_basedir = os.sep.join(os.path.realpath(__file__).split(os.sep)[:-2])
        self.logger.debug("Requirements_files is using '{}' as base directory".format(self.sh_basedir))
        return


    def _seperate_operator_version(self, op_vers):
        """
        Seperate operator and version number into a list of two seperate strings

        :param op_vers:

        :return: list containing 2 elements (operator, version)
        :rtype: list
        """
        op_vers = op_vers.strip()
        if op_vers.startswith('>='):
            op = '>='
            vers = op_vers[2:]
        elif op_vers.startswith('=='):
            op = '=='
            vers = op_vers[2:]
        elif op_vers.startswith('<='):
            op = '<='
            vers = op_vers[2:]
        else:
            op = ''
            vers = op_vers
        vers = vers.strip()

        return [op,vers]


    def _build_packagelist(self, requirements):
        """
        Build a list of dicts with package information

        :return: list of package-dicts
        :rtype: list
        """

        # build list of package requirement dicts
        packagelist = []
        self.logger.debug("Req_files: _build_packagelist: requirements = '{}'".format(requirements))
        for key in requirements:
            packaged = {}
            wrk = re.split('<|>|=', key)
            packaged['pkg'] = wrk[0].strip()
            if packaged['pkg'].startswith('#'):
                continue
            self.logger.debug("_build_packagelist: Req_files: - key: '{}', wrk = '{}', packaged = '{}'".format(key, wrk, packaged))

            pkg = key[len(packaged['pkg']):]
            if pkg.find(';') == -1:
                # keine python_version angegeben
                packaged['py_vers'] = ''
                wrk = re.split(',', pkg)
                wrk2 = []
                for r in wrk:
                    r2 = self._seperate_operator_version(r)
                    wrk2.append(r2)
                packaged['req'] = wrk2
            else:
                # python_version angegeben
                wrk = re.split(';', pkg)
                if wrk[1].startswith('python_version'):
                    wrk[1] = wrk[1][len('python_version'):]
                packaged['py_vers'] = wrk[1]
                wrk = re.split(',', wrk[0])
                wrk2 = []
                for r in wrk:
                    r2 = self._seperate_operator_version(r)
                    wrk2.append(r2)
                packaged['req'] = wrk2

            plglist = requirements[key]
            packaged['used_by'] = requirements[key]
            packaged['key'] = packaged['pkg'] + '+' + packaged['py_vers']
            packagelist.append(packaged)

        # reassemble pip reqirements entries
        for p in packagelist:
            wrk = p['pkg']
            wrk += p['req'][0][0] + p['req'][0][1]
            if len(p['req']) > 1:
                wrk += ','+p['req'][1][0] + p['req'][1][1]
            if p['py_vers'] != '':
                wrk += ';' + 'python_version' + p['py_vers']
            p['requests'] = wrk

        self.logger.debug("Req_files: _build_packagelist: packagelist = '{}'".format(packagelist))
        return packagelist


    def _get_filelist(self, selection):
        """
        returns a list of files with all paths for a requirements.txt within a
        certain selection subpath.
        Currently selection is one of 'modules', 'lib', 'plugins'
        When testing with travis the self.sh_basedir will be something like "/home/travis/build/<repo owner>/smarthome"
        On a native Linux without specialities this is normally "/usr/local/smarthome"
        When inspecting the plugins then all requirements.txt for previous plugin versions should be omitted from the list.
        The names of previous plugins subdirectories start with "_pv"
        """
        self.logger.debug("_get_filelist for '{}'".format(selection))
        file_list = []
        basedir_level = self.sh_basedir.count(os.sep)
        for root, dirnames, filenames in os.walk(self.sh_basedir + os.sep + selection):
            level = root.count(os.sep)
            #self.logger.debug("level = {}: root = {}".format(level, root))
            if (selection == "plugins" and "_pv" not in root) or (level < basedir_level + 3):
                for filename in fnmatch.filter(filenames, 'requirements.txt'):
                    # print("level = {}: root = {}".format(level, root))
                    file_list.append(os.path.join(root, filename))
                    self.logger.debug("found '{}'".format(os.path.join(root, filename)))
        self.logger.debug("_get_filelist found '{}'".format(file_list))
        return file_list


    def _build_filelists(self, selection):

        # global _module_files, _plugin_files, _core_files
        self._module_files = []
        self._plugin_files = []
        self._core_files = []         # to be a list in the future

        if selection in ['modules', 'base', 'all', 'conf_all']:
            # build list of all modules with requirements
            self._module_files = self._get_filelist('modules')

        if selection in ['plugins','all']:
            # build list of all plugins with requirements
            self._plugin_files = self._get_filelist('plugins')

        if selection in ['conf_plugins', 'conf_all']:
            # List of requirements for configured packages is prebuilt
            # self._conf_plugin_files = self._conf_plugin_files
            pass

        if selection in ['core', 'base', 'all', 'conf_all']:
            # Read core requirements
            self._core_files = self._get_filelist('lib')
        return


    def _read_requirementfile(self, fname, requirements, add_info):

        package = ''.join((fname.split(os.sep))[-2:-1])

        with open(fname, encoding='utf8') as ifile:
            for line in ifile:
                if len(line.rstrip()) != 0:
                    #                self.setdefault(line.rstrip(), []).append('SmartHomeNG ' + package)
                    if add_info.endswith(' '):
                        info = add_info + "'" + package + "'"
                    else:
                        info = add_info + package
                    requirements.setdefault(line.rstrip(), []).append(info)
        return


    def __read_requirementfiles(self):

        requirements = {}

        # Read requirements for core
        for fname in self._core_files:
            self._read_requirementfile(fname, requirements, 'SmartHomeNG-')

        # Read requirements for modules
        for fname in self._module_files:
            self._read_requirementfile(fname, requirements, 'SmartHomeNG-module ')

        # Read requirements for plugins
        for fname in self._plugin_files:
            self._read_requirementfile(fname, requirements, 'plugin ')

        # Read requirements for configured plugins
        for fname in self._conf_plugin_files:
            self._read_requirementfile(fname, requirements, 'configured plugin ')

        return requirements


    def _consolidate_requirements(self, packagelist):

        for package in packagelist:
            package['sort'] = package['key'] + '+' + package['req'][0][0] + package['req'][0][1]

        # sort = <package>+<python-version req (if specified)+reqversion>
        packagelist_sorted = sorted(packagelist, key=lambda k: k['sort'])
        self.logger.info("_consolidate_requirements: packagelist_sorted={}".format(packagelist_sorted))

        packagelist_consolidated = []
        self.logger.debug("Req_files: _consolidate_requirements: packagelist_sorted = '{}'".format(packagelist_sorted))
        for p in packagelist_sorted:
            self.logger.debug("Req_files: -  p = '{}'".format(p))
            # check each package requirement entry against the consolidated list
            for idx, package_consolidated in enumerate(packagelist_consolidated):
                # test if a package already has an entry in the consolidated requirements list
                if p['key'] == package_consolidated['key']:
                    # check if the requirement operators are equal
                    if p['req'][0][0] == package_consolidated['req'][0][0]:
                        # if the requirement operators are equal: check if => and version is met
                        if p['req'][0][0] == '>=' and (p['req'][0][1]) >= package_consolidated['req'][0][1]:
                            # if operator is >= and version of p >= version of package_consolidated
                            if package_consolidated['used_by'] != p['used_by']:
                                # join list of plugins that use the package
                                pl = package_consolidated['used_by']
                                pl.extend(p['used_by'])
                                p['used_by'] = pl
                                packagelist_consolidated[idx] = p
                            break
                        elif p['req'][0][0] == '==' and  (p['req'][0][1]) >= package_consolidated['req'][0][1]:
                            # if operator is == and version of p >= version of package_consolidated
                            # join list of plugins that use the package and set this package requirement in consolidated
                            pl = package_consolidated['used_by']
                            pl.extend(p['used_by'])
                            p['used_by'] = pl
                            packagelist_consolidated[idx] = p
                        else:
                            print("?gleiche? Version von {}: consolidated = {}, further = {}, used by {}".format(package_consolidated['pkg'], package_consolidated['req'][0][1], p['req'][0][1], p['used_by']))
                            break
                    elif package_consolidated['req'][0][0] == '==':
                        # if the requirements are not equal
                        # if operator is ==
                        if p['req'][0][0] == '>=' and (package_consolidated['req'][0][1] >= p['req'][0][1]):
                            # if package req is >= and consolidated req is ==, add only packege to used by
                            pl = package_consolidated['used_by']
                            pl.extend(p['used_by'])
                            packagelist_consolidated[idx]['used_by'] = pl
                            break
                        else:
                            print('ERROR: Requirements cannot be reconciled')
                            print(package_consolidated['pkg'] + ': ' + package_consolidated['req'][0][0] +
                                  package_consolidated['req'][0][1] + ' is incompatible to ' + p['req'][0][0] + p['req'][0][
                                      1])
                            packagelist_consolidated.append(p)
                    elif p['req'][0][0] == '==':
                        print('p Gleichheit ' + package_consolidated['req'][0][1] + ' / ' + p['req'][0][1])
                    elif package_consolidated['req'][0][0] == '':
                        # if consolidated version has no special requirements
                        self.logger.debug("_consolidate_requirements: package_consolidated requirement w/o version - pkg={}".format(package_consolidated['pkg']))
                        # join list of plugins that use the package
                        pl = package_consolidated['used_by']
                        pl.extend(p['used_by'])
                        p['used_by'] = pl
                        packagelist_consolidated[idx] = p
                        break


            else:
                packagelist_consolidated.append(p)

        self.logger.debug("Req_files: _consolidate_requirements: packagelist_consolidated = '{}'".format(packagelist_consolidated))
        return packagelist_consolidated


    def _write_header(self, ofile, filename):
        pip_statement = 'pip3 install -r '+filename+' --user'
        pip_statement = pip_statement.ljust(49)
        ofile.write('\n')
        ofile.write('#   +--------------------------------------------------+\n')
        ofile.write('#   |                 SmartHomeNG                      |\n')
        ofile.write('#   |            DON\'T EDIT THIS FILE                  |\n')
        ofile.write('#   |           THIS FILE IS GENERATED                 |\n')
        ofile.write('#   |              BY lib/shpypi.py                    |\n')
        ofile.write('#   |            ON '+datetime.datetime.now().strftime('%d.%m.%Y %H:%M')+'                   |\n')
        ofile.write('#   |                                                  |\n')
        ofile.write('#   |               INSTALL WITH:                      |\n')
        ofile.write('#   | '+pip_statement+'|\n')
        ofile.write('#   +--------------------------------------------------+\n')
        ofile.write('\n')


    def _write_resultfile(self, selection, packagelist_consolidated, requirements):

        for key in requirements:
            requirements[key] = sorted(requirements[key], key=lambda name: (len(name.split('.')), name))

        # pprint.pprint(requirements)

        filename = 'requirements' + os.sep + selection + '.txt'
        complete_filename = self.sh_basedir + os.sep + filename

        if len(packagelist_consolidated) > 0:
            with open(complete_filename, 'w', encoding='utf8') as outfile:
                self._write_header(outfile, filename)

                for pkg in packagelist_consolidated:
                    for req in pkg['used_by']:
                        outfile.write('# {}\n'.format(req))
                    outfile.write('{}\n\n'.format(pkg['requests']))
        else:
            self.logger.error("_write_resultfile: packagelist_consolidated is empty".format())

        return complete_filename


    def set_conf_plugin_files(self, conf_plugin_filelist):
        self._conf_plugin_files = conf_plugin_filelist

    def create_requirementsfile(self, selection):
        """
        Ths method creates a requirements-file for one of the following selections:

          - core
          - modules
          - base (core + modules)
          - plugins (all plugins in directory ../plugins
          - all (core + modules + plugins)

        :param selection: 'core' | 'modules' | 'base' | 'plugins' | 'all' | 'conf_plugins' | 'conf_all'
        :type selection: str

        :return: None
        """

        # build list of all packages
        selection = selection.lower()
        self.logger.debug("create_requirementsfile for '{}'".format(selection))
        self._build_filelists(selection)

        requirements = self.__read_requirementfiles()

        # build list of package requirement dicts
        packagelist = self._build_packagelist(requirements)

        # consolidate requirements
        packagelist_consolidated = self._consolidate_requirements(packagelist)

        self.logger.info("create_requirementsfile: selection={}, packagelist={}".format(selection, packagelist))
        self.logger.info("create_requirementsfile: selection={}, packagelist_consolidated={}".format(selection, packagelist_consolidated))

        return self._write_resultfile(selection, packagelist_consolidated, requirements)
