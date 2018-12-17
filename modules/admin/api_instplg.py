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


class InstalledPluginsController(RESTResource):

    def __init__(self, sh):
        self._sh = sh
        self.base_dir = self._sh.get_basedir()
        self.plugins_dir = os.path.join(self.base_dir, 'plugins')
        self.logger = logging.getLogger(__name__)

        self.plugin_data = {}
        return



    @cherrypy.expose
    def index(self, scheduler_name=False):
        """
        return a list of all known schedules
        """
        self.logger.info("InstalledPluginsController(): index")

        if self.plugin_data == {}:
            plugins_list = sorted(os.listdir(self.plugins_dir))

            self.logger.info("- plugins_list_sorted = {}".format(plugins_list))
            for p in plugins_list:
                if not (p[0] in ['.', '_']):
                    if os.path.isfile(os.path.join(self.plugins_dir, p, 'plugin.yaml')):
                        plg_yaml = shyaml.yaml_load(os.path.join(os.path.join(self.plugins_dir, p, 'plugin.yaml')))
                        plg_data = plg_yaml.get('plugin', None)
                        if plg_data is None:
                            self.logger.info("- plugin.yaml has no section 'plugin': {}".format(p))
                        else:
                            self.plugin_data[p] = {}
                            self.plugin_data[p]['type'] = plg_data.get('type', '')
                            self.plugin_data[p]['description'] = plg_data.get('description', {'de': '', 'en': ''})
                            self.plugin_data[p]['version'] = plg_data.get('version', '')
                            self.plugin_data[p]['documentation'] = plg_data.get('documentation', '')
                            self.plugin_data[p]['multi_instance'] = plg_data.get('multi_instance', '')
                    else:
                        self.logger.info("- no plugin.yaml: {}".format(p))

        return json.dumps(self.plugin_data)


        if False:
            for entry in self._sh.scheduler._scheduler:
                schedule = dict()
                #            s = self._sh.scheduler._scheduler[entry]
                s = self._sh.scheduler._scheduler[entry]
                if s['next'] != None and s['cycle'] != '' and s['cron'] != '':
                    schedule['fullname'] = entry
                    schedule['name'] = entry
                    schedule['group'] = 'other'
                    schedule['next'] = s['next'].strftime('%Y-%m-%d %H:%M:%S%z')
                    schedule['cycle'] = str(s['cycle'])
                    #            schedule['cron'] = html.escape(str(s['cron']))
                    schedule['cron'] = str(s['cron'])

                    if schedule['cycle'] == None:
                        schedule['cycle'] = '-'
                    if schedule['cron'] == None:
                        schedule['cron'] = '-'

                    nl = entry.split('.')
                    if nl[0].lower() in ['items', 'logics', 'plugins']:
                        schedule['group'] = nl[0].lower()
                        schedule['group'] = schedule['group'][:-1]  # items -> item, logics -> logic, plugins -> plugin
                        del nl[0]
                        schedule['name'] = '.'.join(nl)

                    schedule_list.append(schedule)

            schedule_list_sorted = sorted(schedule_list, key=lambda k: k['fullname'].lower())
            return json.dumps(schedule_list_sorted)

