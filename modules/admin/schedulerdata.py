#!/usr/bin/env python3
# -*- coding: utf8 -*-
#########################################################################
#  Copyright 2018-      Martin Sinn                         m.sinn@gmx.de
#########################################################################
#  Backend plugin for SmartHomeNG
#
#  This plugin is free software: you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation, either version 3 of the License, or
#  (at your option) any later version.
#
#  This plugin is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with this plugin. If not, see <http://www.gnu.org/licenses/>.
#########################################################################

import json

import cherrypy

import lib.config


class SchedulerData:

    def __init__(self):

        return


    # -----------------------------------------------------------------------------------
    #    SCHEDULERS  -  Old Interface methods (from backend)
    # -----------------------------------------------------------------------------------

    @cherrypy.expose
    def scheduler_json(self):
        """
        return a list of all known schedules
        """

        schedule_list = []
        #        for entry in self._sh.scheduler._scheduler:
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
                    schedule['group'] = schedule['group'][:-1]   # items -> item, logics -> logic, plugins -> plugin
                    del nl[0]
                    schedule['name'] = '.'.join(nl)

                schedule_list.append(schedule)

        schedule_list_sorted = sorted(schedule_list, key=lambda k: k['fullname'].lower())
        return json.dumps(schedule_list_sorted)


