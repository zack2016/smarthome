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

import os
import shutil
import json

import cherrypy

import lib.shyaml as shyaml
import lib.config
from lib.plugin import Plugins
from lib.metadata import Metadata
from lib.model.smartplugin import SmartPlugin
from lib.constants import (KEY_CLASS_PATH, YAML_FILE)


class PluginData:

    def __init__(self):

        self.plugins = Plugins.get_instance()

        return


    # -----------------------------------------------------------------------------------
    #    PLUGINS  -  Old Interface methods (from backend)
    # -----------------------------------------------------------------------------------

    @cherrypy.expose
    def plugininfo_json(self):
        """
        return a list of all configured plugin instances
        """
        if self.plugins == None:
            self.plugins = Plugins.get_instance()

        # get data for display of page
        conf_plugins = {}
        _conf = lib.config.parse(self.plugins._get_plugin_conf_filename())

        for plugin in _conf:
            conf_plugins[plugin] = {}
            conf_plugins[plugin] = _conf[plugin]

        plugin_list = []
        for x in self.plugins.return_plugins():
            plugin = dict()
            plugin['metadata'] = {}

            plugin['stopped'] = False
            # Update(s) triggered by < strong > {{p.instance._itemlist | length}} < / strong > items
            plugin['triggers'] = str(x._itemlist)

            if isinstance(x, SmartPlugin):
                plugin['pluginname'] = x.get_shortname()
                plugin['configname'] = x.get_configname()
                plugin['version'] = x.get_version()
                plugin['smartplugin'] = True
                plugin['multiinstance'] = x.is_multi_instance_capable()
                plugin['instancename'] = x.get_instance_name()

                plugin['webif_url'] = ''
                if self.module.mod_http.get_webifs_for_plugin(x.get_shortname()) != []:
                    for webif in self.module.mod_http.get_webifs_for_plugin(x.get_shortname()):
                        if webif['Instance'] == plugin['instancename']:
                            plugin['webif_url'] = self.shng_url_root + webif['Mount']

                plugin['parameters'] = []
                if bool(x._parameters):
#                    for p in x._parameters:
                    for p in x._metadata.get_parameterlist():
                        p_dict = {}
                        p_dict['name'] = str(p)
                        p_dict['type'] = x._metadata.get_parameter_type_with_subtype(p)
                        p_dict['value'] = str(x._parameters[p])
                        p_dict['default'] = x._metadata.get_parameter_defaultvalue(p)
                        plugin['parameters'].append(p_dict)

                plugin['attributes'] = []
                for a in x._metadata.get_itemdefinitionlist():
                    a_dict = {}
                    a_dict['name'] = str(a)
                    a_dict['type'] = x._metadata.get_itemdefinition_type_with_subtype(a)
                    plugin['attributes'].append(a_dict)

                plugin['metadata']['classpath'] = x._classpath  # str
                plugin['metadata']['classname'] = x.get_classname()
            else:
                plugin['pluginname'] = x._shortname
                plugin['configname'] = x._configname
                plugin['version'] = ''
                plugin['smartplugin'] = False
                plugin['multiinstance'] = False
                plugin['instancename'] = ''
                plugin['webif_url'] = ''
                plugin['parameters'] = []
                plugin['attributes'] = []

                plugin['metadata']['classpath'] = str(x._classpath)  # str
                plugin['metadata']['classname'] = str(x._classname)  # str
                plugin['stopped'] = False

            plugin['metadata']['type'] = x._metadata.get_string('type')
            plugin['metadata']['description'] = x._metadata.get_mlstring('description')
            plugin['metadata']['description_long'] = x._metadata.get_mlstring('description_long')
            plugin['metadata']['keywords'] = x._metadata.get_string('keywords')
            plugin['metadata']['documentation'] = x._metadata.get_string('documentation')
            plugin['metadata']['support'] = x._metadata.get_string('support')
            plugin['metadata']['maintainer'] = x._metadata.get_string('maintainer')
            plugin['metadata']['tester'] = x._metadata.get_string('tester')

            try:
                plugin['stopped'] = not x.alive
                plugin['stoppable'] = True
            except:
                plugin['stopped'] = False
                plugin['stoppable'] = False
            if plugin['pluginname'] == 'backend':
                plugin['stoppable'] = False

            plugin_list.append(plugin)
