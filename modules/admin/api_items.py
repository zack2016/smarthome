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

from lib.item import Items

import jwt
from .rest import RESTResource


class ItemsController(RESTResource):

    def __init__(self, module):
        self._sh = module._sh
        self.module = module
        self.base_dir = self._sh.get_basedir()
        self.logger = logging.getLogger(__name__)

        self.items = Items.get_instance()

        return


    # ======================================================================
    #  /api/items
    #
    def root(self, item_name=''):
        """
        returns information if the root of the REST API is called

        Note: the root of the REST API is not protected by authentication
        """
        if self.items is None:
            self.items = Items.get_instance()

        if item_name == 'structs':
            self.logger.info("ItemsController.root(): item_name = {}".format(item_name))
            result = self.items.return_struct_definitions()

            return json.dumps(result)

            raise cherrypy.NotFound
            self.logger.info("LogController (GET): logfiles = {}".format(logs))
            return json.dumps({'logs':logs, 'default': self.root_logname})

        return None


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
                    self.logger.info("ItemsController.index(): {}".format(error_text))
                    return json.dumps({'result': 'error', 'description': error_text})
            return self.root()
        else:
            return self.root(id)

        return None
    index.expose_resource = True
    index.authentication_needed = True


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

