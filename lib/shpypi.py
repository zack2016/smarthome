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
import sys

from lib.utils import Utils


_shpypi_instance = None    # Pointer to the initialized instance of the Shpypi class (for use by static methods)


class Shpypi:


    def __init__(self, smarthome):
        """

        :param smarthome:

        During initialization (and initial calls to some methods, the logging interface is not yet initialized!!!
        """
        self.logger = logging.getLogger(__name__)

        global _shpypi_instance
        if _shpypi_instance is not None:
            import inspect
            curframe = inspect.currentframe()
            calframe = inspect.getouterframes(curframe, 4)
            self.logger.critical("A second 'shpypi' object has been created. There should only be ONE instance of class 'Shpypi'!!! Called from: {} ({})".format(calframe[1][1], calframe[1][3]))

        _shpypi_instance = self

        self._sh = smarthome
        self._sh_dir = self._sh.get_basedir()

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


    def get_installed_packages(self):

        installed_packages = pkg_resources.working_set

        installed_packages_dict = {}
        for dist in installed_packages:
            installed_packages_dict[dist.key] = dist.version

        # self.logger.warning("get_installed_packages: installed_packages_dict = {}".format(installed_packages_dict))
        return installed_packages_dict


    def test_requirements(self, filepath, logging=True):
        if logging:
            self.logger.warning("test_requirements: filepath '{}' is checked".format(filepath))

        req_dict = self.parse_requirementsfile(filepath)
        inst_dict = self.get_installed_packages()

        requirements_met = True
        for req_pkg in req_dict:
            inst_vers = inst_dict.get(req_pkg, '-')
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
                    if inst_vers == '-':
                        self.logger.error("test_requirements: package '{}' is not installed".format(req_pkg))
                    elif not min_met:
                        self.logger.error("test_requirements: package '{}' v{} is too old. Minimum v{} is needed".format(req_pkg, inst_vers, min))
                    else:
                        self.logger.error("test_requirements: package '{}' v{} is too new. Maximum v{} is needed".format(req_pkg, inst_vers, max))
                else:
                    if inst_vers == '-':
                        print("test_requirements: package '{}' is not installed".format(req_pkg))
                    elif not min_met:
                        print("test_requirements: package '{}' v{} is too old. Minimum v{} is needed".format(req_pkg, inst_vers, min))
                    else:
                        print("test_requirements: package '{}' v{} is too new. Maximum v{} is needed".format(req_pkg, inst_vers, max))

        return requirements_met


    def test_base_requirements(self, logging=True):

        requirements_met = self.test_requirements(os.path.join(self._sh_dir, 'requirements', 'base.txt'), logging)

        if not requirements_met:
            if logging:
                self.logger.error("test_base_requirements: Python package requirements not met - Should terminate")
            else:
                print()
                print("Python package requirements not met - SmartHomeNG is terminating")

        return requirements_met


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

        # self.logger.warning("parse_requirementsfile: file_path = {}".format(file_path))
        req_dict = {}
        try:
            fobj = open(file_path)
        except:
            return req_dict

        # process file
        for rline in fobj:
            line = self._remove_comments(rline)

            if len(line) > 0:
                if ">" in line:
                    key = line[0:line.find(">")].lower().strip()
                    if key in req_dict:
                        req_dict[key] += " | " + line[line.find(">"):len(line)].lower().strip()
                    else:
                        req_dict[key] = line[line.find(">"):len(line)].lower().strip()

                elif "<" in line:
                    key = line[0:line.find("<")].lower().strip()
                    if key in req_dict:
                        req_dict[key] += " | " + line[line.find("<"):len(line)].lower().strip()
                    else:
                        req_dict[key] = line[line.find("<"):len(line)].lower().strip()

                elif "=" in line:
                    key = line[0:line.find("=")].lower().strip()
                    if key in req_dict:
                        req_dict[key] += " | " + line[line.find("="):len(line)].lower().strip()
                    else:
                        req_dict[key] = line[line.find("="):len(line)].lower().strip()

                else:
                    req_dict[line.lower().strip()] = '==*'

        fobj.close()

        result_dict = {}
        for pkg in req_dict:
            result_dict[pkg] = self._split_requirement(req_dict[pkg])
            if type(result_dict[pkg]) is list:
                self.logger.warning(" - {}: MULTIPLE requirements {}".format(pkg, result_dict[pkg]))
            # self.logger.warning(" - {}: req_str = '{}', requirements = {}".format(pkg, req_dict[pkg], result_dict[pkg]))
        # self.logger.warning("parse_requirementsfile: result_dict = {}".format(result_dict))

        return result_dict


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




    def _split_requirement(self, req_str):
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
            if len(requirement) == 1:
                result_list.append(self._split_requirement_to_min_max(requirement[0]))
            else:
                # python version sppecified in requirement
                for j in range(0, len(requirement)):
                    requirement[j] = requirement[j].strip()
                if requirement[1].startswith('python_version'):
                    requirement[1] = requirement[1].replace('python_version', '')

                operator, version = self._split_operator(requirement[1])
                if self._compare_versions(pyversion, version, operator):
                    result_list.append(self._split_requirement_to_min_max(requirement[0]))

        if len(result_list) > 1:
            # Hier sollten die Einträge noch konsolidiert werden
            # Vorübergehend: Eine Liste von dicts zurückliefern
            return result_list

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
