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
from datetime import datetime, timedelta

import jwt

from lib.module import Modules
from lib.shtime import Shtime
from lib.utils import Utils

from .systemdata import SystemData
from .itemdata import ItemData
from .schedulerdata import SchedulerData
from .plugindata import PluginData
from .scenedata import SceneData
from .threaddata import ThreadData

from .rest import RESTResource

from .api_logs import *


suburl = 'admin'


class Admin():
    version = '0.2.1'
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
            self.mod_http = Modules.get_instance().get_module(
                'http')  # try/except to handle running in a core version that does not support modules
        except:
            self.mod_http = None
        if self.mod_http == None:
            self.logger.error(
                "Module '{}': Not initializing - Module 'http' has to be loaded BEFORE this module".format(
                    self._shortname))
            self._init_complete = False
            return

        self._showtraceback = self.mod_http._showtraceback

        try:
            self.pypi_timeout = self._parameters['pypi_timeout']
            self.itemtree_fullpath = self._parameters['itemtree_fullpath']
            self.itemtree_searchstart = self._parameters['itemtree_searchstart']
            self.websocket_host = self._parameters['websocket_host']
            self.websocket_port = self._parameters['websocket_port']
        except:
            self.logger.critical(
                "Module '{}': Inconsistent module (invalid metadata definition)".format(self.shortname))
            self._init_complete = False
            return

        mysuburl = ''
        if suburl != '':
            mysuburl = '/' + suburl
        ip = get_local_ipv4_address()
        self.port = self.mod_http._port
        # self.logger.warning('port = {}'.format(self.port))
        self.url_root = 'http://' + ip + ':' + str(self.port) + mysuburl
        self.api_url_root = 'http://' + ip + ':' + str(self.port) + 'api'
        self.api2_url_root = 'http://' + ip + ':' + str(self.port) + 'api2'

    def start(self):
        """
        If the module needs to startup threads or uses python modules that create threads,
        put thread creation code or the module startup code here.

        Otherwise don't enter code here
        """

        self.webif_dir = os.path.dirname(os.path.abspath(__file__)) + '/webif'

        self.logger.info("Module '{}': webif_dir = webif_dir = {}".format(self._shortname, self.webif_dir))
        # config for Angular app (special: error page)
        config = {
            '/': {
                'tools.staticdir.root': self.webif_dir,
                'tools.staticdir.on': True,
                'tools.staticdir.dir': 'static',
                'tools.staticdir.index': 'index.html',
                'error_page.404': self.webif_dir + '/static/index.html',
                #                    'error_page.404': self.error_page,
                #                   'tools.auth_basic.on': False,
                #                   'tools.auth_basic.realm': 'shng_admin_webif',
            }
        }
        # API config (special: request.dispatch)
        config_api = {
            '/': {
                'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
#                'tools.staticdir.root': self.webif_dir,
#                'tools.staticdir.on': True,
#                'tools.staticdir.dir': 'static',
#                'tools.staticdir.index': 'index.html',
                'error_page.404': self._error_page,
                'error_page.400': self._error_page,
                'error_page.401': self._error_page,
                'error_page.411': self._error_page,
                'error_page.500': self._error_page,
                # 'tools.auth_basic.on': False,
                # 'tools.auth_basic.realm': 'shng_admin_webif',
            }
        }

        # def register_webif(self, app, pluginname, conf, pluginclass='', instance='', description='', webifname='', use_global_basic_auth=True):
        """
        Register an application for CherryPy

        This method is called by a plugin to register a webinterface

        It should be called like this:

            self.mod_http.register_webif(WebInterface( ... ), 
                               self.get_shortname(), 
                               config, 
                               self.get_classname(), self.get_instance_name(),
                               description,
                               webifname,
                               use_global_basic_auth)


        :param app: Instance of the application object
        :param pluginname: Mount point for the application
        :param conf: Cherrypy application configuration dictionary
        :param pluginclass: Name of the plugin's class
        :param instance: Instance of the plugin (if multi-instance)
        :param description: Description of the functionallity of the webif. If left empty, a generic description will be generated
        :param webifname: Name of the webinterface. If left empty, the pluginname is used
        :param use_global_basic_auth: if True, global basic_auth settings from the http module are used. If False, registering plugin provides its own basic_auth
        """

        # Register the web interface as a cherrypy app
        self.mod_http.register_webif(WebInterface(self.webif_dir, self, self.url_root),
                                     suburl,
                                     config,
                                     'admin', '',
                                     description='Administrationsoberfläche für SmartHomeNG',
                                     webifname='',
                                     use_global_basic_auth=False)

        # Register the web interface as a cherrypy app
        self.mod_http.register_webif(WebApi(self.webif_dir, self, self.api_url_root),
                                     'api',
                                     config_api,
                                     'api', '',
                                     description='API der Administrationsoberfläche für SmartHomeNG',
                                     webifname='',
                                     use_global_basic_auth=False)

        # Register the web interface as a cherrypy app
        # self.mod_http.register_webif(WebApi2(self.webif_dir, self, self.api2_url_root),
        #                              'api2',
        #                              config_api,
        #                              'api2', '',
        #                              description='API2 der Administrationsoberfläche für SmartHomeNG',
        #                              webifname='',
        #                              use_global_basic_auth=False)
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

        # page = '<meta http-equiv="refresh" content="0; url=http://' + ip + ':' + str(self.port) + mysuburl + '/" />'
        # page = '<meta http-equiv="refresh" content="0; url=' + self.url_root + '/" />'
        page = '404: Page not found!<br>'+message
        self.logger.warning(
            "error_page: status = {}, message = {}".format(status, message))
        return page


    def _error_page(self, status, message, traceback, version):
        """
        Generate html page for errors

        :param status: error number and description
        :param message: detailed error description
        :param traceback: traceback that lead to the error
        :param version: CherryPy version
        :type status: str
        :type message: str
        :type traceback: str
        :type version: str

        :return: html error page
        :rtype: str

        """
        show_traceback = True
        errno = status.split()[0]
        result = '<link rel="stylesheet" href="/gstatic/bootstrap/css/bootstrap.min.css" type="text/css"/>'
        result += '<link rel="stylesheet" href="/gstatic/css/smarthomeng.css" type="text/css"/>'
        result += '<div class="container mt-4 ml-0">' \
                  '<h1 class="margin-base-vertical">' \
                  '<img src="/gstatic/img/logo_small_120x120.png" width="40" height="40" style="vertical-align:top">'
        result += ' Oops, Error ' + errno + ':'
        result += '</h1><br/>'
        result += '<h3>' + message + '</h3><br/>'

        if (self._showtraceback == False) or (errno == '404'):
            traceback = ''
        else:
            traceback = traceback.replace('\n', '<br>&nbsp;&nbsp;')
            traceback = traceback.replace(' ', '&nbsp;&nbsp;')
            traceback = '&nbsp;&nbsp;' + traceback

            result += '<div class="card">' \
                      '<div class="card-header"><strong>Traceback</strong></div>' \
                      '<div class="card-body text-shng">'
            result += traceback
            result += '</div>' \
                      '</div>'

        result += '</div>'

        return result

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


