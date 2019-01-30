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
from lib.item_conversion import convert_yaml as convert_yaml
from lib.item_conversion import parse_for_convert as parse_for_convert
from lib.shtime import Shtime


# ======================================================================
#  Controller for REST API /api/services
#
class ServicesController(RESTResource):
    """
    Controller for REST API /api/services
    """

    def __init__(self, module):
        self._sh = module._sh
        self.module = module
        self.base_dir = self._sh.get_basedir()
        self.logger = logging.getLogger(__name__)

        self.etc_dir = self._sh._etc_dir
        self.modules_dir = os.path.join(self.base_dir, 'modules')
        return


    def get_body(self, text=False):
        """
        Get content body of received request header

        :return:
        """
        cl = cherrypy.request.headers.get('Content-Length', 0)
        if cl == 0:
            # cherrypy.reponse.headers["Status"] = "400"
            # return 'Bad request'
            raise cherrypy.HTTPError(status=411)
        rawbody = cherrypy.request.body.read(int(cl))
        self.logger.debug("ServicesController(): get_body(): rawbody = {}".format(rawbody))
        try:
            if text:
                params = rawbody.decode('utf-8')
            else:
                params = json.loads(rawbody.decode('utf-8'))
        except Exception as e:
            self.logger.warning("ServicesController(): get_body(): Exception {}".format(e))
            return None
        return params


    def strip_empty_lines(self, txt):
        """
        Remove \r from text and remove exessive empty lines from end
        """
        txt = txt.replace('\r', '').rstrip()
        while txt.endswith('\n'):
            txt = txt[:-1].rstrip()
        txt += '\n\n'
        #        self.logger.warning("strip_empty_lines: txt = {}".format(txt))
        return txt


    # ======================================================================
    #  eval_syntax_checker
    #
    def eval_syntax_checker(self, eval_code, relative_to):
        expanded_code = ''

        # set up environment for calculating eval-expression
        sh = self._sh
        shtime = Shtime.get_instance()

        eval_code = eval_code.replace('\r', '').replace('\n', ' ').replace('  ', ' ').strip()
        if relative_to == '':
            expanded_code = eval_code
        else:
            rel_to_item = sh.return_item(relative_to)
            if rel_to_item is not None:
                expanded_code = rel_to_item.get_stringwithabsolutepathes(eval_code, 'sh.', '(')
            else:
                expanded_code = "Error: Item {} does not exist!".format(relative_to)
        try:
            value = eval(expanded_code)
        except Exception as e:
            check_result = "Problem evaluating {}:  {}".format(expanded_code, e)
        else:
            check_result = value
        return expanded_code, check_result


    # ======================================================================
    #  conf_yaml_converter
    #
    def conf_yaml_converter(self, conf_code):
        conf_code = self.strip_empty_lines(conf_code)
        yaml_code = ''
        ydata = parse_for_convert(conf_code=conf_code)
        if ydata != None:
            yaml_code = convert_yaml(ydata)
        return yaml_code


    # ======================================================================
    #  yaml_syntax_checker
    #
    def yaml_syntax_checker(self, yaml_code):
        check_result = ''

        yaml_code = self.strip_empty_lines(yaml_code)

        import lib.shyaml as shyaml
        ydata, estr = shyaml.yaml_load_fromstring(yaml_code, True)

        if estr != '':
            check_result = 'ERROR: \n\n' + estr
        if ydata != None:
            check_result += convert_yaml(ydata).replace('\n\n', '\n')

        return check_result


    # ======================================================================
    #  /api/server/evalcheck
    #
    def evalcheck(self):
        """
        Check syntax of eval expression

        :return: status dict
        """
        params = self.get_body(text=False)
        if params is None:
            self.logger.warning("ServicesController(): evalcheck(): Bad, request")
            raise cherrypy.HTTPError(status=411)
        self.logger.info("ServicesController(): evalcheck(): {}".format(params))

        expanded_code, eval_result = self.eval_syntax_checker(params['expression'], params['relative_to'])
        result = {'expression': expanded_code, 'result': eval_result}
        # return json.dumps({'expression': 'Expandierter Ausdruck (Antwort vom Server)', 'result': '42 (Antwort vom Server)'})
        return json.dumps(result)


    # ======================================================================
    #  /api/server/yamlcheck
    #
    def yamlcheck(self):
        """
        Check syntax of YAML configuration

        :return: status dict
        """
        params = self.get_body(text=True)
        if params is None:
            self.logger.warning("ServicesController(): yamlcheck(): Bad, request")
            raise cherrypy.HTTPError(status=411)
        self.logger.info("ServicesController(): yamlcheck(): '{}'".format(params))

        return self.yaml_syntax_checker(params)


    # ======================================================================
    #  /api/server/yamlconvert
    #
    def yamlconvert(self):
        """
        convert CONF configuration to YAML syntax

        :return: status dict
        """
        params = self.get_body(text=True)
        if params is None:
            self.logger.warning("ServicesController(): yamlconvert(): Bad, request")
            raise cherrypy.HTTPError(status=411)
        self.logger.info("ServicesController(): yamlconvert(): '{}'".format(params))

        return self.conf_yaml_converter(params)


    # ======================================================================
    #  GET /api/services/
    #
    def read(self, id=''):
        """
        Handle GET requests for server API
        """

        return None

#    read.expose_resource = True
#    read.authentication_needed = True


    def update(self, id=''):
        """
        Handle PUT requests for server API
        """
        self.logger.info("ServicesController.update('{}')".format(id))

        if id == 'evalcheck':
            return self.evalcheck()
        if id == 'yamlcheck':
            return self.yamlcheck()
        elif id == 'yamlconvert':
            return self.yamlconvert()

        return None

    update.expose_resource = True
    update.authentication_needed = True