#        plugins_sorted = sorted(plugin_list, key=lambda k: k['classpath'])
        plugins_sorted = sorted(plugin_list, key=lambda k: k['pluginname']+k['instancename'])

        return json.dumps(plugins_sorted)


    # -----------------------------------------------------------------------------------
    #    PLUGINS  -  Interface methods (for admin frontend)
    # -----------------------------------------------------------------------------------

    def _get_pluginname_and_metadata(self, plg_section, plg_conf):
        """
        Return the actual plugin name and the metadata instance

        :param plg_conf: loaded section of the plugin.yaml for the actual plugin
        :type plg_conf: dict

        :return: plugin_name and metadata_instance
        :rtype: string, object
        """
        plugin_name = plg_conf.get('plugin_name', '').lower()
        plugin_version = plg_conf.get('plugin_version', '').lower()
        if plugin_version != '':
            plugin_version = '._pv_' + plugin_version.replace('.', '_')
        if plugin_name != '':
            meta = Metadata(self._sh, (plugin_name + plugin_version).replace('.', os.sep), 'plugin')
        else:
            classpath = plg_conf.get(KEY_CLASS_PATH, '')
            if classpath != '':
                plugin_name = classpath.split('.')[len(classpath.split('.')) - 1].lower()
                if plugin_name.startswith('_pv'):
                    plugin_name = classpath.split('.')[len(classpath.split('.')) - 2].lower()
                self.logger.debug("Plugins __init__: pluginname = '{}', classpath '{}'".format(plugin_name, classpath))
                meta = Metadata(self._sh, plugin_name, 'plugin', (classpath + plugin_version).replace('.', os.sep))
            else:
                self.logger.error(
                    "Plugin configuration section '{}': Neither 'plugin_name' nor '{}' are defined.".format(plg_section,
                                                                                                            KEY_CLASS_PATH))
                meta = Metadata(self._sh, plugin_name, 'plugin', classpath)
        return (plugin_name + plugin_version, meta)


    @cherrypy.expose
    def pluginconfig_json(self):

        if self.plugins is None:
            self.plugins = Plugins.get_instance()

        config_filename = self.plugins._get_plugin_conf_filename()
        _etc_dir = os.path.dirname(config_filename)

        info = {}
        # make it 'readonly', if plugin.conf is used
        info['readonly'] = not(os.path.splitext(config_filename)[1].lower() == '.yaml')

        if not info['readonly']:
            # for beta-testing: create a backup of ../etc/plugin.yaml
            if not os.path.isfile(os.path.join(_etc_dir, 'plugin_before_admin_config.yaml')):
                shutil.copy2(config_filename, os.path.join(_etc_dir, 'plugin_before_admin_config.yaml'))
                self.logger.warning('Created a backup copy of plugin.yaml ({})'.format(os.path.join(_etc_dir, 'plugin_before_admin_config.yaml')))

        # get path to plugin configuraion file, withou extension
        _conf = lib.config.parse_basename(os.path.splitext(config_filename)[0], configtype='plugin')


        for confplg in _conf:
            plg = _conf[confplg].get('plugin_name', '?')
            if plg == '?':
                plg = _conf[confplg].get('class_path', '?')
            plginstance = self.plugins.return_plugin(confplg)
            typ = '?'
            if plginstance != None:
                # self.logger.warning("confplg {}: type(plginstance) = {}".format(confplg, type(plginstance)))
                # self.logger.warning("confplg {}: type(plginstance.metadata) = {}".format(confplg, type(plginstance.metadata)))
                try:
                    typ = plginstance.metadata.get_string('type')
                    _conf[confplg]['_meta'] = plginstance.metadata.meta
                    _conf[confplg]['_description'] = plginstance.metadata.meta['plugin']['description']
                except:
                    self.logger.warning('confplg {}: Passed for plginstance = {}'.format(confplg, plginstance))
            else:
                # nicht geladene Plugins
                # self.logger.warning("confplg {}: type(plginstance) = None".format(confplg))
                plugin_name, metadata = self._get_pluginname_and_metadata(confplg, _conf[confplg])
                # self.logger.warning("plugin_name = {}, meta = {}".format(plugin_name, metadata.meta))

                typ = metadata.get_string('type')
                _conf[confplg]['_meta'] = metadata.meta
                try:
                    _conf[confplg]['_description'] = metadata.meta['plugin']['description']
                except:
                    _conf[confplg]['_description'] = {}
                    _conf[confplg]['_description']['de'] = ''
                    _conf[confplg]['_description']['en'] = ''


        info['plugin_config'] = _conf

        return json.dumps(info)


    @cherrypy.expose
    def pluginlist_withmetadata_json(self):

        info = {}

        plugin_basedir = os.path.join(self._sh.get_basedir(), 'plugins')

        # onlydirs = [d for d in os.listdir(plugin_basedir) if os.path.isdir(os.path.join(plugin_basedir, d))]
        onlydirs = []
        for f in sorted(os.listdir(plugin_basedir)):
            if not (f[0] in ['.', '_']):
                if os.path.isdir(os.path.join(plugin_basedir, f)):
                    onlydirs.append(f)

        for plgname in sorted(onlydirs):
            filename = os.path.join(plugin_basedir, plgname, 'plugin' + YAML_FILE)
            info[plgname] = shyaml.yaml_load(filename, ordered=True)

        return json.dumps(info)


    @cherrypy.expose
    def pluginlist_json(self):

        info = {}

        plugin_basedir = os.path.join(self._sh.get_basedir(), 'plugins')

        plugins = {}
        for f in sorted(os.listdir(plugin_basedir)):
            if not (f[0] in ['.', '_']):
                if os.path.isdir(os.path.join(plugin_basedir, f)):
                    plugins[f] = {}

        info = plugins

        return json.dumps(info)


    @cherrypy.expose
    def plugin_metadata_json(self, plugin=''):

        info = {}

        plugin_basedir = os.path.join(self._sh.get_basedir(), 'plugins')

        filename = os.path.join(plugin_basedir, plugin, 'plugin' + YAML_FILE)
        info = shyaml.yaml_load(filename, ordered=True)

        return json.dumps(info)

    # -----------------------------------------------------------------------------------

    @cherrypy.expose
    def plugin_set_config_html(self, plugin_section='', config=''):
        """
        Is called by items.html when an item value has been changed

        plugin_set_config.html?plugin_section=' + pluginsection + '&config=' + configstr;
        """
        if config == '':
            self.logger.error("plugin_set_config_html: 'config' not specified")
            return 'false'
        if plugin_section == '':
            self.logger.error("plugin_set_config_html: 'plugin_section' not specified")
            return 'false'

        self.logger.warning("plugin_set_config_html: pluginconfig '{}' set to '{}'".format(plugin_section, config))

        # to do:
        # - load etc/plugin.yaml for round-trip
        config_filename = self.plugins._get_plugin_conf_filename()
        self.logger.warning('Loading config_filename: {}'.format(config_filename))
        plugin_yaml = shyaml.yaml_load_roundtrip(config_filename)
        self.logger.warning('plugin_yaml: {}'.format(plugin_yaml))

        # - remove all entries of the section that don't start with plugin_ (all beside plugin_name)
        self.logger.warning('1: plugin_yaml[{}]: {}'.format(plugin_section, dict(plugin_yaml[plugin_section])))
        key_list = list(plugin_yaml[plugin_section].keys())
        for key in key_list:
            if key != 'plugin_name':
                del plugin_yaml[plugin_section][key]
        self.logger.warning('2: plugin_yaml[{}]: {}'.format(plugin_section, dict(plugin_yaml[plugin_section])))

        # - add all entries to the section which just were received from the admin backend
        self.logger.warning('- {}:'.format(plugin_section))
        config_dict = json.loads(config)

        # change class_path to plugin_name
        if 'class_path' in config_dict.keys():
            if config_dict['class_path'].startswith('plugins.'):
                plugin_yaml[plugin_section]['plugin_name'] = config_dict['class_path'][8:]
                del config_dict['class_path']

        # handle plugin_enabled
        if 'plugin_enabled' in config_dict.keys():
            if str(config_dict['plugin_enabled']).lower() == 'false':
                plugin_yaml[plugin_section]['plugin_enabled'] = False
            else:
                del config_dict['plugin_enabled']

        # save the rest of the parameters to plugin.yaml
        for key in config_dict:
            self.logger.warning('-     {}: {}'.format(key, config_dict[key]))
            plugin_yaml[plugin_section][key] = config_dict[key]
        self.logger.warning('3: plugin_yaml[{}]: {}'.format(plugin_section, dict(plugin_yaml[plugin_section])))

        # - save etc/plugin.yaml
        self.logger.warning('Saving config_filename: {}'.format(config_filename))
        shyaml.yaml_save_roundtrip(config_filename, plugin_yaml, create_backup=True)
        # self.logger.warning("Config-Information not saved to etc/plugin.yaml")


        # item_data = []
        # item = self.items.return_item(item_path)
        # if 'num' in item.type():
        #     if "." in value or "," in value:
        #         value = float(value)
        #     else:
        #         value = int(value)
        # item(value, caller='admin')

        return '{"result": "true"}'