def translate(s):
    return s


import socket

import lib.config
from lib.item import Items
from lib.plugin import Plugins
from lib.utils import Utils


class WebInterface(SystemData, ItemData, SchedulerData, PluginData, SceneData, ThreadData):

    def __init__(self, webif_dir, module, url_root):
        self._sh = module._sh
        self.logger = logging.getLogger(__name__)
        self.module = module
        self.pypi_timeout = module.pypi_timeout
        self.url_root = url_root

        SystemData.__init__(self)
        ItemData.__init__(self)
        SchedulerData.__init__(self)
        PluginData.__init__(self)
        SceneData.__init__(self)
        ThreadData.__init__(self)

        return


    # -----------------------------------------------------------------------------------
    #    SERVERINFO
    # -----------------------------------------------------------------------------------

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
        response['websocket_host'] = self.module.websocket_host
        response['websocket_port'] = self.module.websocket_port
        return json.dumps(response)


# class WebApi2():
#
#     def __init__(self, webif_dir, module, url_root):
#         self._sh = module._sh
#         self.logger = logging.getLogger(__name__)
#         self.module = module
#         self.url_root = url_root
#
#         self.send_hash = 'shNG0160$'
#         self.jwt_secret = 'SmartHomeNG$0815'
#
#         http_user_dict = self.module.mod_http.get_user_dict()
#         self._user_dict = {}
#         for user in http_user_dict:
#             if http_user_dict[user]['password_hash'] != '':
#                 self._user_dict[Utils.create_hash(user+self.send_hash)] = http_user_dict[user]
#         return
#
#
#     # -----------------------------------------------------------------------------------
#     #    LOGIN (Zukunft: /api/authenticate)
#     # -----------------------------------------------------------------------------------
#
#     @cherrypy.expose
#     def authenticate(self):
#         cl = cherrypy.request.headers.get('Content-Length', 0)
#         if cl == 0:
#             # cherrypy.reponse.headers["Status"] = "400"
#             return 'Bad request'
#         rawbody = cherrypy.request.body.read(int(cl))
#         self.logger.warning("api authenticate login: rawbody = {}".format(rawbody))
#         try:
#             credentials = json.loads(rawbody)
#         except:
#             return 'Bad, bad request'
#
#         response = {}
#         if self._user_dict == {}:
#             # no password required
#             url = cherrypy.url().split(':')[0] + ':' + cherrypy.url().split(':')[1]
#             payload = {'iss': url, 'iat': self.module.shtime.now(), 'jti': self.module.shtime.now().timestamp()}
#             payload['exp'] = self.module.shtime.now() + timedelta(days=7)
#             payload['name'] = 'Autologin'
#             payload['admin'] = True
#             response['token'] = jwt.encode(payload, self.jwt_secret, algorithm='HS256').decode('utf-8')
#             self.logger.warning("api authenticate login: Autologin")
#             self.logger.warning("api authenticate login: payload = {}".format(payload))
#         else:
#             user = self._user_dict.get(credentials['username'], None)
#             if user:
#                 self.logger.warning("api authenticate login: user = {}".format(user))
#                 if Utils.create_hash(user.get('password_hash', 'x')+self.send_hash) == credentials['password']:
#                     url = cherrypy.url().split(':')[0] + ':' + cherrypy.url().split(':')[1]
#                     payload = {'iss': url, 'iat': self.module.shtime.now(), 'jti': self.module.shtime.now().timestamp()}
#                     payload['exp'] = self.module.shtime.now() + timedelta(days=7)
#                     payload['name'] = user.get('name', '?')
#                     payload['admin'] = ('admin' in user.get('groups', []))
#                     response['token'] = jwt.encode(payload, self.jwt_secret, algorithm='HS256').decode('utf-8')
#                     self.logger.warning("api authenticate login: payload = {}".format(payload))
#                     self.logger.warning("api authenticate login: response = {}".format(response))
#                     self.logger.warning("api authenticate login: cherrypy.url = {}".format(cherrypy.url()))
#                     self.logger.warning("api authenticate login: remote.ip    = {}".format(cherrypy.request.remote.ip))
#         return json.dumps(response)
#
#
#     # -----------------------------------------------------------------------------------
#     #    SERVERINFO
#     # -----------------------------------------------------------------------------------
#
#     @cherrypy.expose
#     def shng_serverinfo2_json(self):
#         """
#
#         :return:
#         """
#         client_ip = cherrypy.request.wsgi_environ.get('REMOTE_ADDR')
#
#         response = {}
#         response['default_language'] = self._sh.get_defaultlanguage()
#         response['client_ip'] = client_ip
#         response['itemtree_fullpath'] = self.module.itemtree_fullpath
#         response['itemtree_searchstart'] = self.module.itemtree_searchstart
#         response['tz'] = self.module.shtime.tz
#         response['tzname'] = str(self.module.shtime.tzname())
#         response['websocket_host'] = self.module.websocket_host
#         response['websocket_port'] = self.module.websocket_port
#         return json.dumps(response)









