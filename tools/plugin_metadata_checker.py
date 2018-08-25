#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
# Copyright 2017-       Martin Sinn                         m.sinn@gmx.de
#########################################################################
#  This file is part of SmartHomeNG
#  https://github.com/smarthomeNG/smarthome
#  http://knx-user-forum.de/
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
#  along with SmartHomeNG. If not, see <http://www.gnu.org/licenses/>.
#########################################################################


"""
This script creates a list showing the care status of the metadata file
of the plugins on the .../plugins folder.

The result is printed to stdout
"""

import os
import argparse

print('')
print(os.path.basename(__file__) + ' - Checks the care status of plugin metadata')
print('')
start_dir = os.getcwd()

import sys
# find lib directory and import lib/item_conversion
os.chdir(os.path.dirname(os.path.abspath(__file__)))

sys.path.insert(0, '..')
sys.path.insert(0, '../lib')
import shyaml



type_unclassified = 'unclassified'
plugin_sections = [ ['gateway', 'Gateway', 'Gateway'],
                    ['interface', 'Interface', 'Interface'],
                    ['protocol', 'Protocol', 'Protokoll'],
                    ['system', 'System', 'System'],
                    [type_unclassified, 'Non classified', 'nicht klassifizierte'],
                    ['web', 'Web/Cloud', 'Web/Cloud']
                  ]


# ==================================================================================
#   Functions of the tool
#

def html_escape(str):
#    str = str.rstrip().replace('<', '&lt;').replace('>', '&gt;')
#    str = str.rstrip().replace('(', '&#40;').replace(')', '&#41;')
#    str = str.rstrip().replace("'", '&#39;').replace('"', '&quot;')
    html = str.rstrip().replace("ä", '&auml;').replace("ö", '&ouml;').replace("ü", '&uuml;')
    return html


def get_local_pluginlist():
    plglist = os.listdir('.')

    for entry in plglist:
        if entry[0] in ['.' ,'_'] or entry == 'deprecated_plugins':
            plglist.remove(entry)
    for entry in plglist:
        if entry[0] in ['.' ,'_']:
            plglist.remove(entry)
    for entry in plglist:
        if entry[0] in ['.' ,'_']:
            plglist.remove(entry)
    return plglist


def get_description(section_dict, maxlen=70, lang='en', textkey='description'):
    desc = ''
    if lang == 'en':
        lang2 = 'de'
    else:
        lang2 = 'en'
    try:
        desc = section_dict[textkey].get(lang, '')
    except:
        pass
    if desc == '':
        try:
            desc = section_dict[textkey].get(lang2, '')
        except:
            pass

    import textwrap
    lines = textwrap.wrap(desc, maxlen, break_long_words=False)
    if lines == []:
        lines.append('')
    return lines


def get_maintainer(section_dict, maxlen=20):
    maint = section_dict.get('maintainer', '')

    import textwrap
    lines = textwrap.wrap(maint, maxlen, break_long_words=False)
    if lines == []:
        lines.append('')
    return lines


def get_tester(section_dict, maxlen=20):
    maint = section_dict.get('tester', '')

    import textwrap
    try:
        lines = textwrap.wrap(str(maint), maxlen, break_long_words=False)
    except:
        print()
        print("section_dict: {}, maint: {}".format(section_dict, maint))
        print()
    if lines == []:
        lines.append('')
    return lines


def get_docurl(section_dict, maxlen=70):
    maint = section_dict.get('documentation', '')

    import textwrap
    lines = textwrap.wrap(maint, maxlen, break_long_words=True)
    if lines == []:
        lines.append('')
    return lines


def get_supurl(section_dict, maxlen=70):
    maint = section_dict.get('support', '')

    import textwrap
    lines = textwrap.wrap(maint, maxlen, break_long_words=True)
    if lines == []:
        lines.append('')
    return lines


def get_plugintype(plgName):

    fn = './'+plgName+'/__init__.py'
    try:
        with open(fn, "r") as myfile:
            code = myfile.read()
    except:
        return 'None' \
               ''
    if code.find('SmartPlugin') == -1:
        return 'Classic'
    return 'Smart'



def readMetadata(metaplugin, plugins_local):

    metafile = metaplugin + '/plugin.yaml'
    plg_dict = {}
    if metaplugin in plugins_local:  # pluginsyaml_local
        if os.path.isfile(metafile):
            plugin_yaml = shyaml.yaml_load(metafile)
        else:
            plugin_yaml = {}
    return plugin_yaml


