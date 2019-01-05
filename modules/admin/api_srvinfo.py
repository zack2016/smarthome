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



def get_process_info(command, wait=True):
    """
    returns output from executing a given command via the shell.
    """
    ## get subprocess module
    import subprocess

    ## call date command ##
    p = subprocess.Popen(command, stdout=subprocess.PIPE, shell=True)

    # Talk with date command i.e. read data from stdout and stderr. Store this info in tuple ##
    # Interact with process: Send data to stdin. Read data from stdout and stderr, until end-of-file is reached.
    # Wait for process to terminate. The optional input argument should be a string to be sent to the child process, or None, if no data should be sent to the child.
    (result, err) = p.communicate()
#    logger.warning("get_process_info: command='{}', result='{}', err='{}'".format(command, result, err))

    if wait:
        ## Wait for date to terminate. Get return returncode ##
        p_status = p.wait()
    return str(result, encoding='utf-8', errors='strict')



class ServerinfoController(RESTResource):

    def __init__(self, sh, module):
        self._sh = sh
        self.module = module
        self.base_dir = self._sh.get_basedir()
        self.logger = logging.getLogger(__name__)

        return


    def get_knx_daemon(self):
        """
        Tests it knxd or eibd are running
        """
        # knxd_service = get_process_info("systemctl status knxd.service")
        # smarthome_service = get_process_info("systemctl status smarthome.service")
        # knxd_socket = get_process_info("systemctl status knxd.socket")

        daemon = 'SERVICES.INACTIVE'
        if get_process_info("ps cax|grep eibd") != '':
            daemon = 'eibd'
        if get_process_info("ps cax|grep knxd") != '':
            if daemon != 'SERVICES.INACTIVE':
                daemon += ' and knxd'
            else:
                daemon = 'knxd'
        return daemon


    def get_1wire_daemon(self):
        """
        Tests it 1wire are running
        """
        daemon = 'SERVICES.INACTIVE'
        if get_process_info("ps cax|grep owserver") != '':
            daemon = 'owserver'
        return daemon


    def get_mqtt_daemon(self):
        """
        Tests it 1wire are running
        """
        daemon = 'SERVICES.INACTIVE'
        if get_process_info("ps cax|grep mosquitto") != '':
            daemon = 'mosquitto'
        return daemon


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
        response['daemon_knx'] = self.get_knx_daemon()
        response['daemon_ow'] = self.get_1wire_daemon()
        response['daemon_mqtt'] = self.get_mqtt_daemon()
        return json.dumps(response)