class WebApi(object):

    exposed = True

    def __init__(self, webif_dir, module, url_root):
        self._sh = module._sh
        self.logger = logging.getLogger(__name__)
        self.module = module
        self.url_root = url_root

        self.send_hash = 'shNG0160$'
        self.jwt_secret = 'SmartHomeNG$0815'


        http_user_dict = self.module.mod_http.get_user_dict()

        self._user_dict = {}
        for user in http_user_dict:
            if http_user_dict[user]['password_hash'] != '':
                self._user_dict[Utils.create_hash(user + self.send_hash)] = http_user_dict[user]

        # Add REST controllers
        self.logs = LogsController(self._sh, self.jwt_secret)
        self.authenticate = AuthController(self.module, self._user_dict, self.send_hash, self.jwt_secret)
        return


    @cherrypy.expose(['home', ''])
    def index(self):
        return "Give SmartHomeNG a REST."


class AuthController(RESTResource):

    def __init__(self, module, user_dict, send_hash, jwt_secret):
        self.module = module
        self._user_dict = user_dict
        self.send_hash = send_hash
        self.jwt_secret = jwt_secret
        self.logger = logging.getLogger('API_Auth')


    @cherrypy.expose
    def index(self, param=False):
#        return "REST: Auth: index: param = '{}'".format(param)
        self.add()

    @cherrypy.expose
    def add(self, param=False):
        self.logger.warning("/api authenticate add: param = {}".format(param))
        self.logger.warning("/api authenticate add: cherrypy.request.headers = {}".format(cherrypy.request.headers))

        cl = cherrypy.request.headers.get('Content-Length', 0)
        if cl == 0:
            # cherrypy.reponse.headers["Status"] = "400"
            # return 'Bad request'
            raise cherrypy.HTTPError(status=411)
        rawbody = cherrypy.request.body.read(int(cl))
        self.logger.warning("/api authenticate login: rawbody = {}".format(rawbody))
        try:
            credentials = json.loads(rawbody)
        except:
            return 'Bad, bad request'

        response = {}
        if self._user_dict == {}:
            # no password required
            url = cherrypy.url().split(':')[0] + ':' + cherrypy.url().split(':')[1]
            payload = {'iss': url, 'iat': self.module.shtime.now(), 'jti': self.module.shtime.now().timestamp()}
            payload['exp'] = self.module.shtime.now() + timedelta(days=7)
            payload['name'] = 'Autologin'
            payload['admin'] = True
            response['token'] = jwt.encode(payload, self.jwt_secret, algorithm='HS256').decode('utf-8')
            self.logger.warning("/api authenticate login: Autologin")
            self.logger.warning("/api authenticate login: payload = {}".format(payload))
        else:
            user = self._user_dict.get(credentials['username'], None)
            if user:
                self.logger.warning("/api authenticate login: user = {}".format(user))
                if Utils.create_hash(user.get('password_hash', 'x')+self.send_hash) == credentials['password']:
                    url = cherrypy.url().split(':')[0] + ':' + cherrypy.url().split(':')[1]
                    payload = {'iss': url, 'iat': self.module.shtime.now(), 'jti': self.module.shtime.now().timestamp()}
                    payload['exp'] = self.module.shtime.now() + timedelta(days=7)
                    payload['name'] = user.get('name', '?')
                    payload['admin'] = ('admin' in user.get('groups', []))
                    response['token'] = jwt.encode(payload, self.jwt_secret, algorithm='HS256').decode('utf-8')
                    self.logger.warning("/api authenticate login: payload = {}".format(payload))
                    self.logger.warning("/api authenticate login: response = {}".format(response))
                    self.logger.warning("/api authenticate login: cherrypy.url = {}".format(cherrypy.url()))
                    self.logger.warning("/api authenticate login: remote.ip    = {}".format(cherrypy.request.remote.ip))
        self.logger.warning("/api authenticate login: response = {}".format(response))
        return json.dumps(response)

    add.expose_resource = True

    @cherrypy.expose
    def update(self, param=False):
        self.logger.warning("api authenticate update: param = {}".format(param))
        return self.add(param)
    update.expose_resource = True


    def REST_instantiate(self, param):
        """
        instantiate a REST resource based on the id
        """
        self.logger.warning("api REST_instantiate login: param = {}".format(param))
        return param


    # -----------------------------------------------------------------------------------
    #    SERVERINFO
    # -----------------------------------------------------------------------------------

    # @cherrypy.expose
    # def shng_serverinfo2_json(self):
    #     """
    #
    #     :return:
    #     """
    #     client_ip = cherrypy.request.wsgi_environ.get('REMOTE_ADDR')
    #
    #     response = {'api': 'api2'}
    #     response['default_language'] = self._sh.get_defaultlanguage()
    #     response['client_ip'] = client_ip
    #     response['itemtree_fullpath'] = self.module.itemtree_fullpath
    #     response['itemtree_searchstart'] = self.module.itemtree_searchstart
    #     response['tz'] = self.module.shtime.tz
    #     response['tzname'] = str(self.module.shtime.tzname())
    #     response['websocket_host'] = self.module.websocket_host
    #     response['websocket_port'] = self.module.websocket_port
    #     return json.dumps(response)


