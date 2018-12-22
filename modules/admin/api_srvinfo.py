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

from .rest import RESTResource

import bin.shngversion


class ServerinfoController(RESTResource):

    def __init__(self, sh, module):
        self._sh = sh
        self.module = module
        self.base_dir = self._sh.get_basedir()
        self.logger = logging.getLogger(__name__)

        return



    @cherrypy.expose
    def index(self, scheduler_name=False):
        """
        return a list of all known schedules
        """
        self.logger.info("ServerinfoController(): index")

        client_ip = cherrypy.request.wsgi_environ.get('REMOTE_ADDR')

        response = {}
        response['default_language'] = self._sh.get_defaultlanguage()
        response['client_ip'] = client_ip
        response['itemtree_fullpath'] = self.module.itemtree_fullpath
        response['itemtree_searchstart'] = self.module.itemtree_searchstart
        response['tz'] = self.module.shtime.tz
        response['tzname'] = str(self.module.shtime.tzname())
        response['core_branch'] = bin.shngversion.get_shng_branch()
        response['plugins_branch'] = bin.shngversion.get_plugins_branch()
        response['websocket_host'] = self.module.websocket_host
        response['websocket_port'] = self.module.websocket_port
        return json.dumps(response)

