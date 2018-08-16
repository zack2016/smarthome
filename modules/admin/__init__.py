#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
#  Copyright 2018-      Martin Sinn                       m.sinn@gmx.de
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

import bin.shngversion as shngversion

from lib.module import Modules
from lib.model.smartplugin import SmartPlugin
from lib.shtime import Shtime

suburl = 'admin'


class Admin():

    version = '0.1.0'
    longname = 'Admin module for SmartHomeNG'
    port = 0

    def __init__(self, sh, testparam=''):
        """
        Initialization Routine for the module
        """
        # TO DO: Shortname anders setzen (oder warten bis der Plugin Loader es beim Laden setzt 
        self._shortname = self.__class__.__name__
        self._shortname = self._shortname.lower()
        
        self.logger = logging.getLogger(__name__)
        self._sh = sh
        self.shtime = Shtime.get_instance()
        self.logger.debug("Module '{}': Initializing".format(self._shortname))

        self.logger.debug("Module '{}': Parameters = '{}'".format(self._shortname, str(self._parameters)))


        try:
            self.mod_http = Modules.get_instance().get_module('http')   # try/except to handle running in a core version that does not support modules
        except:
             self.mod_http = None
        if self.mod_http == None:
            self.logger.error("Module '{}': Not initializing - Module 'http' has to be loaded BEFORE this module".format(self._shortname))
            return False


        try:
            self.pypi_timeout = self._parameters['pypi_timeout']
            self.itemtree_fullpath = self._parameters['itemtree_fullpath']
            self.itemtree_searchstart = self._parameters['itemtree_searchstart']
        except:
            self.logger.critical("Module '{}': Inconsistent module (invalid metadata definition)".format(self.shortname))
            self._init_complete = False
            return

        mysuburl = ''
        if suburl != '':
            mysuburl = '/' + suburl
        ip = get_local_ipv4_address()
        self.port = self.mod_http._port
        self.logger.warning('port = {}'.format(self.port))
        self.url_root = 'http://' + ip + ':' + str(self.port) + mysuburl

    def start(self):
        """
        If the module needs to startup threads or uses python modules that create threads,
        put thread creation code or the module startup code here.
        
        Otherwise don't enter code here
        """
        self.webif_dir = os.path.dirname(os.path.abspath(__file__)) + '/webif'

        self.logger.info("Module '{}': webif_dir = webif_dir = {}".format(self._shortname, self.webif_dir))
        config = {
            '/': {
                   'tools.staticdir.root': self.webif_dir,
                   'tools.staticdir.on': True,
                   'tools.staticdir.dir': 'static',
                   'tools.staticdir.index': 'index.html',
                   'error_page.404': self.error_page,
                 }
        }

        # Register the web interface as a cherrypy app
        self.mod_http.register_webif(WebInterface(self.webif_dir, self, self.url_root),
                                     suburl,
                                     config,
                                     'admin', '',
                                     description='Administrationsoberfläche für SmartHomeNG',
                                     webifname='')
        return


    def stop(self):
        """
        If the module has started threads or uses python modules that created threads,
        put cleanup code here.
        
        Otherwise don't enter code here
        """
#        self.logger.debug("Module '{}': Shutting down".format(self.shortname))
        pass


    def error_page(self, status, message, traceback, version):
        """
        Error 404 page, that redirects to index.html of Angular application

        :param status:
        :param message:
        :param traceback:
        :param version:

        :return: page to display (a redirect)
        :rtype: str
        """
        ip = get_local_ipv4_address()
        mysuburl = ''
        if suburl != '':
            mysuburl = '/' + suburl

#        page = '<meta http-equiv="refresh" content="0; url=http://' + ip + ':' + str(self.port) + mysuburl + '/" />'
        page = '<meta http-equiv="refresh" content="0; url=' + self.url_root + '/" />'
        self.logger.warning("error_page: status = {}, message = {}, redirecting to = {}, version = {}".format(status, message, self.url_root, version))
        return page


def get_local_ipv4_address():
    """
    Get's local ipv4 address of the interface with the default gateway.
    Return '127.0.0.1' if no suitable interface is found

    :return: IPv4 address as a string
    :rtype: string
    """
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 1))
        IP = s.getsockname()[0]
    except:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP


def parse_requirements(file_path):
    req_dict = {}
    try:
        fobj = open(file_path)
    except:
        return req_dict

    for rline in fobj:
        line = ''
        if len(rline) > 0:
            if rline.find('#') == -1:
                line = rline.lower().strip()
            else:
                line = line[0:line.find("#")].lower().strip()

        if len(line) > 0:
            if ">" in line:
                if line[0:line.find(">")].lower().strip() in req_dict:
                    req_dict[line[0:line.find(">")].lower().strip()] += " | " + line[line.find(">"):len(
                        line)].lower().strip()
                else:
                    req_dict[line[0:line.find(">")].lower().strip()] = line[line.find(">"):len(line)].lower().strip()
            elif "<" in line:
                if line[0:line.find("<")].lower().strip() in req_dict:
                    req_dict[line[0:line.find("<")].lower().strip()] += " | " + line[line.find("<"):len(
                        line)].lower().strip()
                else:
                    req_dict[line[0:line.find("<")].lower().strip()] = line[line.find("<"):len(line)].lower().strip()
            elif "=" in line:
                if line[0:line.find("=")].lower().strip() in req_dict:
                    req_dict[line[0:line.find("=")].lower().strip()] += " | " + line[line.find("="):len(
                        line)].lower().strip()
                else:
                    req_dict[line[0:line.find("=")].lower().strip()] = line[line.find("="):len(line)].lower().strip()
            else:
                req_dict[line.lower().strip()] = '==*'

    fobj.close()
    return req_dict

