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

# from lib.item import Items
from lib.utils import Utils

from .rest import RESTResource



class AuthController(RESTResource):

    def __init__(self, module, user_dict, send_hash, jwt_secret):
        self._sh = module._sh
        self.module = module
        self.base_dir = self._sh.get_basedir()
        self.logger = logging.getLogger(__name__)

        self.etc_dir = self._sh._etc_dir
        self.modules_dir = os.path.join(self.base_dir, 'modules')

        self._user_dict = user_dict
        self.send_hash = send_hash
        self.jwt_secret = jwt_secret
        return


    # ======================================================================
    #  /api/authenticate
    #
    def root(self):
        """
        returns information if the root of the REST API is called

        Note: the root of the REST API is not protected by authentication
        """
        raise cherrypy.HTTPError(400)


    # ======================================================================
    #  /api/authenticate/user
    #
    def authenticate(self):
        self.logger.info("AuthController.authenticate(): cherrypy.request.headers = {}".format(cherrypy.request.headers))

        cl = cherrypy.request.headers.get('Content-Length', 0)
        if cl == 0:
            # cherrypy.reponse.headers["Status"] = "400"
            # return 'Bad request'
            raise cherrypy.HTTPError(status=411)
        rawbody = cherrypy.request.body.read(int(cl))
        self.logger.info("AuthController.authenticate(): rawbody = {}".format(rawbody))
        try:
            credentials = json.loads(rawbody.decode('utf-8'))
        except Exception as e:
            self.logger.warning("AuthController.authenticate(): Exception {}".format(e))
            return 'Bad, bad request'
        self.logger.info("AuthController.authenticate(): credentials = {}".format(credentials))

        response = {}
        if self._user_dict == {}:
            # no password required
            url = cherrypy.url().split(':')[0] + ':' + cherrypy.url().split(':')[1]
            payload = {'iss': url, 'iat': self.module.shtime.now(), 'jti': self.module.shtime.now().timestamp()}
            payload['exp'] = self.module.shtime.now() + timedelta(days=7)
            payload['name'] = 'Autologin'
            payload['admin'] = True
            response['token'] = jwt.encode(payload, self.jwt_secret, algorithm='HS256').decode('utf-8')
            self.logger.info("AuthController.authenticate(): Autologin")
            self.logger.info("AuthController.authenticate(): payload = {}".format(payload))
        else:
            user = self._user_dict.get(credentials['username'], None)
            if user:
                self.logger.info("AuthController.authenticate(): user = {}".format(user))
                if Utils.create_hash(user.get('password_hash', 'x')+self.send_hash) == credentials['password']:
                    url = cherrypy.url().split(':')[0] + ':' + cherrypy.url().split(':')[1]
                    payload = {'iss': url, 'iat': self.module.shtime.now(), 'jti': self.module.shtime.now().timestamp()}
                    self.logger.info("AuthController.authenticate() login: login_expiration = {}".format(self.module.login_expiration))
                    payload['exp'] = self.module.shtime.now() + timedelta(hours=self.module.login_expiration)
                    payload['name'] = user.get('name', '?')
                    payload['admin'] = ('admin' in user.get('groups', []))
                    response['token'] = jwt.encode(payload, self.jwt_secret, algorithm='HS256').decode('utf-8')
                    self.logger.info("AuthController.authenticate(): payload = {}".format(payload))
                    self.logger.info("AuthController.authenticate(): response = {}".format(response))
                    self.logger.info("AuthController.authenticate(): cherrypy.url = {}".format(cherrypy.url()))
                    self.logger.info("AuthController.authenticate(): remote.ip    = {}".format(cherrypy.request.remote.ip))
        self.logger.info("AuthController.authenticate(): response = {}".format(response))
        return json.dumps(response)


    # ======================================================================
    #  Handling of http REST requests
    #
    @cherrypy.expose
    def index(self, id=''):
        """
        Handle GET requests
        """
        # self.logger.debug("AuthController.index(): /{}".format(id))

        if id == '':
            return self.root()

        # self.logger.info("AuthController.index(): /{} - unhandled".format(id))
        return None
    index.expose_resource = True
    index.authentication_needed = False


    @cherrypy.expose
    def add(self, id=''):
        """
        Handle POST requests
        """
        self.logger.info("AuthController.add(): /{}".format(id))

        if id == 'user':
            return self.authenticate()

        self.logger.info("AuthController.add(): /{} - unhandled".format(id))
        return None
    add.expose_resource = True
    add.authentication_needed = False


    @cherrypy.expose
    def update(self, id=''):
        """
        Handle PUT requests
        """
        self.logger.info("AuthController.update(): /{}".format(id))

        if id == 'user':
            pass
            # return self.renew()

        self.logger.info("AuthController.update(): /{} - unhandled".format(id))
        return None
    update.expose_resource = True
    update.authentication_needed = True


    def REST_instantiate(self,param):
        """
        instantiate a REST resource based on the id

        this method MUST be overridden in your class. it will be passed
        the id (from the url fragment) and should return a model object
        corresponding to the resource.

        if the object doesn't exist, it should return None rather than throwing
        an error. if this method returns None and it is a PUT request,
        REST_create() will be called so you can actually create the resource.
        """
        self.logger.info("AuthController(): REST_instantiate: param = {}".format(param))
        if param in ['user']:
            # self.logger.debug("AuthController() REST_instantiate: result = '{}'".format(param))
            return param
        return None

