#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
# Copyright 2016-2020   Martin Sinn                         m.sinn@gmx.de
# Copyright 2016        Christian Straßburg           c.strassburg@gmx.de
# Copyright 2012-2013   Marcus Popp                        marcus@popp.mx
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
#  along with SmartHomeNG. If not, see <http://www.gnu.org/licenses/>.
#########################################################################

import logging
import os
import datetime
import dateutil.parser
import json

from ast import literal_eval
import pickle

from lib.constants import (CACHE_FORMAT, CACHE_JSON, CACHE_PICKLE)

logger = logging.getLogger(__name__)

#####################################################################
# Cast Methods
#####################################################################

def cast_str(value):
    if isinstance(value, str):
        return value
    else:
        raise ValueError


def cast_list(value):
    if isinstance(value, str):
        try:
            value = literal_eval(value)
        except:
            pass
    if isinstance(value, list):
        return value
    else:
        raise ValueError


def cast_dict(value):
    if isinstance(value, str):
        try:
            value = literal_eval(value)
        except:
            pass
    if isinstance(value, dict):
        return value
    else:
        raise ValueError


def cast_foo(value):
    return value


# TODO: Candidate for Utils.to_bool()
# write testcase and replace
# -> should castng be restricted like this or handled exactly like Utils.to_bool()?
#    Example: cast_bool(2) is False, Utils.to_bool(2) is True

def cast_bool(value):
    if type(value) in [bool, int, float]:
        if value in [False, 0]:
            return False
        elif value in [True, 1]:
            return True
        else:
            raise ValueError
    elif type(value) in [str, str]:
        if value.lower() in ['0', 'false', 'no', 'off', '']:
            return False
        elif value.lower() in ['1', 'true', 'yes', 'on']:
            return True
        else:
            raise ValueError
    else:
        raise TypeError


def cast_scene(value):
    return int(value)


def cast_num(value):
    """
    cast a passed value to int or float

    :param value: numeric value to be casted, passed as str, float or int
    :return: numeric value, passed as int or float
    """
    if isinstance(value, str):
        value = value.strip()
    if value == '':
        return 0
    if isinstance(value, float):
        return value
    try:
        return int(value)
    except:
        pass
    try:
        return float(value)
    except:
        pass
    raise ValueError


#####################################################################
# Methods for handling of duration_value strings
#####################################################################

def split_duration_value_string(value, ATTRIB_COMPAT_DEFAULT):
    """
    splits a duration value string into its three components

    components are:
    - time
    - value
    - compat

    :param value: raw attribute string containing duration, value (and compatibility)
    :return: three strings, representing time, value and compatibility attribute
    """
    time, __, value = value.partition('=')
    value, __, compat = value.partition('=')
    time = time.strip()
    value = value.strip()
    # remove quotes, if present
    if value != '' and ((value[0] == "'" and value[-1] == "'") or (value[0] == '"' and value[-1] == '"')):
        value = value[1:-1]
    compat = compat.strip().lower()
    if compat == '':
        compat = ATTRIB_COMPAT_DEFAULT
    return (time, value, compat)


def join_duration_value_string(time, value, compat=''):
    """
    joins a duration value string from its three components

    components are:
    - time
    - value
    - compat

    :param time: time (duration) parrt for the duration_value_string
    :param value: value (duration) parrt for the duration_value_string
    """
    result = str(time)
    if value != '' or compat != '':
        result = result + ' ='
        if value != '':
            result = result + ' ' + value
        if compat != '':
           result = result + ' = ' + compat
    return result


#####################################################################
# Cache Methods
#####################################################################

def json_serialize(obj):
    """
    helper method to convert values to json serializable formats
    """
    import datetime
    if isinstance(obj, datetime.datetime):
        return obj.isoformat()
    if isinstance(obj, datetime.date):
        return obj.isoformat()
    raise TypeError("Type not serializable")

def json_obj_hook(json_dict):
    """
    helper method for json deserialization
    """
    import dateutil
    for (key, value) in json_dict.items():
        try:
            json_dict[key] = dateutil.parser.parse(value)
        except Exception as e :
            pass
    return json_dict


def cache_read(filename, tz, cformat=CACHE_FORMAT):
    ts = os.path.getmtime(filename)
    dt = datetime.datetime.fromtimestamp(ts, tz)
    value = None

    if cformat == CACHE_PICKLE:
        with open(filename, 'rb') as f:
            value = pickle.load(f)

    elif cformat == CACHE_JSON:
        with open(filename, 'r', encoding='UTF-8') as f:
            value = json.load(f, object_hook=json_obj_hook)

    return (dt, value)

def cache_write(filename, value, cformat=CACHE_FORMAT):
    try:
        if cformat == CACHE_PICKLE:
            with open(filename, 'wb') as f:
                pickle.dump(value,f)

        elif cformat == CACHE_JSON:
            with open(filename, 'w', encoding='UTF-8') as f:
                json.dump(value,f, default=json_serialize)
    except IOError:
        logger.warning("Could not write to {}".format(filename))


#####################################################################
# Fade Method
#####################################################################
def fadejob(item, dest, step, delta):
    if item._fading:
        return
    else:
        item._fading = True
    if item._value < dest:
        while (item._value + step) < dest and item._fading:
            item(item._value + step, 'fader')
            item._lock.acquire()
            item._lock.wait(delta)
            item._lock.release()
    else:
        while (item._value - step) > dest and item._fading:
            item(item._value - step, 'fader')
            item._lock.acquire()
            item._lock.wait(delta)
            item._lock.release()
    if item._fading:
        item._fading = False
        item(dest, 'Fader')