def translate(s):
    return s


import sys
import platform
import datetime
import time
import socket
import psutil
import pwd
import html
import collections

import lib.config
from lib.item import Items
from lib.plugin import Plugins
from lib.utils import Utils

class WebInterface():

    def __init__(self, webif_dir, module, url_root):
        self._sh = module._sh
        self.logger = logging.getLogger(__name__)
        self.pypi_timeout = module.pypi_timeout
        self.module = module
        self.pypi_sorted_package_list = []
        self.url_root = url_root
        self.plugins = Plugins.get_instance()
        self.items = Items.get_instance()

    @cherrypy.expose
    def shng_serverinfo_json(self):
        """

        :return:
        """
        client_ip = cherrypy.request.wsgi_environ.get('REMOTE_ADDR')

        response = {}
        response['default_language'] = self._sh.get_defaultlanguage()
        response['client_ip'] = client_ip
        response['itemtree_fullpath'] = self.module.itemtree_fullpath
        response['itemtree_searchstart'] = self.module.itemtree_searchstart
        response['tz'] = self.module.shtime.tz
        response['tzname'] = str(self.module.shtime.tzname())
        return json.dumps(response)


    # -----------------------------------------------------------------------------------
    #    SYSTEMINFO
    # -----------------------------------------------------------------------------------

    @cherrypy.expose
    def systeminfo_json(self):
        """
        Return System inforation as json (
        for Angular tests only)

        :return:
        """
