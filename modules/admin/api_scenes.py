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

from .rest import RESTResource


class ScenesController(RESTResource):

    def __init__(self, module):
        self._sh = module._sh
        self.module = module
        self.base_dir = self._sh.get_basedir()
        self.logger = logging.getLogger(__name__)

        self.items = Items.get_instance()

        return


    # ======================================================================
    #  /api/scenes
    #
    def root(self):
        if self.items == None:
            self.items = Items.get_instance()

        from lib.scene import Scenes
        get_param_func = getattr(Scenes, "get_instance", None)
        if callable(get_param_func):
            supported = True
            self.scenes = Scenes.get_instance()
            scene_list = []
            if self.scenes is not None:
                scene_list = self.scenes.get_loaded_scenes()

            disp_scene_list = []
            for scene in scene_list:
                scene_dict = {}
                scene_dict['path'] = scene
                #                scene_dict['name'] = str(self._sh.return_item(scene))
                scene_dict['name'] = str(self.items.return_item(scene))

                action_list = self.scenes.get_scene_actions(scene)
                scene_dict['value_list'] = action_list
                #                scene_dict[scene] = action_list

                disp_action_list = []
                for value in action_list:
                    action_dict = {}
                    action_dict['action'] = value
                    action_dict['action_name'] = self.scenes.get_scene_action_name(scene, value)
                    action_list = self.scenes.return_scene_value_actions(scene, value)
                    for action in action_list:
                        if not isinstance(action[0], str):
                            action[0] = action[0].id()
                    action_dict['action_list'] = action_list

                    disp_action_list.append(action_dict)
                scene_dict['values'] = disp_action_list
                self.logger.debug("scenes_html: disp_action_list for scene {} = {}".format(scene, disp_action_list))

                disp_scene_list.append(scene_dict)
        else:
            supported = False
        return json.dumps(disp_scene_list)


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
                    self.logger.info("ScenesController.index(): {}".format(error_text))
                    return json.dumps({'result': 'error', 'description': error_text})
            return self.root()
        # elif id == 'info':
        #     return self.info()
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
#        if param in ['info']:
#            return param
        return None


