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

import jwt
from .rest import RESTResource


class LogsController(RESTResource):

    def __init__(self, sh, jwt_secret=False):
        self._sh = sh
        self.base_dir = self._sh.get_basedir()
        self.etc_dir = self._sh._etc_dir
        self.log_dir = os.path.join(self.base_dir, 'var', 'log')

        self.logging_conf = shyaml.yaml_load(os.path.join(self.etc_dir, 'logging.yaml'))

        self.logger = logging.getLogger(__name__)
        self.jwt_secret = jwt_secret

        try:
            roothandler = self.logging_conf['root']['handlers'][0]
            self.root_logname = os.path.splitext(os.path.basename(self.logging_conf['handlers'][roothandler]['filename']))[0]
        except:
            self.root_logname = ''
        self.logger.info("logging_conf: self.root_logname = {}".format(self.root_logname))

    def get_logs(self):
        """
        Return the names of logs (names of .log-files without the extension)

        :return: names of logs
        :rtype: list
        """
        logs = []
        for fn in self.files:
            if os.path.splitext(fn)[1] == '.log':
                log_name = os.path.splitext(fn)[0]
                logs.append(log_name)
        return logs


    def get_logs_with_files(self):
        """
        Return the names of logs (names of .log-files without the extension)

        :return: names of logs
        :rtype: list
        """
        logs = {}
        for fn in self.files:
            if os.path.splitext(fn)[1] == '.log':
                log_name = os.path.splitext(fn)[0]

                logfiles = self.get_files_of_log(log_name)
                logs[log_name] = sorted(logfiles)
        return logs


    def get_files_of_log(self, log_name):
        """
        Return the files (actual and passed days) of a log

        :param log_name: name of the log
        :type log_name: str
        :return: filenames
        :rtype: list
        """
        logfiles = []
        for fn in self.files:
            if fn.startswith(log_name+'.log'):
                logfiles.append(fn)
        return logfiles


    @cherrypy.expose
    def index(self, log_name=False):

        # test existance of jwt  (is to be moved to rest.py)
        #
        self.logger.info("LogsController index: cherrypy.request.headers = {}".format(cherrypy.request.headers))
        token = cherrypy.request.headers.get('Authorization', '')
        decoded = {}
        self.logger.info("LogsController (index): jwt token = {}".format(token))
        if self.jwt_secret:
            if token != '':
                if token.startswith('Bearer '):
                    token = token[len('Bearer '):]
            try:
                decoded = jwt.decode(token, self.jwt_secret, verify=True, algorithms='HS256')
            except Exception as e:
                self.logger.error("LogsController (index): Exception = {}".format(e))
                token = ''
                decoded = {}
        self.logger.info("LogsController (index): jwt token = {}".format(token))
        self.logger.info("LogsController (index): decoded token = {}".format(decoded))


        if log_name:
            # return content of the logfile
            if os.path.isfile(os.path.join(self.log_dir, log_name)):
                with open(os.path.join(self.log_dir, log_name), 'r') as lf:
                    content = lf.read()
                return content
#                return "Logfile " + os.path.join(self.log_dir, log_name) + " found"

        # get names of files in log directory
        self.files = sorted(os.listdir(self.log_dir))
        # get names of logs (from filenames enting with '.log')
        logs = self.get_logs()

        if log_name:
            self.logger.info("LogController() index: log_name = {}".format(log_name))
            # get filenames available for the log
            if log_name in logs:
                logfiles = self.get_files_of_log(log_name)
                return json.dumps(sorted(logfiles))
            raise cherrypy.NotFound

        logs = self.get_logs_with_files()
        self.logger.info("LogController (GET): logfiles = {}".format(logs))
        return json.dumps({'logs':logs, 'default': self.root_logname})
    index.expose_resource = True

    def REST_instantiate(self, log_name):
        """
        instantiate a REST resource based on the id
        """
        return log_name