#        now = datetime.datetime.now().strftime('%d.%m.%Y %H:%M')
        now = str(self.module.shtime.now())
        system = platform.system()
        vers = platform.version()
        # node = platform.node()
        node = socket.getfqdn()
        arch = platform.machine()
        user = pwd.getpwuid(os.geteuid()).pw_name  # os.getlogin()

        # ip = Utils.get_local_ipv4_address()
        # ipv6 = Utils.get_local_ipv6_address()
        ip = get_local_ipv4_address()
        ipv6 = ''

        space = os.statvfs(self._sh.base_dir)
        freespace = space.f_frsize * space.f_bavail / 1024 / 1024

        rt = str(self._sh.runtime())
        daytest = rt.split(' ')
        if len(daytest) == 3:
            days = int(daytest[0])
            hours, minutes, seconds = [float(val) for val in str(daytest[2]).split(':')]
        else:
            days = 0
            hours, minutes, seconds = [float(val) for val in str(daytest[0]).split(':')]
        sh_runtime_seconds = days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds

        pyversion = "{0}.{1}.{2} {3}".format(sys.version_info[0], sys.version_info[1], sys.version_info[2],
                                             sys.version_info[3])

        response = {}
        response['now'] = now
        response['system'] = system
        response['sh_vers'] = shngversion.get_shng_version()
        response['sh_desc'] = shngversion.get_shng_description()
        response['plg_vers'] = shngversion.get_plugins_version()
        response['plg_desc'] = shngversion.get_plugins_description()
        response['sh_dir'] = self._sh.base_dir

        response['vers'] = vers
        response['node'] = node
        response['arch'] = arch
        response['user'] = user
        response['freespace'] = freespace
        response['uptime'] = time.mktime(datetime.datetime.now().timetuple()) - psutil.boot_time()
        response['sh_uptime'] = sh_runtime_seconds
        response['pyversion'] = pyversion
        response['ip'] = ip
        response['ipv6'] = ipv6

        self.logger.warning("admin: systeminfo_json: response = {}".format(response))
        return json.dumps(response)


    # -----------------------------------------------------------------------------------
    #    SYSTEMINFO: PyPI Check
    # -----------------------------------------------------------------------------------

    @cherrypy.expose
    def pypi_json(self):
        """
        returns a list of python package information dicts as json structure:

        The json response contains the following information:

            name                             str    Name of package
            vers_installed                   str    Installed version of that package
            is_required                      bool   is package required by SmartHomeNG?
            is_required_for_testsuite        bool   is package required for the testsuite?
            is_required_for_docbuild         bool   is package required for building documentation with Sphinx?
            vers_req_source                   str    requirements as defined inrequirements.txt
            vers_req_min                     str    required minimum version
            vers_req_max                     str    required maximum version
            vers_req_msg                     str
            vers_ok                          bool   installed version meets requirements
            vers_recent                      bool   installed version is the req_max or the newest on PyPI

            pypi_version                     str    newest package version on PyPI
            pypi_version_ok                  bool   is newest package version on PyPI ok for install on SmartHomeNG?
            pypi_version_not_available_msg   str    error message or empty
            pypi_doc_url                     str    url of the package's documentation on PyPI

            sort                             str    string for sorting (is_required + name)


        :return: information about packahge requirements including PyPI information
        :rtype: json structure
        """
        self.logger.info("pypi_json")

        if self.pypi_sorted_package_list != []:
            # return list, if it already has been prepared
            self.logger.info("Returning a previously prepared PpyPI package list")
            return json.dumps(self.pypi_sorted_package_list)



        # check if pypi service is reachable
        if self.pypi_timeout <= 0:
            pypi_available = False
            pypi_unavailable_message = translate('PyPI Prüfung deaktiviert')
        else:
            pypi_available = True
            try:
                import socket
                sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                sock.settimeout(self.pypi_timeout)
                #                sock.connect(('pypi.python.org', 443))
                sock.connect(('pypi.org', 443))
                sock.close()
            except:
                pypi_available = False
                pypi_unavailable_message = translate('PyPI nicht erreichbar')

        import pip
        import xmlrpc
        import pkg_resources
        installed_packages = pkg_resources.working_set
        # installed_packages = pip.get_installed_distributions()
        # pypi = xmlrpc.client.ServerProxy('https://pypi.python.org/pypi')
        pypi = xmlrpc.client.ServerProxy('https://pypi.org/pypi')

        req_dict = self.get_requirements_info('base')
        req_test_dict = self.get_requirements_info('test')
        req_doc_dict = self.get_requirements_info('doc')
        self.logger.info("pypi_json: req_doc_dict {}".format(req_doc_dict))

        package_list = []

        for dist in installed_packages:
            package = dict()
            package['name'] = dist.key
            package['vers_installed'] = dist.version
            package['is_required'] = False
            package['is_required_for_testsuite'] = False
            package['is_required_for_docbuild'] = False

            package['vers_req_min'] = ''
            package['vers_req_max'] = ''
            package['vers_req_msg'] = ''
            package['vers_req_source'] = ''

            package['vers_ok'] = False
            package['vers_recent'] = False
            package['pypi_version'] = ''
            package['pypi_version_ok'] = True
            package['pypi_version_not_available_msg'] = ''
            package['pypi_doc_url'] = ''

            if pypi_available:
                try:
                    available = pypi.package_releases(dist.project_name)
                    self.logger.debug(
                        "pypi_json: pypi package: project_name {}, availabe = {}".format(dist.project_name,
                                                                                         available))
                    try:
                        package['pypi_version'] = available[0]
                    except:
                        package['pypi_version_not_available_msg'] = '?'
                except:
                    package['pypi_version'] = '--'
                    package['pypi_version_not_available_msg'] = [translate('Keine Antwort von PyPI')]
            else:
                package['pypi_version_not_available_msg'] = pypi_unavailable_message
            #            package['pypi_doc_url'] = 'https://pypi.python.org/pypi/' + dist.project_name
            package['pypi_doc_url'] = 'https://pypi.org/pypi/' + dist.project_name

            if package['name'].startswith('url'):
                self.logger.info(
                    "pypi_json: urllib: package['name'] = >{}<, req_dict.get(package['name'] = >{}<".format(
                        package['name'], req_dict.get(package['name'])))

            # test if package belongs to to SmartHomeNG requirements
            if req_dict.get(package['name'], '') != '':
                package['is_required'] = True
                # tests for min, max versions
                rmin, rmax, rtxt = self.check_requirement(package['name'], req_dict.get(package['name'], ''))
                package['vers_req_source'] = req_dict.get(package['name'], '')
                package['vers_req_min'] = rmin
                package['vers_req_max'] = rmax
                package['vers_req_msg'] = rtxt

            if req_doc_dict.get(package['name'], '') != '':
                package['is_required_for_docbuild'] = True
                # tests for min, max versions
                rmin, rmax, rtxt = self.check_requirement(package['name'], req_doc_dict.get(package['name'], ''))
                package['vers_req_source'] = req_doc_dict.get(package['name'], '')
                package['vers_req_min'] = rmin
                package['vers_req_max'] = rmax
                package['vers_req_msg'] = rtxt

            if req_test_dict.get(package['name'], '') != '':
                package['is_required_for_testsuite'] = True
                # tests for min, max versions
                rmin, rmax, rtxt = self.check_requirement(package['name'], req_test_dict.get(package['name'], ''))
                package['vers_req_source'] = req_test_dict.get(package['name'], '')
                package['vers_req_min'] = rmin
                package['vers_req_max'] = rmax
                package['vers_req_msg'] = rtxt

            if package['is_required']:
                package['sort'] = '1'
            elif package['is_required_for_testsuite']:
                package['sort'] = '2'
            elif package['is_required_for_docbuild']:
                package['sort'] = '3'
            else:
                package['sort'] = '4'
                self.logger.debug("pypi_json: sort=4, package['name'] = >{}<".format(package['name']))

            package['sort'] += package['name']

            # check if installed verison is recent (compared to PyPI)
            if package['is_required']:
                self.logger.info("compare PyPI package {}:".format(package['name']))
                if self.compare_versions(package['vers_installed'], package['pypi_version'], '>='):
                    package['vers_recent'] = True
            else:
                self.logger.info("compare PyPI package {} (for non required):".format(package['name']))
                if package['pypi_version'] != '':
                    if self.compare_versions(package['vers_installed'], package['pypi_version'], '>='):
                        package['vers_recent'] = True

                        # check if installed verison is ok
            if package['is_required'] or package['is_required_for_testsuite'] or package[
                'is_required_for_docbuild']:
                package['vers_ok'] = True
                if self.compare_versions(package['vers_req_min'], package['vers_installed'], '>'):
                    package['vers_ok'] = False
                max = package['vers_req_max']
                if max == '':
                    max = '99999'
                if self.compare_versions(max, package['vers_installed'], '<'):
                    package['vers_ok'] = False
                    package['vers_recent'] = False
                if self.compare_versions(max, package['vers_installed'], '=='):
                    package['vers_recent'] = True
                if package['pypi_version'] != '':
                    if self.compare_versions(package['pypi_version'], package['vers_installed'],
                                             '<') or self.compare_versions(package['pypi_version'], max, '>'):
                        package['pypi_version_ok'] = False

            package_list.append(package)

        # sorted_package_list = sorted([(i['name'], i['version_installed'], i['version_available']) for i in package_list])
        self.pypi_sorted_package_list = sorted(package_list, key=lambda k: k['sort'], reverse=False)
        self.logger.info("pypi_json: sorted_package_list = {}".format(self.pypi_sorted_package_list))
        self.logger.info("pypi_json: json.dumps(sorted_package_list) = {}".format(json.dumps(self.pypi_sorted_package_list)))

        return json.dumps(self.pypi_sorted_package_list)


    def get_requirements_info(self, req_group='base'):
        """
        """
        req_dict = {}
        if req_group == 'base':
            #            req_dict_base = parse_requirements("%s/requirements/base.txt" % self._sh.base_dir)
            req_dict_base = parse_requirements(os.path.join(self._sh.base_dir, 'requirements', 'base.txt'))
        elif req_group == 'test':
            req_dict_base = parse_requirements(os.path.join(self._sh.base_dir, 'tests', 'requirements.txt'))
            self.logger.info("get_requirements_info: filepath = {}".format(
                os.path.join(self._sh.base_dir, 'tests', 'requirements.txt')))
        elif req_group == 'doc':
            req_dict_base = parse_requirements(os.path.join(self._sh.base_dir, 'doc', 'requirements.txt'))
            self.logger.info("get_requirements_info: filepath = {}".format(
                os.path.join(self._sh.base_dir, 'doc', 'requirements.txt')))
        else:
            self.logger.error("get_requirements_info: Unknown requirements group '{}' requested".format(req_group))

        if req_group == 'base':
            # parse loaded plugins and look for requirements
            _conf = lib.config.parse(self._sh._plugin_conf)
            plugin_names = []
            for plugin in _conf:
                plugin_name = _conf[plugin].get('class_path', '').strip()
                if plugin_name == '':
                    plugin_name = 'plugins.' + _conf[plugin].get('plugin_name', '').strip()
                if not plugin_name in plugin_names:  # only unique plugin names, e.g. if multiinstance is used
                    plugin_names.append(plugin_name)
            self.logger.info(
                "get_requirements_info: len(_conf) = {}, len(plugin_names) = {}, plugin_names = {}".format(
                    len(_conf), len(plugin_names), plugin_names))

            req_dict = req_dict_base.copy()
            for plugin_name in plugin_names:
                file_path = "%s/%s/requirements.txt" % (self._sh.base_dir, plugin_name.replace("plugins.", "plugins/"))
                if os.path.isfile(file_path):
                    plugin_dict = parse_requirements(file_path)
                    for key in plugin_dict:
                        if key not in req_dict:
                            req_dict[key] = plugin_dict[key] + ' (' + plugin_name.replace('plugins.', '') + ')'
                        else:
                            req_dict[key] = req_dict[key] + '<br/>' + plugin_dict[key] + ' (' + plugin_name.replace(
                                'plugins.', '') + ')'

        if req_group in ['doc', 'test']:
            req_dict = req_dict_base.copy()

        self.logger.info("get_requirements_info: req_dict for group {} = {}".format(req_group, req_dict))
        return req_dict

    def compare_versions(self, vers1, vers2, operator):
        """
        Compare two version numbers and return if the condition is met
        """
        v1s = vers1.split('.')
        while len(v1s) < 4:
            v1s.append('0')
        v1 = []
        for v in v1s:
            vi = 0
            try:
                vi = int(v)
            except:
                pass
            v1.append(vi)

        v2s = vers2.split('.')
        while len(v2s) < 4:
            v2s.append('0')
        v2 = []
        for v in v2s:
            vi = 0
            try:
                vi = int(v)
            except:
                pass
            v2.append(vi)

        result = False
        if v1 == v2 and operator in ['>=', '==', '<=']:
            result = True
        if v1 < v2 and operator in ['<', '<=']:
            result = True
        if v1 > v2 and operator in ['>', '>=']:
            result = True

        self.logger.debug(
            "compare_versions: - - - v1 = {}, v2 = {}, operator = '{}', result = {}".format(v1, v2, operator,
                                                                                            result))
        return result

    def strip_operator(self, string, operator):
        """
        Strip a leading operator from a string and remove quotes, if they exist

        :param string: string to remove the operator from
        :param operator: operator to remove
        :type string: str
        :type operator: str

        :return: string without the operator
        :rtype: str
        """
        if string.startswith(operator):
            return Utils.strip_quotes(string[len(operator):].strip())
        else:
            return Utils.strip_quotes(string.strip())

    def split_operator(self, reqstring):
        """
        split operator and version from string

        :param reqstring: string containing operator and version
        :type reqstring: str

        :return: operator, version
        :rtype: str, str
        """
        if reqstring.startswith('=='):
            operator = '=='
            version = self.strip_operator(reqstring, operator)
        elif reqstring.startswith('<='):
            operator = '<='
            version = self.strip_operator(reqstring, operator)
        elif reqstring.startswith('>='):
            operator = '>='
            version = self.strip_operator(reqstring, operator)
        elif reqstring.startswith('<'):
            operator = '<'
            version = self.strip_operator(reqstring, operator)
        elif reqstring.startswith('>'):
            operator = '>='
            version = self.strip_operator(reqstring, operator)
        else:
            operator = ''
            version = reqstring

        return operator.strip(), version.strip()

    def req_is_pyversion_req_relevant(self, pyreq, package=''):
        """
        Test if requirement has a Python version restriction and if so, test if the restriction
        is relevant.
        """
        pyversion = "{0}.{1}".format(sys.version_info[0], sys.version_info[1])

        pyreq = pyreq.strip().replace('python_version', '')
        pyv_operator = ''
        if pyreq != '':
            self.logger.debug("req_is_pyversion_req_relevant: - - package {}, py_version {}".format(package, pyreq))
            if pyreq.startswith('=='):
                pyv_operator = '=='
                pyreq = self.strip_operator(pyreq, pyv_operator)
                result = self.compare_versions(pyversion, pyreq, pyv_operator)
            elif pyreq.startswith('<='):
                pyv_operator = '<='
                pyreq = self.strip_operator(pyreq, pyv_operator)
                result = self.compare_versions(pyversion, pyreq, pyv_operator)
            elif pyreq.startswith('>='):
                pyv_operator = '>='
                pyreq = self.strip_operator(pyreq, pyv_operator)
                result = self.compare_versions(pyversion, pyreq, pyv_operator)
            elif pyreq.startswith('<'):
                pyv_operator = '<'
                pyreq = self.strip_operator(pyreq, pyv_operator)
                result = self.compare_versions(pyversion, pyreq, pyv_operator)
            elif pyreq.startswith('>'):
                pyv_operator = '>'
                result = pyreq = self.strip_operator(pyreq, pyv_operator)
                self.compare_versions(pyversion, pyreq, pyv_operator)
            else:
                pyv_operator = ''
                self.logger.error(
                    "req_is_pyversion_req_relevant: no operator in front of Python version found - package {}, pyreq = {}".format(
                        package, pyreq))
                result = False

        self.logger.debug(
            "req_is_pyversion_req_relevant: - - - package {}, py_version_operator {}, py_version {}".format(package,
                                                                                                            pyv_operator,
                                                                                                            pyreq))
        return result

    # operator: <, <=, ==, >=, >>
    # source: <name of plugin> or 'core'
    # version_relation: <operator><version>
    # pyversion_relation: <operator><pyversion>
    # version_relations: <version_relation>,<version_relation>
    # py_vers_requirement: <version_relations>;<pyversion_relation>
    # py_vers_requirements: <py_vers_requirement> | <py_vers_requirement>
    # requirement_string: <py_vers_requirements> (<source>)

    def req_split_source(self, req, package=''):
        """
        Splits the requirement source from the requirement string
        """
        self.logger.debug("req_split_source: package {}, req = '{}'".format(package, req))
        req = req.lower().strip()

        # seperate requirement from source
        source = 'core'
        req1 = req
        if '(' in req:
            wrk = req.split('(')
            source = wrk[1][0:wrk[1].find(")")].strip()
            req1 = wrk[0].strip()
        self.logger.debug("req_split_source: - source {}, req1 = '{}'".format(source, req1))

        # seperate requirements for different Python versions
        req2 = req1.split('|')
        reql = []
        for r in req2:
            reql.append(r.strip())
        self.logger.debug("req_split_source: - source {}, reql = {}".format(source, reql))

        req_result = []
        for req in reql:
            # isolate and handle Python version
            wrk = req.split(';')
            sreq = wrk[0].strip()
            if len(wrk) > 1:
                valid = self.req_is_pyversion_req_relevant(wrk[1], package)
            else:
                valid = True

            #            self.logger.info("req_split_source: - - - source {}, py_version_operator {}, py_version {}, sreq = {}".format(source, pyv_operator, pyreq, sreq))

            if valid:
                # check and handle version requirements
                wrkl = sreq.split(',')
                if len(wrkl) > 2:
                    self.logger.error(
                        "req_split_source: More that two requirements for package {} req = {}".format(package,
                                                                                                      reql))
                rmin = ''
                rmax = ''
                for r in wrkl:
                    if r.find('<') != -1 or r.find('<=') != -1:
                        rmax = r
                    if r.find('>') != -1 or r.find('>=') != -1:
                        rmin = r
                    if r.find('==') != -1:
                        rmin = r
                        rmax = r
                req_result.append([source, rmin, rmax])

        self.logger.debug("req_split_source: - package {} req_result = {}".format(package, req_result))
        if len(req_result) > 1:
            self.logger.warning(
                "req_split_source: Cannot reconcile multiple version requirements for package {} for running Python version".format(
                    package))
        else:
            req_result = req_result[0]
        return req_result

    def check_requirement(self, package, req_str):
        """
        """
        pyversion = "{0}.{1}".format(sys.version_info[0], sys.version_info[1])
        req_min = ''
        req_max = ''
        # split requirements
        req_templist = req_str.split('<br/>')  # split up requirements from different plugins and the core

        req_result = []
        for req in req_templist:
            req_result.append(self.req_split_source(req, package))
        self.logger.debug(
            "check_requirement: package {}, len(req_result)={}, req_result = '{}'".format(package, len(req_result),
                                                                                          req_result))

        # Check if requirements from all sources are the same
        if len(req_result) > 1:
            are_equal = True
            for req in req_result:
                if req[1] != req_result[0][1]:
                    are_equal = False
                if req[2] != req_result[0][2]:
                    are_equal = False
            if are_equal:
                req_result = [req_result[0]]

        req_txt = req_result
        # Now we have a list of [ requirement_source, min_version (with operator), max_version (with operator) ]
        if len(req_result) == 1:
            result = req_result[0]
            self.logger.debug(
                "check_requirement: package {}, req_result = >{}<, result = >{}<".format(package, req_result,
                                                                                         result))
            # handle min
            op, req_min = self.split_operator(result[1])
            if req_min == '*':
                req_min = ''
                req_txt = ''
            else:
                if op == '>':
                    req_min += '.0'

            # handle max
            op, req_max = self.split_operator(result[2])
            if req_max == '*':
                req_max = ''
                req_txt = ''
        #            else:
        #            if op == '<':
        #                req_max = ?

        self.logger.debug(
            "check_requirement: package {} ({}), req_result = '{}'".format(package, len(req_result), req_result))
        if req_min != '' or req_max != '':
            req_txt = ''

        return req_min, req_max, req_txt

    def getpackages(self):
        """
        returns a list with the installed python packages and its versions
        """

        # check if pypi service is reachable
        if self.pypi_timeout <= 0:
            pypi_available = False
            pypi_unavailable_message = translate('PyPI Prüfung deaktiviert')
        else:
            pypi_available = True
            try:
                import socket
                sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                sock.settimeout(self.pypi_timeout)
                #                sock.connect(('pypi.python.org', 443))
                sock.connect(('pypi.org', 443))
                sock.close()
            except:
                pypi_available = False
                pypi_unavailable_message = translate('PyPI nicht erreichbar')

        import pip
        import xmlrpc
        installed_packages = pip.get_installed_distributions()
        #        pypi = xmlrpc.client.ServerProxy('https://pypi.python.org/pypi')
        pypi = xmlrpc.client.ServerProxy('https://pypi.org/pypi')
        packages = []
        for dist in installed_packages:
            package = {}
            package['key'] = dist.key
            package['version_installed'] = dist.version
            if pypi_available:
                try:
                    available = pypi.package_releases(dist.project_name)
                    try:
                        package['version_available'] = available[0]
                    except:
                        package['version_available'] = '-'
                except:
                    package['version_available'] = [translate('Keine Antwort von PyPI')]
            else:
                package['version_available'] = pypi_unavailable_message
            packages.append(package)

        sorted_packages = sorted([(i['key'], i['version_installed'], i['version_available']) for i in packages])
        return sorted_packages


    # -----------------------------------------------------------------------------------
    #    ITEMS
    # -----------------------------------------------------------------------------------

    @cherrypy.expose
    def items_json(self, mode="tree"):
        """
        returns a list of items as json structure

        :param mode:             tree (default) or list structure
        """
        if self.items == None:
            self.items = Items.get_instance()

        items_sorted = sorted(self.items.return_items(), key=lambda k: str.lower(k['_path']), reverse=False)

        if mode == 'tree':
            parent_items_sorted = []
            for item in items_sorted:
                if "." not in item._path:
                    parent_items_sorted.append(item)

            (item_data, item_count) = self._build_item_tree(parent_items_sorted)
            self.logger.warning("admin: items_json: In tree-mode, {} items returned".format(item_count))
            return json.dumps([item_count, item_data])
        else:
            item_list = []
            for item in items_sorted:
                item_list.append(item._path)
            self.logger.warning("admin: items_json: Not in tree-mode, {} items returned".format(len(item_list)))
            return json.dumps(item_list)


    def _build_item_tree(self, parent_items_sorted):
        item_data = []
        count_sum = 0

        for item in parent_items_sorted:
            (nodes, count) = self._build_item_tree(item.return_children())
            count_sum += count
            tags = []
            tags.append(len(nodes))
            lpath = item._path.split('.')
            item_data.append({'path': item._path, 'nodename': lpath[len(lpath)-1], 'name': item._name, 'tags': tags, 'nodes': nodes})

        return item_data, len(item_data)+count_sum

    # -----------------------------------------------------------------------------------

    @cherrypy.expose
    def item_detail_json_html(self, item_path):
        """
        returns a list of items as json structure
        """
        if self.items == None:
            self.items = Items.get_instance()

        self.logger.warning("item_detail_json_html: item_path = {}".format(item_path))

        item_data = []
        item = self.items.return_item(item_path)
        if item is not None:
            if item.type() is None or item.type() is '':
                prev_value = ''
                value = ''
            else:
                prev_value = item.prev_value()
                value = item._value

            if isinstance(prev_value, datetime.datetime):
                prev_value = str(prev_value)

            if 'str' in item.type():
                value = html.escape(value)
                prev_value = html.escape(prev_value)

            cycle = ''
            crontab = ''
            for entry in self._sh.scheduler._scheduler:
                if entry == "items." + item._path:
                    if self._sh.scheduler._scheduler[entry]['cycle']:
                        cycle = self._sh.scheduler._scheduler[entry]['cycle']
                    if self._sh.scheduler._scheduler[entry]['cron']:
                        crontab = html.escape(str(self._sh.scheduler._scheduler[entry]['cron']))
                    break
            if cycle == '':
                cycle = '-'
            if crontab == '':
                crontab = '-'

            changed_by = item.changed_by()
            if changed_by[-5:] == ':None':
                changed_by = changed_by[:-5]

            updated_by = item.updated_by()
            if updated_by[-5:] == ':None':
                updated_by = updated_by[:-5]

            if str(item._cache) == 'False':
                cache = 'off'
            else:
                cache = 'on'
            if str(item._enforce_updates) == 'False':
                enforce_updates = 'off'
            else:
                enforce_updates = 'on'

            item_conf_sorted = collections.OrderedDict(sorted(item.conf.items(), key=lambda t: str.lower(t[0])))
            if item_conf_sorted.get('sv_widget', '') != '':
                item_conf_sorted['sv_widget'] = html.escape(item_conf_sorted['sv_widget'])

            logics = []
            for trigger in item.get_logic_triggers():
                logics.append(html.escape(format(trigger)))
            triggers = []
            for trigger in item.get_method_triggers():
                trig = format(trigger)
                trig = trig[1:len(trig) - 27]
                triggers.append(html.escape(format(trig.replace("<", ""))))

            # build on_update and on_change data
            on_update_list = self.build_on_list(item._on_update_dest_var, item._on_update)
            on_change_list = self.build_on_list(item._on_change_dest_var, item._on_change)

            self._trigger_condition_raw = item._trigger_condition_raw
            if self._trigger_condition_raw == []:
                self._trigger_condition_raw = ''

            data_dict = {'path': item._path,
                         'name': item._name,
                         'type': item.type(),
                         'value': value,
                         'change_age': item.age(),
                         'update_age': item.update_age(),
                         'last_update': str(item.last_update()),
                         'last_change': str(item.last_change()),
                         'changed_by': changed_by,
                         'updated_by': updated_by,
                         'previous_value': prev_value,
                         'previous_change_age': item.prev_age(),
                         'previous_update_age': item.prev_update_age(),
                         'previous_update': str(item.prev_update()),
                         'previous_change': str(item.prev_change()),
                         'enforce_updates': enforce_updates,
                         'cache': cache,
                         'eval': html.escape(self.disp_str(item._eval)),
                         'trigger': self.disp_str(item._trigger),
                         'trigger_condition': self.disp_str(item._trigger_condition),
                         'trigger_condition_raw': self.disp_str(self._trigger_condition_raw),
                         'on_update': html.escape(self.list_to_displaystring(on_update_list)),
                         'on_change': html.escape(self.list_to_displaystring(on_change_list)),
                         'log_change': self.disp_str(item._log_change),
                         'cycle': str(cycle),
                         'crontab': str(crontab),
                         'autotimer': self.disp_str(item._autotimer),
                         'threshold': self.disp_str(item._threshold),
#                         'config': json.dumps(item_conf_sorted),
#                         'logics': json.dumps(logics),
#                         'triggers': json.dumps(triggers),
                         'config': dict(item_conf_sorted),
                         'logics': logics,
                         'triggers': triggers,
                         'filename': str(item._filename),
                         }

            # cast raw data to a string
            if item.type() in ['foo', 'list', 'dict']:
                data_dict['value'] = str(item._value)
                data_dict['previous_value'] = str(prev_value)

            item_data.append(data_dict)
            self.logger.warning("details: item_data = {}".format(item_data))
            return json.dumps(item_data)
        else:
            self.logger.error("Requested item '{}' is None, check if item really exists.".format(item_path))
            return

    # -----------------------------------------------------------------------------------

    @cherrypy.expose
    def item_change_value_html(self, item_path, value):
        """
        Is called by items.html when an item value has been changed
        """
        self.logger.warning("item_change_value_html: item '{}' set to value '{}'".format(item_path, value))
        item_data = []
        item = self.items.return_item(item_path)
        if 'num' in item.type():
            if "." in value or "," in value:
                value = float(value)
            else:
                value = int(value)
        item(value, caller='admin')

        return



    def disp_str(self, val):
        s = str(val)
        if s == 'False':
            s = '-'
        elif s == 'None':
            s = '-'
        return s

    def list_to_displaystring(self, l):
        """
        """
        if type(l) is str:
            return l

        edit_string = ''
        for entry in l:
            if edit_string != '':
                edit_string += ' | '
            edit_string += str(entry)
        if edit_string == '':
            edit_string = '-'
        #        self.logger.info("list_to_displaystring: >{}<  -->  >{}<".format(l, edit_string))
        return edit_string

    def build_on_list(self, on_dest_list, on_eval_list):
        """
        build on_xxx data
        """
        on_list = []
        if on_dest_list is not None:
            if isinstance(on_dest_list, list):
                for on_dest, on_eval in zip(on_dest_list, on_eval_list):
                    if on_dest != '':
                        on_list.append(on_dest + ' = ' + on_eval)
                    else:
                        on_list.append(on_eval)
            else:
                if on_dest_list != '':
                    on_list.append(on_dest_list + ' = ' + on_eval_list)
                else:
                    on_list.append(on_eval_list)
        return on_list


    # -----------------------------------------------------------------------------------
    #    SCHEDULERS
    # -----------------------------------------------------------------------------------

    @cherrypy.expose
    def scheduler_json(self):
        """
        return a list of all known schedules
        """

        schedule_list = []
        #        for entry in self._sh.scheduler._scheduler:
        for entry in self._sh.scheduler._scheduler:
            schedule = dict()
            #            s = self._sh.scheduler._scheduler[entry]
            s = self._sh.scheduler._scheduler[entry]
            if s['next'] != None and s['cycle'] != '' and s['cron'] != '':
                schedule['fullname'] = entry
                schedule['name'] = entry
                schedule['group'] = 'other'
                schedule['next'] = s['next'].strftime('%Y-%m-%d %H:%M:%S%z')
                schedule['cycle'] = str(s['cycle'])
    #            schedule['cron'] = html.escape(str(s['cron']))
                schedule['cron'] = str(s['cron'])

                if schedule['cycle'] == None:
                    schedule['cycle'] = '-'
                if schedule['cron'] == None:
                    schedule['cron'] = '-'

                nl = entry.split('.')
                if nl[0].lower() in ['items', 'logics', 'plugins']:
                    schedule['group'] = nl[0].lower()
                    schedule['group'] = schedule['group'][:-1]   # items -> item, logics -> logic, plugins -> plugin
                    del nl[0]
                    schedule['name'] = '.'.join(nl)

                schedule_list.append(schedule)

        schedule_list_sorted = sorted(schedule_list, key=lambda k: k['fullname'].lower())
        return json.dumps(schedule_list_sorted)


    # -----------------------------------------------------------------------------------
    #    PLUGINS
    # -----------------------------------------------------------------------------------

    @cherrypy.expose
    def plugininfo_json(self):
        """
        return a list of all configured plugin instances
        """
        if self.plugins == None:
            self.plugins = Plugins.get_instance()

        # get data for display of page
        conf_plugins = {}
        _conf = lib.config.parse(self.plugins._get_plugin_conf_filename())

        for plugin in _conf:
            conf_plugins[plugin] = {}
            conf_plugins[plugin] = _conf[plugin]

        plugin_list = []
        for x in self.plugins.return_plugins():
            plugin = dict()
            plugin['metadata'] = {}

            plugin['stopped'] = False
            # Update(s) triggered by < strong > {{p.instance._itemlist | length}} < / strong > items
            plugin['triggers'] = str(x._itemlist)

            if isinstance(x, SmartPlugin):
                plugin['pluginname'] = x.get_shortname()
                plugin['configname'] = x.get_configname()
                plugin['version'] = x.get_version()
                plugin['smartplugin'] = True
                plugin['multiinstance'] = x.is_multi_instance_capable()
                plugin['instancename'] = x.get_instance_name()

                plugin['webif_url'] = ''
                if self.module.mod_http.get_webifs_for_plugin(x.get_shortname()) != []:
                    for webif in self.module.mod_http.get_webifs_for_plugin(x.get_shortname()):
                        if webif['Instance'] == plugin['instancename']:
                            plugin['webif_url'] = self.url_root + webif['Mount']

                plugin['parameters'] = []
                if bool(x._parameters):