def print_formatted(plugin, plgvers, plgtype, plgGlobal, plgParams, plgAttr, comment=''):
    print('{plugin:<15.15} {plgvers:<8.8}{plgtype:<8.8} {plgGlobal:<7.7} {plgParams:<8.8} {plgAttr:<8.8} {comment:<20.20}'.format(plugin=plugin,
                                                                                                   plgvers=plgvers,
                                                                                                   plgtype=plgtype,
                                                                                                   plgGlobal=plgGlobal,
                                                                                                   plgParams=plgParams,
                                                                                                   plgAttr=plgAttr,
                                                                                                   comment=comment))


def list_plugins(option):

    option = option.strip().lower()

    # change the working diractory to the directory from which the converter is loaded (../tools)
    os.chdir(os.path.dirname(os.path.abspath(os.path.basename(__file__))))

    plugindirectory = '../plugins'
    pluginabsdirectory = os.path.abspath(plugindirectory)

    os.chdir(pluginabsdirectory)

    plugin_types = []
    for pl in plugin_sections:
        plugin_types.append(pl[0])

    plugins_local = get_local_pluginlist()

    header_displayed = False;
    for plg in sorted(plugins_local):
        version = '-'
#        sectionPlg = '-'
        sectionParam = '-'
        sectionIAttr = '-'
        comment = ''
        metadata = readMetadata(plg, plugins_local)
        if metadata.get('plugin', None) == None:
            sectionPlg = 'No'
        else:
            sectionPlg = 'Yes'
            version = metadata['plugin'].get('version', '-')
        plgtype = get_plugintype(plg)
        if plgtype == 'Smart':
            if version == '-':
                version = '?'
#            sectionParam = '?'
#            sectionIAttr = '?'

            if metadata.get('parameters', None) == None:
                sectionParam = 'No'
            elif metadata.get('parameters', None) == 'NONE':
                sectionParam = 'Yes (0)'
            else:
                sectionParam = 'Yes'
                sectionParam += ' (' + str(len(metadata['parameters'])) + ')'

            if metadata.get('item_attributes', None) == None:
                sectionIAttr = 'No'
            else:
                sectionIAttr = 'Yes'
                sectionIAttr += ' (' + str(len(metadata['item_attributes'])) + ')'

        if (option == 'all') or (option == plgtype.lower()) or \
           (option == 'inc' and (sectionPlg == 'no' or sectionParam == 'No' or sectionIAttr == 'No')):
            if not header_displayed:
                ul = '-------------------------------'
                print_formatted('', '', '', 'Plugin', 'Plugin', 'Item')
                print_formatted('Plugin', 'Version', 'Type', 'Info', 'Params', 'Attrib.')
                print_formatted(ul, ul, ul, ul, ul, ul)
                header_displayed = True
            print_formatted(plg, version, plgtype, sectionPlg, sectionParam, sectionIAttr, comment)
    print()



# ==================================================================================
#   Main Routine of the tool
#

if __name__ == '__main__':

    #    print ('Number of arguments:', len(sys.argv), 'arguments.')
    #    print ('Argument List:', str(sys.argv))

#    display_help()

#    list_plugins('classic')


#    parser = argparse.ArgumentParser(description='Checks the care status of plugin metadata')
    parser = argparse.ArgumentParser(add_help=False)
    group = parser.add_mutually_exclusive_group()
    group.add_argument('-la', '--list_all', action="store_true", default=False, help='list plugin information of all plugins')
    group.add_argument('-lc', '--list_classic', action="store_true", default=False, help='list plugin information of classic plugins')
    group.add_argument('-ls', '--list_smart', action="store_true", default=False, help='list plugin information of smart plugins')
    group.add_argument('-li', '--list_incomplete', action="store_true", default=False, help='list plugin information of plugins with incomplete metadata')
#    group.add_argument('-c', dest='check', help='check the metadata of a plugin')
#    group.add_argument('-d', dest='display', help='display the metadata of a plugin')
    args = parser.parse_args()
    try:
        if args.list_all:
            list_plugins('all')
        elif args.list_classic:
            list_plugins('classic')
        elif args.list_smart:
            list_plugins('smart')
        elif args.list_incomplete:
            list_plugins('inc')
        else:
            parser.print_help()
            print()
    except ValueError as e:
        print("")
        print(e)
        print("")
        parser.print_help()
        print()
        exit(1)
