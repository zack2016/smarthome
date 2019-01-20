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


import threading
import os
import logging
import json
import cherrypy

from .rest import RESTResource


class ThreadsController(RESTResource):

    def __init__(self, module):
        self._sh = module._sh
        self.module = module
        self.base_dir = self._sh.get_basedir()
        self.logger = logging.getLogger(__name__)


    # ======================================================================
    #  /api/threads
    #
    def root(self):

        """
        display a list of all threads
        """
        threads_count = 0
        cp_threads = 0
        http_threads = 0
        idle_threads = 0
        for thread in threading.enumerate():
            if thread.name.find("CP Server") == 0:
                cp_threads += 1
            if thread.name.find("HTTPServer") == 0:
                http_threads += 1
            if thread.name.find("idle") == 0:
                idle_threads += 1

        threads = []
        for t in threading.enumerate():
            if t.name.find("CP Server") != 0 and t.name.find("HTTPServer") != 0 and t.name.find("idle") != 0:
                thread = dict()
                thread['name'] = t.name
                thread['sort'] = str(t.name).lower()
                thread['id'] = t.ident
                try:
                    if t.is_alive():
                        thread['alive'] = 'True'
                    else:
                        thread['alive'] = 'False'
                except AssertionError:
                    thread['alive'] = 'AssertionError'

                threads.append(thread)
                threads_count += 1

        if cp_threads > 0:
            threads.append(self.thread_sum("CP Server", cp_threads))
            threads_count += cp_threads
        if http_threads > 0:
            threads.append(self.thread_sum("HTTPServer", http_threads))
            threads_count += http_threads
        if idle_threads > 0:
            threads.append(self.thread_sum("idle", idle_threads))
            threads_count += idle_threads

        threads_sorted = sorted(threads, key=lambda k: k['sort'])
        return json.dumps([threads_count, threads_sorted])


    def thread_sum(self, name, count):
        thread = dict()
        if count > 0:
            thread['name'] = name
            thread['sort'] = str(thread['name']).lower()
            thread['id'] = "(" + str(count) + " threads" + ")"
            thread['alive'] = 'True'
        return thread

    # ======================================================================
    #  Handling of http REST requests
    #
    @cherrypy.expose
    def index(self, id=''):
        """
        Handle GET requests
        """

        if id == '':
            # Enforce authentication for root of API
            if getattr(self.index, "authentication_needed"):
                token_valid, error_text = self.REST_test_jwt_token()
                if not token_valid:
                    self.logger.info("ThreadsController.index(): {}".format(error_text))
                    return json.dumps({'result': 'error', 'description': error_text})
            return self.root()
        # elif id == 'info':
        #     return self.info()
        else:
            return self.root(id)

        return None

    index.expose_resource = True
    index.authentication_needed = True

    def REST_instantiate(self, param):
        """
        instantiate a REST resource based on the id

        this method MUST be overridden in your class. it will be passed
        the id (from the url fragment) and should return a model object
        corresponding to the resource.

        if the object doesn't exist, it should return None rather than throwing
        an error. if this method returns None and it is a PUT request,
        REST_create() will be called so you can actually create the resource.
        """
        #        if param in ['info']:
        #            return param
        return None