#                    for p in x._parameters:
                    for p in x._metadata.get_parameterlist():
                        p_dict = {}
                        p_dict['name'] = str(p)
                        p_dict['type'] = x._metadata.get_parameter_type_with_subtype(p)
                        p_dict['value'] = str(x._parameters[p])
                        p_dict['default'] = x._metadata.get_parameter_defaultvalue(p)
                        plugin['parameters'].append(p_dict)

                plugin['attributes'] = []
                for a in x._metadata.get_itemdefinitionlist():
                    a_dict = {}
                    a_dict['name'] = str(a)
                    a_dict['type'] = x._metadata.get_itemdefinition_type_with_subtype(a)
                    plugin['attributes'].append(a_dict)

                plugin['metadata']['classpath'] = x._classpath  # str
                plugin['metadata']['classname'] = x.get_classname()
            else:
                plugin['pluginname'] = x._shortname
                plugin['configname'] = x._configname
                plugin['version'] = ''
                plugin['smartplugin'] = False
                plugin['multiinstance'] = False
                plugin['instancename'] = ''
                plugin['webif_url'] = ''
                plugin['parameters'] = []
                plugin['attributes'] = []

                plugin['metadata']['classpath'] = str(x._classpath)  # str
                plugin['metadata']['classname'] = str(x._classname)  # str
                plugin['stopped'] = False

            plugin['metadata']['type'] = x._metadata.get_string('type')
            plugin['metadata']['description'] = x._metadata.get_mlstring('description')
            plugin['metadata']['description_long'] = x._metadata.get_mlstring('description_long')
            plugin['metadata']['keywords'] = x._metadata.get_string('keywords')
            plugin['metadata']['documentation'] = x._metadata.get_string('documentation')
            plugin['metadata']['support'] = x._metadata.get_string('support')
            plugin['metadata']['maintainer'] = x._metadata.get_string('maintainer')
            plugin['metadata']['tester'] = x._metadata.get_string('tester')

            try:
                plugin['stopped'] = not x.alive
                plugin['stoppable'] = True
            except:
                plugin['stopped'] = False
                plugin['stoppable'] = False
            if plugin['pluginname'] == 'backend':
                plugin['stoppable'] = False

            plugin_list.append(plugin)
