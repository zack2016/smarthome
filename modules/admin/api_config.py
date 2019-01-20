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

import lib.shyaml as shyaml

from .rest import RESTResource


class ConfigController(RESTResource):
    """
    Support for
    """

    def __init__(self, module):
        self._sh = module._sh
        self.module = module
        self.base_dir = self._sh.get_basedir()
        self.logger = logging.getLogger(__name__)

        self.etc_dir = self._sh._etc_dir
        self.modules_dir = os.path.join(self.base_dir, 'modules')

        self.core_conf = shyaml.yaml_load(os.path.join(self.modules_dir, 'core', 'module.yaml'))
        self.http_conf = shyaml.yaml_load(os.path.join(self.modules_dir, 'http', 'module.yaml'))
        self.admin_conf = shyaml.yaml_load(os.path.join(self.modules_dir, 'admin', 'module.yaml'))

        return



    def root(self, config=False):

        token = cherrypy.request.headers.get('Authorization', '')
        self.logger.info("ConfigController() index: jwt token = {}".format(token))

        self.logger.info("ConfigController() index: config = {}".format(config))

        self.core_confdata = shyaml.yaml_load(os.path.join(self.etc_dir, 'smarthome.yaml'))
        self.module_confdata = shyaml.yaml_load(os.path.join(self.etc_dir, 'module.yaml'))

        result = {}
        if (not config) or config == 'core':
            result['common'] = {}
            result['common']['data'] = self.core_confdata
            result['common']['meta'] = self.core_conf
            result['http'] = {}
            result['http']['data'] = self.module_confdata.get('http', {})
            result['http']['meta'] = self.http_conf
            result['admin'] = {}
            result['admin']['data'] = self.module_confdata.get('admin', {})
            result['admin']['meta'] = self.admin_conf
            self.logger.info("  - index: core = {}".format(result))
            return json.dumps(result)

        if config == 'common':
            result['data'] = self.core_confdata
            result['meta'] = self.core_conf
            self.logger.info("  - index: common = {}".format(result))
            return json.dumps(result)

        if config == 'http':
            result['data'] = self.module_confdata.get('http', {})
            result['meta'] = self.http_conf
            self.logger.info("  - index: http = {}".format(result))
            return json.dumps(result)

        if config == 'admin':
            result['data'] = self.module_confdata.get('admin', {})
            result['meta'] = self.admin_conf
            self.logger.info("  - index: admin = {}".format(result))
            return json.dumps(result)

        raise cherrypy.NotFound


    def update_configdict(self, config_dict, data, section='unknown'):
        """
        Update loaded config dict from data received from the admin frontend
        """
        update_data = data.get(section, {}).get('data', {})
        for key in update_data:
            # self.logger.info("  - update: {}: {} = {}".format(section, key, update_data[key]))
            if update_data[key] is None:
                config_dict.pop(key, None)
            else:
                config_dict[key] = update_data[key]
        return


    def update_config(self, config=False):

        token = cherrypy.request.headers.get('Authorization', '')
        self.logger.info("ConfigController() update: jwt token = {}".format(token))

        self.logger.info("ConfigController() update: config {}".format(config))
        if config in ['common', 'http', 'admin', 'core']:

            # get http headers
            cl = cherrypy.request.headers.get('Content-Length', 0)
            if cl == 0:
                raise cherrypy.HTTPError(status=411)
            rawbody = cherrypy.request.body.read(int(cl))
            data = json.loads(rawbody.decode('utf-8'))
            self.logger.info("  - update: data = {}".format(data))

            # update etc/smarthome.yaml with data from admin frontend
            self.core_confdata = shyaml.yaml_load_roundtrip(os.path.join(self.etc_dir, 'smarthome.yaml'))
            self.update_configdict(self.core_confdata, data, 'common')
            shyaml.yaml_save_roundtrip(os.path.join(self.etc_dir, 'smarthome.yaml'), self.core_confdata, create_backup=True)

            # update etc/module.yaml with data from admin frontend
            self.module_confdata = shyaml.yaml_load_roundtrip(os.path.join(self.etc_dir, 'module.yaml'))
            self.update_configdict(self.module_confdata['http'], data, 'http')
            self.update_configdict(self.module_confdata['admin'], data, 'admin')
            shyaml.yaml_save_roundtrip(os.path.join(self.etc_dir, 'module.yaml'), self.module_confdata, create_backup=True)

            result = {"result": "ok"}
            return json.dumps(result)

        result = {"result": "error"}
        return json.dumps(result)


    # ======================================================================
    #  Handling of http REST requests
    #
    @cherrypy.expose
    def index(self, id=''):
        """
        Handle GET requests
        """

        if id == '':
            if getattr(self.index, "authentication_needed"):
                # Enforce authentication for root of API
                token_valid, error_text = self.REST_test_jwt_token()
                if not token_valid:
                    self.logger.info("ConfigController.index(): {}".format(error_text))
                    return json.dumps({'result': 'error', 'description': error_text})
            return self.root()
        else:
            return self.root(id)

        return None
    index.expose_resource = True
    index.authentication_needed = True


    @cherrypy.expose
    def update(self, id=''):
        """
        Handle PUT requests
        """
        return self.update_config(id)
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
        return param

