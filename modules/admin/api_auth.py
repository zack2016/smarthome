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
import time

import jwt

# from lib.item import Items
from lib.utils import Utils

from .rest import RESTResource



class AuthController(RESTResource):

    def __init__(self, module):
        self._sh = module._sh
        self.module = module
        self.base_dir = self._sh.get_basedir()
        self.logger = logging.getLogger(__name__)

        self.etc_dir = self._sh._etc_dir
        self.modules_dir = os.path.join(self.base_dir, 'modules')

        #self._user_dict = user_dict
        self.send_hash = module.send_hash
        self.jwt_secret = module.jwt_secret

        http_user_dict = self.module.mod_http.get_user_dict()
        self._user_dict = {}
        for user in http_user_dict:
            if http_user_dict[user]['password_hash'] != '':
                self._user_dict[Utils.create_hash(user + self.send_hash)] = http_user_dict[user]


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
    #  /api/authenticate/user (POST)
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
            payload['ttl'] = 7*24
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
                    payload['ttl'] = self.module.login_expiration
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
    #  /api/authenticate/renew (PUT)
    #
    def renew_token(self):

        response = {}

        old_token = self.REST_get_jwt_token()
        self.logger.debug("- renew_token(): decoded old token = {}".format(old_token))
        new_token = old_token

        if self.module.login_autorenew:
            new_token['iat'] = self.module.shtime.now()
            new_token['exp'] = self.module.shtime.now() + timedelta(hours=self.module.login_expiration)
            response['token'] = jwt.encode(new_token, self.jwt_secret, algorithm='HS256').decode('utf-8')
            decoded = jwt.decode(response['token'], self.jwt_secret, verify=True, algorithms='HS256')
            self.logger.debug("- renew_token(): re-decoded  token = {}".format(decoded))

            # self.logger.info("AuthController.renew_token(): new_token = {}".format(new_token))
            self.logger.info("AuthController.renew_token(): remote.ip = {}, user = {}".format(cherrypy.request.remote.ip, new_token['name']))

            response['result'] = 'ok'
            response['description'] = 'token renewed'
        else:
            response['token'] = jwt.encode(old_token, self.jwt_secret, algorithm='HS256').decode('utf-8')

            response['result'] = 'ok'
            response['description'] = 'token not renewed'

        return json.dumps(response)



    # ======================================================================
    #  Handling of http REST requests
    #
    @cherrypy.expose
    def read(self, id=None):
        """
        Handle GET requests
        """
        # self.logger.debug("AuthController.index(): /{}".format(id))

        if id is None:
            return self.root()

        # self.logger.info("AuthController.index(): /{} - unhandled".format(id))
        return None

    read.expose_resource = True
    read.authentication_needed = False


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
        Handle PUT requests (hief kommt noch die Token Verlängerung rein)
        """
        self.logger.info("AuthController.update(): /{}".format(id))

        if id == 'user':
            pass
            # return self.renew()
        if id == 'renew':
            return self.renew_token()

        self.logger.info("AuthController.update(): /{} - unhandled".format(id))
        return None
    update.expose_resource = True
    update.authentication_needed = True

