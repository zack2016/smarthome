#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
#  Copyright 2020-      Martin Sinn                         m.sinn@gmx.de
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


from lib.model.module import Module
from lib.module import Modules
from lib.shtime import Shtime


class SampleModule(Module):
    version = '1.7.0'
    longname = '... module for SmartHomeNG'
    port = 0

    def __init__(self, sh, testparam=''):
        """
        Initialization Routine for the module
        """
        # TO DO: Shortname anders setzen (oder warten bis der Module Loader es beim Laden setzt
        self._shortname = self.__class__.__name__
        self._shortname = self._shortname.lower()

        self.logger = logging.getLogger(__name__)
        self._sh = sh
        self.shtime = Shtime.get_instance()
        self.logger.debug("Module '{}': Initializing".format(self._shortname))


        # Test if http module is loaded (if the module uses http)
        # try:
        #     self.mod_http = Modules.get_instance().get_module('http')  # try/except to handle running in a core version that does not support modules
        # except:
        #     self.mod_http = None
        # if self.mod_http == None:
        #     self.logger.error(
        #         "Module '{}': Not initializing - Module 'http' has to be loaded BEFORE this module".format(self._shortname))
        #     self._init_complete = False
        #     return
        #
        # self._showtraceback = self.mod_http._showtraceback


        # get the parameters for the module (as defined in metadata module.yaml):
        self.logger.debug("Module '{}': Parameters = '{}'".format(self._shortname, dict(self._parameters)))
        try:
            # self.broker_ip = self._parameters['broker_host']
            pass
        except KeyError as e:
            self.logger.critical(
                "Module '{}': Inconsistent module (invalid metadata definition: {} not defined)".format(self._shortname, e))
            self._init_complete = False
            return

        ip = get_local_ipv4_address()


    def start(self):
        """
        If the module needs to startup threads or uses python modules that create threads,
        put thread creation code or the module startup code here.

        Otherwise don't enter code here
        """
        pass


    def stop(self):
        """
        If the module has started threads or uses python modules that created threads,
        put cleanup code here.

        Otherwise don't enter code here
        """
        #        self.logger.debug("Module '{}': Shutting down".format(self.shortname))
        pass



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


#import socket

#from lib.plugin import Plugins
#from lib.utils import Utils


