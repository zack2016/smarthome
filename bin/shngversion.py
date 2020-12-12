#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
# Copyright 2017-     Martin Sinn                           m.sinn@gmx.de
#########################################################################
#  This file is part of SmartHomeNG.
#  https://github.com/smarthomeNG/smarthome
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

import os
import sys
import subprocess

sys.path.append('..')

import plugins.__init__ as plugin_vers


# Update auf 1.3d   wg. neuer item features on_update, on_change
# Update auf 1.3e   wg. neuer logic features for visu_websocket
# Update auf 1.3f   wg. Vorbereitung Release Candidate

# Update auf 1.4a   wg. Kennzeichnung des Stands als "nach dem v1.4 Release"
# Update auf 1.4b   wg. Kennzeichnung des Stands als "nach dem v1.4.1 Release"
# Update auf 1.4.2
# Update auf 1.4c   wg. Kennzeichnung des Stands als "nach dem v1.4.2 Release"
# Update auf 1.4d   wg. SmartPlugin Anpassung (get_configname())"
# Update auf 1.4e   wg. lib.item Anpassung (trigger_condition)"
# Update auf 1.5    wg. Release"
# Update auf 1.5.1  wg. Hotfix Release
# Update auf 1.5a   wg. Changes in lib.shtime
# Update auf 1.5b   wg. Einführung von lib.shpypi
# Update auf 1.5c   wg. Einführung von bin.shngversion.get_shng_branch()
# Update auf 1.5d   wg. Einführung von Item Strukturen
# Update auf 1.5e   wg. Einführung von Item Property 'attributes'

# Update auf 1.6    wg. Release
# Update auf 1.6a   wg. Kennzeichnung des Stands als "nach dem v1.6 Release"
# Update auf 1.6b   wg. ÄNnderung bei RelativsPath Auflösung & Doku Änderungen

# Update auf 1.7    wg. Release
# Update auf 1.7a   wg. Kennzeichnung des Stands als "nach dem v1.7 Release"

# Update auf 1.7.1  wg. Release
# Update auf 1.7.1a wg. Kennzeichnung des Stands als "nach dem v1.7.1 Release"

# Update auf 1.7.2  wg. Release
# Update auf 1.7.2a wg. Kennzeichnung des Stands als "nach dem v1.7.2 Release"
# Update auf 1.7.2b wg. Einführung von valid_list_ci in den Metadaten
# Update auf 1.7.2c wg. SmartPlugin Erweiterung: Update etc/plugin.yaml section


shNG_version = '1.7.2c'
shNG_branch = 'develop'

# ---------------------------------------------------------------------------------
FileBASE = None

def _get_git_data(sub='', printout=False):
    global FileBASE
    if FileBASE is None:
        FileBASE = os.path.sep.join(os.path.realpath(__file__).split(os.path.sep)[:-2])
    BASE = FileBASE
    if sub != '':
        BASE = os.path.join(FileBASE,sub)
    commit = '0'
    branch = 'manual'
    describe = ''
    commit_short = ''
    if BASE is not None:
        try:
            os.chdir(BASE)
            branch = subprocess.check_output(['git', 'rev-parse', '--abbrev-ref', 'HEAD'], stderr=subprocess.STDOUT).decode().strip('\n')
            commit = subprocess.check_output(['git', 'rev-parse', 'HEAD'], stderr=subprocess.STDOUT).decode().strip('\n')
            commit_short = subprocess.check_output(['git', 'rev-parse', '--short', 'HEAD'], stderr=subprocess.STDOUT).decode().strip('\n')
            describe = subprocess.check_output(['git', 'describe', '--all'], stderr=subprocess.STDOUT).decode().strip('\n')
        except Exception as e:
            pass
    if printout:
        print()
        print("_get_git_data: BASE={}".format(BASE))
        print("- describe: {}".format(describe))
        print("- commit_short : {}".format(commit_short))
        print("- commit .: {}".format(commit))
        print("- branch .: {}".format(branch))
        print()
    return commit, commit_short, branch, describe

# ---------------------------------------------------------------------------------

def get_shng_main_version():
    return shNG_version

def get_shng_version():
    commit, commit_short, branch, describe = _get_git_data()
    VERSION = get_shng_main_version()
    if branch == 'master':
        VERSION += '.'+branch+' ('+commit_short+')'
    elif branch == 'manual':
        VERSION += '.'+shNG_branch+' ('+branch+')'
    else:
        VERSION += '.'+commit_short+'.'+branch
    return VERSION

def get_shng_branch():
    commit, commit_short, branch, describe = _get_git_data()
    return branch

def get_shng_description():
    commit, commit_short, branch, describe = _get_git_data()
    return describe


def get_plugins_version():
    commit, commit_short, branch, describe = _get_git_data('plugins')
    VERSION = get_shng_main_version()
    try:
        PLUGINS_VERSION = plugin_vers.plugin_release()
    except:
        PLUGINS_VERSION = VERSION
    try:
        PLUGINS_SOURCE_BRANCH = plugin_vers.plugin_branch()
    except:
        PLUGINS_SOURCE_BRANCH = ''

    if branch == 'master':
        VERSION = PLUGINS_VERSION
        VERSION += '.'+branch+' ('+commit_short+')'
    elif branch == 'manual':
        VERSION = PLUGINS_VERSION
        if PLUGINS_SOURCE_BRANCH != '':
            VERSION += '.'+PLUGINS_SOURCE_BRANCH
        VERSION += ' ('+branch+')'
    else:
        VERSION = PLUGINS_VERSION
        VERSION += '.'+commit_short+'.'+branch
    return VERSION


def get_plugins_branch():
    commit, commit_short, branch, describe = _get_git_data('plugins')
    return branch

def get_plugins_description():
    commit, commit_short, branch, describe = _get_git_data('plugins')
    return describe

def get_shng_docversion():
    commit, commit_short, branch, describe = _get_git_data()
    VERSION = get_shng_main_version()
    if branch != 'master':
        VERSION += ' '+branch
    return VERSION

if __name__ == '__main__':

    print()
    print("get_shng_main_version:", get_shng_main_version())
    print()
    print("get_shng_version     :", get_shng_version())
    print(" - description       :", get_shng_description())
    commit, commit_short, branch, describe = _get_git_data()
    # print(" - get_shng_git      :", commit+'.'+branch)
    print()
    print("get_plugins_version  :", get_plugins_version())
    print(" - description       :", get_plugins_description())
    commit, commit_short, branch, describe = _get_git_data('plugins')
    # print(" - get_plugins_git   :", commit+'.'+branch)
    print()