#        plugins_sorted = sorted(plugin_list, key=lambda k: k['classpath'])
        plugins_sorted = sorted(plugin_list, key=lambda k: k['pluginname']+k['instancename'])

        return json.dumps(plugins_sorted)

    # -----------------------------------------------------------------------------------
    #    SCENES
    # -----------------------------------------------------------------------------------

    @cherrypy.expose
    def scenes_json(self):

        from lib.scene import Scenes
        get_param_func = getattr(Scenes, "get_instance", None)
        if callable(get_param_func):
            supported = True
            self.scenes = Scenes.get_instance()
            scene_list = self.scenes.get_loaded_scenes()

            disp_scene_list = []
            for scene in scene_list:
                scene_dict = {}
                scene_dict['path'] = scene
                scene_dict['name'] = str(self._sh.return_item(scene))

                action_list = self.scenes.get_scene_actions(scene)
                scene_dict['value_list'] = action_list
#                scene_dict[scene] = action_list

                disp_action_list = []
                for value in action_list:
                    action_dict = {}
                    action_dict['action'] = value
                    action_dict['action_name'] = self.scenes.get_scene_action_name(scene, value)
                    action_list = self.scenes.return_scene_value_actions(scene, value)
                    for action in action_list:
                        if not isinstance(action[0], str):
                            action[0] = action[0].id()
                    action_dict['action_list'] = action_list

                    disp_action_list.append(action_dict)
                scene_dict['values'] = disp_action_list
                self.logger.info("scenes_html: disp_action_list for scene {} = {}".format(scene, disp_action_list))

                disp_scene_list.append(scene_dict)
        else:
            supported = False
        return json.dumps(disp_scene_list)

