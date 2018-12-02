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

    def __init__(self, sh):
        self._sh = sh
        self.base_dir = self._sh.get_basedir()
        self.etc_dir = self._sh._etc_dir
        self.modules_dir = os.path.join(self.base_dir, 'modules')

        self.core_conf = shyaml.yaml_load(os.path.join(self.modules_dir, 'core', 'module.yaml'))
        self.http_conf = shyaml.yaml_load(os.path.join(self.modules_dir, 'http', 'module.yaml'))
        self.admin_conf = shyaml.yaml_load(os.path.join(self.modules_dir, 'admin', 'module.yaml'))

        self.logger = logging.getLogger('API_config')

        return



    @cherrypy.expose
    def index(self, config=False):

        self.logger.warning("ConfigController: index: config = {}".format(config))

        self.core_confdata = shyaml.yaml_load(os.path.join(self.etc_dir, 'smarthome.yaml'))
        self.module_confdata = shyaml.yaml_load(os.path.join(self.etc_dir, 'module.yaml'))

        result = {}
        if not config:
            result['core'] = {}
            result['core']['data'] = self.core_confdata
            result['core']['meta'] = self.core_conf
            result['http'] = {}
            result['http']['data'] = self.module_confdata.get('http', {})
            result['http']['meta'] = self.http_conf
            result['admin'] = {}
            result['admin']['data'] = self.module_confdata.get('admin', {})
            result['admin']['meta'] = self.admin_conf
            return json.dumps(result)

        if config['config'] == 'core':
            result['data'] = {}
            result['meta'] = self.core_conf
            return json.dumps(result)

        if config['config'] == 'http':
            result['data'] = {}
            result['meta'] = self.http_conf
            return json.dumps(result)

        if config['config'] == 'admin':
            result['data'] = {}
            result['meta'] = self.admin_conf
            return json.dumps(result)

        result = config
        return json.dumps(result)
    index.expose_resource = True


    def REST_instantiate(self,id):
        """ instantiate a REST resource based on the id

        this method MUST be overridden in your class. it will be passed
        the id (from the url fragment) and should return a model object
        corresponding to the resource.

        if the object doesn't exist, it should return None rather than throwing
        an error. if this method returns None and it is a PUT request,
        REST_create() will be called so you can actually create the resource.
        """
        self.logger.warning("ConfigController: REST_instantiate: id = {}".format(id))
        if id in ['core', 'http', 'admin']:
            result = {}
            result['config'] = id
            self.logger.warning("ConfigController: REST_instantiate: result = {}".format(result))
            return result
        return None
#        raise cherrypy.NotFound

