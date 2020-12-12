#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
# Copyright 2016-2018   Martin Sinn                         m.sinn@gmx.de
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


"""
This library implements items in SmartHomeNG.

The main class ``Items`` implements the handling for all items. This class has a  static method to get a handle to the
instance of the Items class, that is created during initialization of SmartHomeNG. This method implements a way to
access the API for handling items without having to juggle through the object hierarchy of the running SmartHomeNG.

This API enables plugins and logics to access the details of the items initialized in SmartHomeNG.

Each item is represented by an instance of the class ``Item``.

The methods of the class Items implement the API for items.
They can be used the following way: To call eg. **get_toplevel_items()**, use the following syntax:

.. code-block:: python

    from lib.item import Items
    sh_items = Items.get_instance()

    # to access a method (eg. get_toplevel_items()):
    tl_items = sh_items.get_toplevel_items()


:Note: Do not use the functions or variables of the main smarthome object any more. They are deprecated. Use the methods of the class **Items** instead.

:Note: This library is part of the core of SmartHomeNG. Regular plugins should not need to use this API.  It is manily implemented for plugins near to the core like **backend** and the core itself!

"""
import copy
import datetime
import dateutil.parser
import time             # for calls to time in eval
import logging
import collections
import os
import re
import pickle
import threading
import math             # for calls to math in eval
from math import *
import json
from ast import literal_eval
import inspect

from lib.plugin import Plugins
import lib.shyaml as shyaml
from lib.shtime import Shtime

import lib.utils
from lib.constants import (ITEM_DEFAULTS, FOO, KEY_ENFORCE_UPDATES, KEY_ENFORCE_CHANGE, KEY_CACHE, KEY_CYCLE, KEY_CRONTAB, KEY_EVAL,
                           KEY_EVAL_TRIGGER, KEY_TRIGGER, KEY_CONDITION, KEY_NAME, KEY_TYPE, KEY_STRUCT,
                           KEY_VALUE, KEY_INITVALUE, PLUGIN_PARSE_ITEM, KEY_AUTOTIMER, KEY_ON_UPDATE, KEY_ON_CHANGE,
                           KEY_LOG_CHANGE, KEY_THRESHOLD, CACHE_FORMAT, CACHE_JSON, CACHE_PICKLE,
                           KEY_ATTRIB_COMPAT, ATTRIB_COMPAT_V12, ATTRIB_COMPAT_LATEST)


ATTRIB_COMPAT_DEFAULT_FALLBACK = ATTRIB_COMPAT_V12
ATTRIB_COMPAT_DEFAULT = ''


logger = logging.getLogger(__name__)


_items_instance = None    # Pointer to the initialized instance of the Items class (for use by static methods)



class Items():
    """
    Items loader class. (Item-methods from bin/smarthome.py are moved here.)

    - An instance is created during initialization by bin/smarthome.py
    - There should be only one instance of this class. So: Don't create another instance

    :param smarthome: Instance of the smarthome master-object
    :type smarthome: object
    """

    __items = []                # list with the paths of all items that are defined
    __item_dict = {}            # dict with all the items that are defined in the form: {"<item-path>": "<item-object>", ...}

    _children = []              # List of top level items

    _struct_definitions = collections.OrderedDict()    # definitions of item structures


    def __init__(self, smarthome):
        self._sh = smarthome

        global _items_instance
        if _items_instance is not None:
            import inspect
            curframe = inspect.currentframe()
            calframe = inspect.getouterframes(curframe, 4)
            logger.critical("A second 'items' object has been created. There should only be ONE instance of class 'Items'!!! Called from: {} ({})".format(calframe[1][1], calframe[1][3]))

        _items_instance = self


    # -----------------------------------------------------------------------------------------
    #   Following (static) method of the class Items implement the API for Items in SmartHomeNG
    # -----------------------------------------------------------------------------------------

    @staticmethod
    def get_instance():
        """
        Returns the instance of the Items class, to be used to access the items-api

        Use it the following way to access the api:

        .. code-block:: python

            from lib.item import Items
            items = Items.get_instance()

            # to access a method (eg. return_items()):
            items.return_items()


        :return: items instance
        :rtype: object
        """
        return _items_instance


    # -----------------------------------------------------------------------------------------
    #   Following methods handle structs
    # -----------------------------------------------------------------------------------------

    struct_merge_lists = True


    def merge_structlists(self, l1, l2, key=''):
        if not self.struct_merge_lists:
            logger.warning("merge_structlists: Not merging lists, key '{}' value '{}' is ignored'".format(key, l2))
            return l1       # First wins
        else:
            if not isinstance(l1, list):
                l1 = [l1]
            if not isinstance(l2, list):
                l2 = [l2]
            return l1 + l2


    def add_struct_definition(self, plugin_name, struct_name, struct):
        """
        Add a struct definition

        called when reading in item structs from ../etc/struct.yaml
        or from lib.plugin when reading in plugin-metadata

        :param plugin_name:
        :param struct_name:
        :param struct:
        :return:
        """
        if plugin_name == '':
            name = struct_name
        else:
            name = plugin_name + '.' + struct_name

        logger.info("add_struct_definition: struct '{}' = {}".format(name, struct))
        self._struct_definitions[name] = struct
        return


    def merge(self, source, destination, source_name='', dest_name=''):
        '''
        Merges an OrderedDict Tree into another one

        :param source: source tree to merge into another one
        :param destination: destination tree to merge into
        :type source: OrderedDict
        :type destination: OrderedDict

        :return: Merged configuration tree
        :rtype: OrderedDict

        :Example: Run me with nosetests --with-doctest file.py

        .. code-block:: python

            >>> a = { 'first' : { 'all_rows' : { 'pass' : 'dog', 'number' : '1' } } }
            >>> b = { 'first' : { 'all_rows' : { 'fail' : 'cat', 'number' : '5' } } }
            >>> merge(b, a) == { 'first' : { 'all_rows' : { 'pass' : 'dog', 'fail' : 'cat', 'number' : '5' } } }
            True

        '''
        for key, value in source.items():
            if isinstance(value, collections.OrderedDict):
                # get node or create one
                node = destination.setdefault(key, collections.OrderedDict())
                if node == 'None':
                    destination[key] = value
                else:
                    self.merge(value, node, source_name, dest_name)
            else:
                if isinstance(value, list) or isinstance(destination.get(key, None), list):
                    if destination.get(key, None) is None:
                        destination[key] = value
                    else:
                        destination[key] = self.merge_structlists(destination[key], value, key)
                else:
                    # convert to string and remove newlines from multiline attributes
                    if destination.get(key, None) is None:
                        destination[key] = str(value).replace('\n', '')
        return destination


    def resolve_structs(self, struct, struct_name, substruct_names):
        """
        Resolve a struct reference

        if the struct definition that is to be inserted contains a struct reference, it is resolved first

        :param struct:          struct that contains a struct reference
        :param substruct:       sub-struct definition that shall be inserted
        :param struct_name:     name of the struct that contains a struct reference
        :param substruct_name:  name of the sub-struct definition that shall be inserted
        """

        logger.info("resolve_structs: struct_name='{}', substruct_names='{}'".format(struct_name, substruct_names))

        new_struct = collections.OrderedDict()
        structentry_list = list(struct.keys())
        for structentry in structentry_list:
            # copy all existing attributes and sub-entrys of the struct
            if new_struct.get(structentry, None) is None:
                logger.info("resolve_struct: - copy attribute structentry='{}', value='{}'".format(structentry, struct[structentry]))
                new_struct[structentry] = copy.deepcopy(struct[structentry])
            else:
                logger.debug("resolve_struct: - key='{}', value is ignored'".format(structentry))
            if structentry == 'struct':
                for substruct_name in substruct_names:
                    # for every substruct
                    logger.info("resolve_struct: ->substruct_name='{}'".format(substruct_name))
                    substruct = self._struct_definitions.get(substruct_name, None)
                    # merge in the sub-struct
                    for key in substruct:
                        if new_struct.get(key, None) is None:
                            logger.info("resolve_struct: - key='{}', value='{}' -> new_struct='{}'".format(key, substruct[key], new_struct))
                            new_struct[key] = copy.deepcopy(substruct[key])
                        elif isinstance(new_struct.get(key, None), dict):
                            logger.info("resolve_struct: - merge key='{}', value='{}' -> new_struct='{}'".format(key, substruct[key], new_struct))
                            self.merge(substruct[key], new_struct[key], key, struct_name+'.'+key)
                        elif isinstance(new_struct.get(key, None), list) or isinstance(substruct.get(key, None), list):
                            new_struct[key] = self.merge_structlists(new_struct[key], substruct[key], key)
                        else:
                            logger.debug("resolve_struct: - key='{}', value '{}' is ignored'".format(key, substruct[key]))

        return new_struct


    def fill_nested_structs(self):
        """
        Resolve struct references in structs and fill in the content of the struct

        :return:
        """
        for struct_name in self._struct_definitions:
            # for every defined struct
            struct = self._struct_definitions[struct_name]
            substruct_names = struct.get('struct', None)
            if substruct_names is not None:
                # stuct has a sub-struct
                if isinstance(substruct_names, str):
                    substruct_names = [substruct_names]
                struct = self.resolve_structs(struct, struct_name, substruct_names)
                self._struct_definitions[struct_name] = struct


    def return_struct_definitions(self):
        """
        Return all loaded structure template definitions

        :return:
        :rtype: dict
        """
        return self._struct_definitions


    def load_itemdefinitions(self, env_dir, items_dir, etc_dir, plugins_dir):
        """
        Load item definitions

        This method is called during initialization of SmartHomeNG to initialize the item tree.
        For that, it loads the item definitions from **../items** directory through calling the function **parse_itemsdir()**
        from **lib.config**

        :param env_dir: path to the directory containing the core's environment item definition files
        :param items_dir: path to the directory containing the user's item definition files
        :param etc_dir: path to the directory containing the user's configuration files (only used for 'struct' support)
        :param plugins_dir: path to the directory containing the plugins (only used for 'struct' support)
        :type env_dir: str
        :type items_dir: str
        :type etc_dir: str
        :type plugins_dir: str
        """

        # --------------------------------------------------------------------
        # Read in all struct definitions before reading item definitions
        #
        # structs are merged into the item tree in lib.config
        #
        # structs are read in from metadata file of plugins while loading plugins
        # and from ../etc/struct.yaml
        #
        # Read in item structs from ../etc/struct.yaml
        struct_definitions = shyaml.yaml_load(os.path.join(etc_dir, 'struct.yaml'), ordered=True, ignore_notfound=True)
        if struct_definitions is not None:
            if isinstance(struct_definitions, collections.OrderedDict):
                for key in struct_definitions:
                    self.add_struct_definition('', key, struct_definitions[key])
            else:
                logger.error("load_itemdefinitions(): Invalid content in struct.yaml: struct_definitions = '{}'".format(struct_definitions))

        self.fill_nested_structs()

        # for Testing: Save structure of joined item structs
        logger.warning("load_itemdefinitions(): For testing the joined item structs are saved to {}".format(os.path.join(etc_dir, 'structs_joined.yaml')))
        shyaml.yaml_save(os.path.join(etc_dir, 'structs_joined.yaml'), self._struct_definitions)

        # --------------------------------------------------------------------
        # Read in item definitions
        #
        item_conf = None
        item_conf = lib.config.parse_itemsdir(env_dir, item_conf)
        item_conf = lib.config.parse_itemsdir(items_dir, item_conf, addfilenames=True, struct_dict=self._struct_definitions)

        for attr, value in item_conf.items():
            if isinstance(value, dict):
                child_path = attr
                try:
                    # (smarthome, parent, path, config):
                    child = Item(self._sh, self, child_path, value)
                except Exception as e:
                    logger.error("load_itemdefinitions: Item {}: problem creating: ()".format(child_path, e))
                else:
                    vars(self)[attr] = child
                    vars(self._sh)[attr] = child
                    self.add_item(child_path, child)
                    self._children.append(child)
        del(item_conf)  # clean up

        # --------------------------------------------------------------------
        # prepare loaded items for run phase of SmartHomeNG
        #
        for item in self.return_items():
            item._init_prerun()
        # starting schedulers (for crontab and cycle attributes) moved to the end of the initialization in SmartHomeNG v1.6
        for item in self.return_items():
            item._init_start_scheduler()
        for item in self.return_items():
            item._init_run()

#        self.item_count = len(self.__items)
#        self._sh.item_count = self.item_count()


    def add_item(self, path, item):
        """
        Function to to add an item to the dictionary of items.
        If the path does not exist, it is created

        :param path: Path of the item
        :param item: The item itself
        :type path: str
        :type item: object
        """

        if path not in self.__items:
            self.__items.append(path)
        print("\nitems.add_item: path={}, item={} -> {}".format(path, item, self.__items))
        self.__item_dict[path] = item

    # aus bin/smarthome.py
    #    def __iter__(self):
    #        for child in self.__children:
    #            yield child

    def get_toplevel_items(self):
        """
        Returns a list with all items defined at the top level

        :return: items defined at the top level
        :rtype: list
        """
        for child in self._children:
            yield child

    # aus lib.logic.py
    #    def __iter__(self):
    #        for logic in self._logics:
    #            yield logic



    def return_item(self, string):
        """
        Function to return the item for a given path

        :param string: Path of the item to return
        :type string: str

        :return: Item
        :rtype: object
        """

        if string in self.__items:
            return self.__item_dict[string]


    def return_items(self):
        """
        Function to return a list with all defined items

        :return: List of all items
        :rtype: list
        """

        for item in self.__items:
            yield self.__item_dict[item]


    def match_items(self, regex):
        """
        Function to match items against a regular expression

        :param regex: Regular expression to match items against
        :type regex: str

        :return: List of matching items
        :rtype: list
        """

        regex, __, attr = regex.partition(':')
        regex = regex.replace('.', '\.').replace('*', '.*') + '$'
        regex = re.compile(regex)
        attr, __, val = attr.partition('[')
        val = val.rstrip(']')
        if attr != '' and val != '':
            return [self.__item_dict[item] for item in self.__items if regex.match(item) and attr in self.__item_dict[item].conf and ((type(self.__item_dict[item].conf[attr]) in [list,dict] and val in self.__item_dict[item].conf[attr]) or (val == self.__item_dict[item].conf[attr]))]
        elif attr != '':
            return [self.__item_dict[item] for item in self.__items if regex.match(item) and attr in self.__item_dict[item].conf]
        else:
            return [self.__item_dict[item] for item in self.__items if regex.match(item)]


    def _attribute_find(self, attr, attr_list):
        """
        Find an attribute in an attribute list

        :param attr:
        :param attr_list:
        :return:

        examples:
            attr_list = ['avm_identifier' , 'avm_data_type@willy_tel', 'avm_wlan_index', 'visu_acl']

            attr                          result
            ---_                          ------
            'willy_tel'                -> False
            '@willy_tel'               -> True
            '@fritz_wz'                -> False

            'avm_data_type@willy_tel'  -> True
            'avm_data_type@fritz_wz'   -> False
            'avm_data_type'            -> False
            'avm_data_type@'           -> True

            'avm_wlan_index'           -> True
            'avm_wlan_index@'          -> True

            'visu_acl'                 -> True
            '@visu_acl'                -> False

        """
        result = False
        if attr.endswith('@'):
            result = any(s for s in attr_list if s.startswith(attr))
            if not result:
                result = attr[:-1] in attr_list
        elif attr.startswith('@'):
            result = any(s for s in attr_list if s.endswith(attr))
        else:
            result = attr in attr_list
        return result


    def find_items(self, conf):
        """
        Function to find items that match the specified configuration

        :param conf: Configuration to look for
        :type conf: str

        :return: list of matching items
        :rtype: list
        """

        for item in self.__items:
            # if conf in self.__item_dict[item].conf:
            #     yield self.__item_dict[item]
            if self._attribute_find(conf, self.return_item(item).property.attributes):
                yield self.__item_dict[item]


    def find_children(self, parent, conf):
        """
        Function to find children with the specified configuration

        :param parent: parent item on which to start the search
        :param conf: Configuration to look for
        :type parent: str
        :type conf: str

        :return: list or matching child-items
        :rtype: list
        """

        children = []
        for item in parent:
            # if conf in item.conf:
            #     children.append(item)
            if self._attribute_find(conf, item.property.attributes):
                children.append(item)
            children += self.find_children(item, conf)
        return children


    def item_count(self):
        """
        Return the number of defined items

        :return: number of items
        :rtype: int
        """
        return len(self.__items)


    def stop(self, signum=None, frame=None):
        """
        Stop what all items are doing

        At the moment, it stops fading of all items
        """
        for item in self.__items:
            self.__item_dict[item]._fading = False




#####################################################################
# Item Class
#####################################################################

"""
The class ``Item`` implements the methods and attributes of an item. Each item is represented by an instance of the class ``Item``.
"""

class Item():
    """
    Class from which item objects are created

    The class ``Item`` implements the methods and attributes of an item. Each item is represented by an instance
    of the class ``Item``. For an item to be valid and usable, it has to be part of the item tree, which is
    maintained by an object of class ``Items``.

    This class is used by the method ```load_itemdefinitions()`` of the **Items** object.
    """

    _itemname_prefix = 'items.'     # prefix for scheduler names

    def __init__(self, smarthome, parent, path, config):
        self._sh = smarthome
        self._use_conditional_triggers = False
        try:
            if self._sh._use_conditional_triggers.lower() == 'true':
                self._use_conditional_triggers = True
        except: pass

        self.plugins = Plugins.get_instance()
        self.shtime = Shtime.get_instance()

        self._filename = None
        self._autotimer = False
        self._cache = False
        self.cast = _cast_bool
        self.__changed_by = 'Init:None'
        self.__updated_by = 'Init:None'
        self.__children = []
        self.conf = {}
        self._crontab = None
        self._cycle = None
        self._enforce_updates = False
        self._enforce_change = False
        self._eval = None				    # -> KEY_EVAL
        self._eval_unexpanded = ''
        self._eval_trigger = False
        self._trigger = False
        self._trigger_unexpanded = []
        self._trigger_condition_raw = []
        self._trigger_condition = None
        self._on_update = None				# -> KEY_ON_UPDATE eval expression
        self._on_change = None				# -> KEY_ON_CHANGE eval expression
        self._on_update_dest_var = None		# -> KEY_ON_UPDATE destination var
        self._on_change_dest_var = None		# -> KEY_ON_CHANGE destination var
        self._on_update_unexpanded = [] 	# -> KEY_ON_UPDATE eval expression (with unexpanded item references)
        self._on_change_unexpanded = [] 	# -> KEY_ON_CHANGE eval expression (with unexpanded item references)
        self._on_update_dest_var_unexp = []	# -> KEY_ON_UPDATE destination var (with unexpanded item reference)
        self._on_change_dest_var_unexp = []	# -> KEY_ON_CHANGE destination var (with unexpanded item reference)
        self._log_change = None
        self._log_change_logger = None
        self._fading = False
        self._items_to_trigger = []
        self.__last_change = self.shtime.now()
        self.__last_update = self.shtime.now()
        self._lock = threading.Condition()
        self.__logics_to_trigger = []
        self._name = path
        self.__prev_change = self.shtime.now()
        self.__prev_update = self.shtime.now()
        self.__methods_to_trigger = []
        self.__parent = parent
        self._path = path
        self._sh = smarthome
        self._threshold = False
        self._threshold_data = [0,0,False]
        self._type = None
        self._struct = None
        self._value = None
        self.__last_value = None
        self.__prev_value = None

        self.property = self.Property(self)
        # history
        # TODO: create history Arrays for some values (value, last_change, last_update  (usage: multiklick,...)
        # self.__history = [None, None, None, None, None]
        #
        # def getValue(num):
        #    return (str(self.__history[(num - 1)]))
        #
        # def addValue(avalue):
        #    self.__history.append(avalue)
        #    if len(self.__history) > 5:
        #        self.__history.pop(0)
        #
        if hasattr(smarthome, '_item_change_log'):
            self._change_logger = logger.info
        else:
            self._change_logger = logger.debug
        #############################################################
        # Initialize attribute assignment compatibility
        #############################################################
        global ATTRIB_COMPAT_DEFAULT
        if ATTRIB_COMPAT_DEFAULT == '':
            if hasattr(smarthome, '_'+KEY_ATTRIB_COMPAT):
                config_attrib = getattr(smarthome,'_'+KEY_ATTRIB_COMPAT)
                if str(config_attrib) in [ATTRIB_COMPAT_V12, ATTRIB_COMPAT_LATEST]:
                    logger.info("Global configuration: '{}' = '{}'.".format(KEY_ATTRIB_COMPAT, str(config_attrib)))
                    ATTRIB_COMPAT_DEFAULT = config_attrib
                else:
                    logger.warning("Global configuration: '{}' has invalid value '{}'.".format(KEY_ATTRIB_COMPAT, str(config_attrib)))
            if ATTRIB_COMPAT_DEFAULT == '':
                ATTRIB_COMPAT_DEFAULT = ATTRIB_COMPAT_DEFAULT_FALLBACK
        #############################################################
        # Item Attributes
        #############################################################
        for attr, value in config.items():
            if not isinstance(value, dict):
                if attr in [KEY_CYCLE, KEY_NAME, KEY_TYPE, KEY_STRUCT, KEY_VALUE, KEY_INITVALUE]:
                    if attr == KEY_INITVALUE:
                        attr = KEY_VALUE
                    setattr(self, '_' + attr, value)
                elif attr in [KEY_EVAL]:
                    self._process_eval(value)
                elif attr in [KEY_CACHE, KEY_ENFORCE_UPDATES, KEY_ENFORCE_CHANGE]:  # cast to bool
                    try:
                        setattr(self, '_' + attr, _cast_bool(value))
                    except:
                        logger.warning("Item '{0}': problem parsing '{1}'.".format(self._path, attr))
                        continue
                elif attr in [KEY_CRONTAB]:  # cast to list
                    if isinstance(value, str):
                        value = [value, ]
                    setattr(self, '_' + attr, value)
                elif attr in [KEY_EVAL_TRIGGER] or (self._use_conditional_triggers and attr in [KEY_TRIGGER]):  # cast to list
                    self._process_trigger_list(attr, value)
                elif (attr in [KEY_CONDITION]) and self._use_conditional_triggers:  # cast to list
                    if isinstance(value, list):
                        cond_list = []
                        for cond in value:
                            cond_list.append(dict(cond))
                        self._trigger_condition = self._build_trigger_condition_eval(cond_list)
                        self._trigger_condition_raw = cond_list
                    else:
                        logger.warning("Item __init__: {}: Invalid trigger_condition specified! Must be a list".format(self._path))
                elif attr in [KEY_ON_CHANGE, KEY_ON_UPDATE]:
                    self._process_on_xx_list(attr, value)
                elif attr in [KEY_LOG_CHANGE]:
                    if value != '':
                        setattr(self, '_log_change', value)
                        self._log_change_logger = logging.getLogger('items.'+value)
                        # set level to make logger appear in internal list of loggers (if not configured by logging.yaml)
                        if self._log_change_logger.level == 0:
                            self._log_change_logger.setLevel('INFO')
                elif attr == KEY_AUTOTIMER:
                    time, value, compat = _split_duration_value_string(value)
                    timeitem = None
                    valueitem = None
                    if time.lower().startswith('sh.') and time.endswith('()'):
                        timeitem = self.get_absolutepath(time[3:-2], KEY_AUTOTIMER)
                        time = 0
                    if value.lower().startswith('sh.') and value.endswith('()'):
                        valueitem = self.get_absolutepath(value[3:-2], KEY_AUTOTIMER)
                        value = ''
                    value = self._castvalue_to_itemtype(value, compat)
                    self._autotimer = [ (self._cast_duration(time), value), compat, timeitem, valueitem]
                elif attr == KEY_THRESHOLD:
                    low, __, high = value.rpartition(':')
                    if not low:
                        low = high
                    self._threshold = True
                    self.__th_crossed = False
                    self.__th_low = float(low.strip())
                    self.__th_high = float(high.strip())
                    self._threshold_data[0] = self.__th_low
                    self._threshold_data[1] = self.__th_high
                    self._threshold_data[2] = self.__th_crossed
                    logger.debug("Item {}: set threshold => low: {} high: {}".format(self._path, self.__th_low, self.__th_high))
                elif attr == '_filename':
                    # name of file, which defines this item
                    setattr(self, attr, value)
                else:
                    # the following code is executed for plugin specific attributes:
                    #
                    # get value from attribute of other (relative addressed) item
                    # at the moment only parent and grandparent item are supported
                    if (type(value) is str) and (value.startswith('..:') or value.startswith('...:')):
                        fromitem = value.split(':')[0]
                        fromattr = value.split(':')[1]
                        if fromattr in ['', '.']:
                            fromattr = attr
                        if fromitem == '..':
                            self.conf[attr] = self._get_attr_from_parent(fromattr)
                        elif fromitem == '...':
                            self.conf[attr] = self._get_attr_from_grandparent(fromattr)
                        else:
                            self.conf[attr] = value
                        # logger.warning("Item rel. from (grand)parent: fromitem = {}, fromattr = {}, self.conf[attr] = {}".format(fromitem, fromattr, self.conf[attr]))
                    else:
                        self.conf[attr] = value

        self.property.init_dynamic_properties()

        #############################################################
        # Child Items
        #############################################################
        for attr, value in config.items():
            if isinstance(value, dict):
                child_path = self._path + '.' + attr
                try:
                    child = Item(smarthome, self, child_path, value)
                except Exception as e:
                    logger.exception("Item {}: problem creating: {}".format(child_path, e))
                else:
                    vars(self)[attr] = child
                    _items_instance.add_item(child_path, child)
                    self.__children.append(child)
        #############################################################
        # Cache
        #############################################################
        if self._cache:
            self._cache = self._sh._cache_dir + self._path
            try:
                self.__last_change, self._value = _cache_read(self._cache, self.shtime.tzinfo())
                self.__last_update = self.__last_change
                self.__prev_change = self.__last_change
                self.__prev_update = self.__last_change
                self.__changed_by = 'Cache:None'
                self.__updated_by = 'Cache:None'
            except Exception as e:
                logger.warning("Item {}: problem reading cache: {}".format(self._path, e))
        #############################################################
        # Type
        #############################################################
        #__defaults = {'num': 0, 'str': '', 'bool': False, 'list': [], 'dict': {}, 'foo': None, 'scene': 0}
        if self._type is None:
            self._type = FOO  # MSinn
        if self._type not in ITEM_DEFAULTS:
            logger.error("Item {}: type '{}' unknown. Please use one of: {}.".format(self._path, self._type, ', '.join(list(ITEM_DEFAULTS.keys()))))
            raise AttributeError
        self.cast = globals()['_cast_' + self._type]
        #############################################################
        # Value
        #############################################################
        if self._value is None:
            self._value = ITEM_DEFAULTS[self._type]
        try:
            self._value = self.cast(self._value)
        except:
            logger.error("Item {}: value {} does not match type {}.".format(self._path, self._value, self._type))
            raise
        self.__prev_value = self.__last_value
        self.__last_value = self._value
        #############################################################
        # Cache write/init
        #############################################################
        if self._cache:
            if not os.path.isfile(self._cache):
                _cache_write(self._cache, self._value)
                logger.warning("Item {}: Created cache for item: {}".format(self._cache, self._cache))
        #############################################################
        # Plugins
        #############################################################
        for plugin in self.plugins.return_plugins():
            #plugin.xxx = []  # Empty reference list list of items
            if hasattr(plugin, PLUGIN_PARSE_ITEM):
                update = plugin.parse_item(self)
                if update:
                    try:
                        plugin._append_to_itemlist(self)
                    except:
                        pass
                    self.add_method_trigger(update)



    def _split_destitem_from_value(self, value):
        """
        For on_change and on_update: spit destination item from attribute value

        :param value: attribute value

        :return: dest_item, value
        :rtype: str, str
        """
        dest_item = ''
        # Check if assignment operator ('=') exists
        if value.find('=') != -1:
            # If delimiter exists, check if equal operator exists
            if value.find('==') != -1:
                # equal operator exists
                if value.find('=') < value.find('=='):
                    # assignment operator exists in front of equal operator
                    dest_item = value[:value.find('=')].strip()
                    value = value[value.find('=')+1:].strip()
            else:
                # if equal operator does not exist
                dest_item = value[:value.find('=')]
                value = value[value.find('=')+1:].strip()
        return dest_item, value


    def _castvalue_to_itemtype(self, value, compat):
        """
        casts the value to the type of the item, if backward compatibility
        to version 1.2 (ATTRIB_COMPAT_V12) is not enabled

        If backward compatibility is enabled, the value is returned unchanged

        :param value: value to be casted
        :param compat: compatibility attribute
        :return: return casted value
        """
        # casting of value, if compat = latest
        if compat == ATTRIB_COMPAT_LATEST:
            if self._type != None:
                mycast = globals()['_cast_' + self._type]
                try:
                    value = mycast(value)
                except:
                    logger.warning("Item {}: Unable to cast '{}' to {}".format(self._path, str(value), self._type))
                    if isinstance(value, list):
                        value = []
                    elif isinstance(value, dict):
                        value = {}
                    else:
                        value = mycast('')
            else:
                logger.warning("Item {}: Unable to cast '{}' to {}".format(self._path, str(value), self._type))
        return value


    def _cast_duration(self, time):
        """
        casts a time value string (e.g. '5m') to an duration integer
        used for autotimer, timer, cycle

        supported formats for time parameter:
        - seconds as integer (45)
        - seconds as a string ('45')
        - seconds as a string, trailed by 's' ('45s')
        - minutes as a string, trailed by 'm' ('5m'), is converted to seconds (300)

        :param time: string containing the duration
        :param itempath: item path as additional information for logging
        :return: number of seconds as an integer
        """
        if isinstance(time, str):
            try:
                time = time.strip()
                if time.endswith('m'):
                    time = int(time.strip('m')) * 60
                elif time.endswith('s'):
                    time = int(time.strip('s'))
                else:
                    time = int(time)
            except Exception as e:
                logger.warning("Item {}: _cast_duration ({}) problem: {}".format(self._path, time, e))
                time = False
        elif isinstance(time, int):
            time = int(time)
        else:
            logger.warning("Item {}: _cast_duration ({}) problem: unable to convert to int".format(self._path, time))
            time = False
        return(time)


    def _build_cycledict(self, value):
        """
        builds a dict for a cycle parameter from a duration_value_string

        This dict is to be passed to the scheduler to circumvent the parameter
        parsing within the scheduler, which can't to casting

        :param value: raw attribute string containing duration, value (and compatibility)
        :return: cycle-dict for a call to scheduler.add
        """
        time, value, compat = _split_duration_value_string(value)
        time = self._cast_duration(time)
        value = self._castvalue_to_itemtype(value, compat)
        cycle = {time: value}
        return cycle


    """
    --------------------------------------------------------------------------------------------
    """


    def _build_on_xx_list(self, on_dest_list, on_eval_list):
        """
        build on_xx data
        """
        on_list = []
        if on_dest_list is not None:
            if isinstance(on_dest_list, list):
                for on_dest, on_eval in zip(on_dest_list, on_eval_list):
                    if on_dest != '':
                        on_list.append(on_dest.strip() + ' = ' + on_eval)
                    else:
                        on_list.append(on_eval)
            else:
                if on_dest_list != '':
                    on_list.append(on_dest_list + ' = ' + on_eval_list)
                else:
                    on_list.append(on_eval_list)
        return on_list


    def _process_eval(self, value):

        if value == '':
            self._eval_unexpanded = ''
            self._eval = None
        else:
            self._eval_unexpanded = value
            value = self.get_stringwithabsolutepathes(value, 'sh.', '(', KEY_EVAL)
            self._eval = value


    def _process_trigger_list(self, attr, value):

        if isinstance(value, str):
            value = [value, ]
        self._trigger_unexpanded = value
        expandedvalue = []
        for path in value:
            expandedvalue.append(self.get_absolutepath(path, attr))
        self._trigger = expandedvalue


    def _process_on_xx_list(self, attr, value):

        if isinstance(value, str):
            value = [value]
        val_list = []
        val_list_unexpanded = []
        dest_var_list = []
        dest_var_list_unexp = []
        for val in value:
            # separate destination item (if it exists)
            dest_item, val = self._split_destitem_from_value(val)
            dest_var_list_unexp.append(dest_item)
            # expand relative item paths
            dest_item = self.get_absolutepath(dest_item, KEY_ON_CHANGE).strip()
            #                        val = 'sh.'+dest_item+'( '+ self.get_stringwithabsolutepathes(val, 'sh.', '(', KEY_ON_CHANGE) +' )'
            val_list_unexpanded.append(val)
            val = self.get_stringwithabsolutepathes(val, 'sh.', '(', KEY_ON_CHANGE)
            #                        logger.warning("Item __init__: {}: for attr '{}', dest_item '{}', val '{}'".format(self._path, attr, dest_item, val))
            val_list.append(val)
            dest_var_list.append(dest_item)
        setattr(self, '_' + attr + '_unexpanded', val_list_unexpanded)
        setattr(self, '_' + attr, val_list)
        setattr(self, '_' + attr + '_dest_var', dest_var_list)
        setattr(self, '_' + attr + '_dest_var_unexp', dest_var_list_unexp)
        return


    """
    --------------------------------------------------------------------------------------------
    ---
    ---  Properties of the item, that can be accessed from outside of the item class
    ---
    """

    class Property:
        """
        Inner class Property of item class.

        This class encapsulates all properties that are publicly available

        An instance of this class is created in the __init__ method of the item class
        """

        def __init__(self, parent):
            self._item = parent

        def _ro_error(self):
            prop = inspect.stack()[1][3]
            logger.error("Cannot set readonly property '{}' of item '{}'".format(prop, self._item._path))
            return

        def _type_error(self, err):
            prop = inspect.stack()[1][3]
            logger.error("Cannot set property '{}' of item '{}' to a {} value".format(prop, self._item._path, err))
            return

        def _cast_warning(self, value):
            prop = inspect.stack()[1][3]
            logger.warning("Casting value '{}' to required type before assigning it to property '{}' of item '{}'".format(value, prop, self._item._path))
            return

        @property
        def attributes(self):
            """
            Read-Only Property: attributes. List of plugin-specific attribute names

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return list(self._item.conf.keys())


        def init_dynamic_properties(self):
            """
            Initialize dynamic properties to get the values of plugin-specific attributes
            """
            for confattr in self._item.conf.keys():
                setattr(self, confattr, self.get_config_attribute(confattr))
            return

        def get_config_attribute(self, attr):
            return self._item.conf.get(attr, '')


        @property
        def defined_in(self):
            """
            Read-Only Property: defined_in . The filename in which the item was defined

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._filename

        @defined_in.setter
        def defined_in(self, value):
            self._ro_error()
            return


        @property
        def enforce_updates(self):
            """
            Property: enforce_updates

            Available in SmartHomeNG v1.6 and above

            :param value: enforce_update state of the item
            :type value: bool

            :return: enforce_update state of the item
            :rtype: bool
            """
            return self._item._enforce_updates

        @enforce_updates.setter
        def enforce_updates(self, value):

            if isinstance(value, bool):
                self._item._enforce_updates = value
                return
            else:
                self._type_error('non-boolean')
                return


        @property
        def enforce_change(self):
            """
            Property: enforce_change

            Available in SmartHomeNG v1.6 and above

            :param value: enforce_change state of the item
            :type value: bool

            :return: enforce_change state of the item
            :rtype: bool
            """
            return self._item._enforce_change

        @enforce_change.setter
        def enforce_change(self, value):

            if isinstance(value, bool):
                self._item._enforce_change = value
                return
            else:
                self._type_error('non-boolean')
                return


        @property
        def eval(self):
            """
            Property: eval expression

            Available in SmartHomeNG v1.6 and above

            :param value: eval expression of the item
            :type value: str

            :return: eval expression of the item
            :rtype: str
            """
            if self._item._eval:
                return self._item._eval
            return ''

        @eval.setter
        def eval(self, value):

            if isinstance(value, str):
                if value == '':
                    self._item._eval = None
                else:
                    self._item._eval = value
                return
            else:
                self._type_error('non-non-string')
                return


        @property
        def eval_unexpanded(self):
            """
            Property: eval expression

            Available in SmartHomeNG v1.6 and above

            :param value: eval expression of the item
            :type value: str

            :return: eval expression of the item
            :rtype: str
            """
            if self._item._eval:
                return self._item._eval
            return ''

        @eval_unexpanded.setter
        def eval_unexpanded(self, value):

            if isinstance(value, str):
                self._item._lock.acquire()
                self._item._process_eval(value)
                self._item._lock.release()
                return
            else:
                self._type_error('non-non-string')
                return


        @property
        def last_change(self):
            """
            Read-Only Property: last_change

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_last_change()

        @last_change.setter
        def last_change(self, value):
            self._ro_error()
            return


        @property
        def last_change_age(self):
            """
            Read-Only Property: last_change_age

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_last_change_age()

        @last_change_age.setter
        def last_change_age(self, value):
            self._ro_error()
            return


        @property
        def last_change_by(self):
            """
            Read-Only Property: last_change_by

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_last_change_by()

        @last_change_by.setter
        def last_change_by(self, value):
            self._ro_error()
            return


        @property
        def last_update(self):
            """
            Read-Only Property: last_update

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_last_update()

        @last_update.setter
        def last_update(self, value):
            self._ro_error()
            return


        @property
        def last_update_age(self):
            """
            Read-Only Property: last_update_age

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_last_update_age()

        @last_update_age.setter
        def last_update_age(self, value):
            self._ro_error()
            return


        @property
        def last_update_by(self):
            """
            Read-Only Property: last_update_by

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_last_update_by()

        @last_update_by.setter
        def last_update_by(self, value):
            self._ro_error()
            return


        @property
        def last_value(self):
            """
            Read-Only Property: last_value

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_last_value()

        @last_value.setter
        def last_value(self, value):
            self._ro_error()
            return


        @property
        def name(self):
            """
            Property: name

            Available in SmartHomeNG v1.6 and above

            :param value: name of the item
            :type value: str

            :return: name of the item
            :rtype: str
            """
            return self._item._name

        @name.setter
        def name(self, value):

            if not isinstance(value, str):
                self._cast_warning(value)
                value = '{}'.format(value)
            if value == '':
                self._item._name = self._item._path
            else:
                self._item._name = value
            return


        @property
        def on_change(self):
            """
            Read-Only Property: on_update

            Available in SmartHomeNG v1.6 and above

            :return: path of on_update definitions
            :rtype: str
            """
            return self._item._build_on_xx_list(self._item._on_change_dest_var, self._item._on_change)

        @on_change.setter
        def on_change(self, value):
            self._ro_error()
            return


        @property
        def on_change_unexpanded(self):
            """
            Read-Only Property: on_update

            Available in SmartHomeNG v1.6 and above

            :return: path of on_update definitions
            :rtype: str
            """
            return self._item._build_on_xx_list(self._item._on_change_dest_var_unexp, self._item._on_change_unexpanded)

        @on_change_unexpanded.setter
        def on_change_unexpanded(self, value):
            if isinstance(value, str):
                value = [value]
            if isinstance(value, list):
                if value == [] or self._checkstrtype(value):
                    self._item._lock.acquire()
                    self._item._process_on_xx_list('on_change', value)
                    self._item._lock.release()
                else:
                    self._type_error('list containing non-string')
                    return
                return
            else:
                self._type_error('non-list')
                return

        @property
        def on_update(self):
            """
            Read-Only Property: on_update

            Available in SmartHomeNG v1.6 and above

            :return: path of on_update definitions
            :rtype: str
            """
            return self._item._build_on_xx_list(self._item._on_update_dest_var, self._item._on_update)


        @on_update.setter
        def on_update(self, value):
            self._ro_error()
            return


        @property
        def on_update_unexpanded(self):
            """
            Read-Only Property: on_update

            Available in SmartHomeNG v1.6 and above

            :return: path of on_update definitions
            :rtype: str
            """
            return self._item._build_on_xx_list(self._item._on_update_dest_var_unexp, self._item._on_update_unexpanded)


        @on_update_unexpanded.setter
        def on_update_unexpanded(self, value):
            if isinstance(value, str):
                value = [value]
            if isinstance(value, list):
                if value == [] or self._checkstrtype(value):
                    self._item._lock.acquire()
                    self._item._process_on_xx_list('on_update', value)
                    self._item._lock.release()
                else:
                    self._type_error('list containing non-string')
                    return
                return
            else:
                self._type_error('non-list')
                return


        @property
        def path(self):
            """
            Read-Only Property: path

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._path

        @path.setter
        def path(self, value):
            self._ro_error()
            return


        @property
        def prev_change(self):
            """
            Read-Only Property: prev_change

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_prev_change()

        @prev_change.setter
        def prev_change(self, value):
            self._ro_error()
            return


        @property
        def prev_change_age(self):
            """
            Read-Only Property: prev_change_age

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_prev_change_age()

        @prev_change_age.setter
        def prev_change_age(self, value):
            self._ro_error()
            return


        @property
        def prev_change_by(self):
            """
            Read-Only Property: prev_change_by

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_prev_change_by()

        @prev_change_by.setter
        def prev_change_by(self, value):
            self._ro_error()
            return


        @property
        def prev_update(self):
            """
            Read-Only Property: prev_update

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_prev_update()

        @prev_update.setter
        def prev_update(self, value):
            self._ro_error()
            return


        @property
        def prev_update_age(self):
            """
            Read-Only Property: prev_update_age

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_prev_update_age()

        @prev_update_age.setter
        def prev_update_age(self, value):
            self._ro_error()
            return


        @property
        def prev_update_by(self):
            """
            Read-Only Property: prev_update_by

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_prev_update_by()

        @prev_update_by.setter
        def prev_update_by(self, value):
            self._ro_error()
            return


        @property
        def prev_value(self):
            """
            Read-Only Property: prev_value

            Available in SmartHomeNG v1.6 and above

            :return: path of the item
            :rtype: str
            """
            return self._item._get_prev_value()

        @last_value.setter
        def last_value(self, value):
            self._ro_error()
            return


        @property
        def trigger(self):
            """
            Property: Triggers of the item

            Available in SmartHomeNG v1.6 and above

            :param value: list of triggers
            :type value: list

            :return: [] if not defined or a list of triggers
            :rtype: list of str
            """
            if self._item._trigger:
                return self._item._trigger
            return []

        def _checkstrtype(self, obj):
            return bool(obj) and all(isinstance(elem, str) for elem in obj)

        @trigger.setter
        def trigger(self, value):

            if isinstance(value, list):
                if value == []:
                    self._item._trigger = False
                    self._item._trigger_unexpanded = []
                else:
                    if self._checkstrtype(value):
                        self._item._trigger = value
                        self._item._trigger_unexpanded = value
                    else:
                        self._type_error('list containing non-string')
                        return
                return
            else:
                self._type_error('non-list')
                return


        @property
        def trigger_unexpanded(self):
            """
            Property: Triggers of the item

            Available in SmartHomeNG v1.6 and above

            :param value: list of triggers
            :type value: list

            :return: [] if not defined or a list of triggers
            :rtype: list of str
            """
            if self._item._trigger:
                return self._item._trigger_unexpanded
            return []

        @trigger_unexpanded.setter
        def trigger_unexpanded(self, value):
            if isinstance(value, str):
                value = [value]
            if isinstance(value, list):
                if value == [] or self._checkstrtype(value):
                    self._item._lock.acquire()
                    self._item._process_trigger_list('trigger', value)
                    self._item._lock.release()
                else:
                    self._type_error('list containing non-string')
                    return
                return
            else:
                self._type_error('non-list')
                return


        @property
        def type(self):
            """
            Read-Only Property: type

            Available in SmartHomeNG v1.6 and above

            :return: type of the item
            :rtype: str
            """
            return self._item._type

        @type.setter
        def type(self, value):
            self._ro_error()
            return


        @property
        def value(self):
            """
            Property: value

            Available in SmartHomeNG v1.6 and above

            :param value: value of the item
            :type value: <type of the item>

            :return: value of the item
            :rtype: <type of the item>
            """
            return copy.deepcopy(self._item._value)

        @value.setter
        def value(self, value):

            #self._item.set(value, 'assign property')
            #self._item.__update(value, caller='assign property')
            self._item(value, caller='assign property')
            return


    """
    ---
    ---  End of Properties class
    ---
    --------------------------------------------------------------------------------------------
    """

    def _get_last_change(self):
        return self.__last_change

    def _get_last_change_age(self):
        delta = self.shtime.now() - self.__last_change
        return delta.total_seconds()

    def _get_last_change_by(self):
        return self.__changed_by

    def _get_last_update(self):
        return self.__last_update

    def _get_last_update_by(self):
        return self.__updated_by

    def _get_last_update_age(self):
        delta = self.shtime.now() - self.__last_update
        return delta.total_seconds()

    def _get_last_value(self):
        return self.__last_value

    def _get_prev_change(self):
        return self.__prev_change

    def _get_prev_change_age(self):
        delta = self.__last_change - self.__prev_change
        if delta.total_seconds() < 0.0001:
            return 0.0
        return delta.total_seconds()

    def _get_prev_change_by(self):
        return 'N/A'

    def _get_prev_update(self):
        return self.__prev_change

    def _get_prev_update_age(self):

        delta = self.__last_update - self.__prev_update
        if delta.total_seconds() < 0.0001:
            return 0.0
        return delta.total_seconds()

    def _get_prev_update_by(self):
        return 'N/A'

    def _get_prev_value(self):
        return self.__prev_value



    """
    Following are methods to get attributes of the item
    """

    def path(self):
        """
        Path of the item

        Available only in SmartHomeNG v1.6, not in versions above

        :return: String with the path of the item
        :rtype: str
        """
        return self.property.path

    def id(self):
        """
        Old method name - Use item.path() instead of item.id()
        """
        return self.property.path


    def type(self):
        """
        Datatype of the item

        :return: Datatype of the item
        :rtype: str
        """
        return self.property.type


    def last_change(self):
        """
        Timestamp of last change of item's value

        :return: Timestamp of last change
        """
        return self.property.last_change

    def age(self):
        """
        Age of the item's actual value. Returns the time in seconds since the last change of the value

        :return: Age of the value
        :rtype: int
        """
        return self.property.last_change_age


    def last_update(self):
        """
        Timestamp of last update of item's value (not necessarily change)

        :return: Timestamp of last update
        """
        return self.property.last_update

    def update_age(self):
        """
        Update-age of the item's actual value. Returns the time in seconds since the value has been updated (not necessarily changed)

        :return: Update-age of the value
        :rtype: int
        """
        return self.property.last_update_age

    def prev_change(self):
        """
        Timestamp of the previous (next-to-last) change of item's value

        :return: Timestamp of previous change
        """
        return self.property.prev_change

    def prev_age(self):
        """
        Age of the item's previous value. Returns the time in seconds the item had the the previous value

        :return: Age of the previous value
        :rtype: int
        """
        return self.property.prev_change_age

    def prev_update(self):
        """
        Timestamp of previous (next-to-last) update of item's value (not necessarily change)

        :return: Timestamp of previous update
        """
        return self.property.prev_update

    def prev_update_age(self):
        """
        Update-age of the item's previous value. Returns the time in seconds the previous value existed
        since it had been updated (not necessarily changed)

        :return: Update-age of the previous value
        :rtype: int
        """
        return self.property.prev_update_age

    def prev_value(self):
        """
        Next-to-last value of the item

        :return: Next-to-last value of the item
        """
        return self.property.last_value

    def changed_by(self):
        """
        Returns an indication, which plugin, logic or event changed the item's value

        :return: Changer of item's value
        :rtype: str
        """
        return self.property.last_change_by

    def updated_by(self):
        """
        Returns an indication, which plugin, logic or event updated (not necessarily changed) the item's value

        :return: Updater of item's value
        :rtype: str
        """
        return self.property.last_update_by


    """
    Following are methods to handle relative item paths
    """

    def get_absolutepath(self, relativepath, attribute=''):
        """
        Builds an absolute item path relative to the current item

        :param relativepath: string with the relative item path
        :param attribute: string with the name of the item's attribute, which contains the relative path (for log entries)

        :return: string with the absolute item path
        """
        if not isinstance(relativepath, str):
            return relativepath
        if (len(relativepath) == 0) or ((len(relativepath) > 0) and (relativepath[0] != '.')):
            return relativepath
        relpath = relativepath.rstrip()
        rootpath = self._path

        while (len(relpath) > 0) and (relpath[0] == '.'):
            relpath = relpath[1:]
            if (len(relpath) > 0) and (relpath[0] == '.'):
                if rootpath.rfind('.') == -1:
                    if rootpath == '':
                        relpath = ''
                        logger.error(
                            "{}.get_absolutepath(): Relative path trying to access above root level on attribute '{}'".format(
                                self._path, attribute))
                    else:
                        rootpath = ''
                else:
                    rootpath = rootpath[:rootpath.rfind('.')]

        if relpath != '':
            if rootpath != '':
                rootpath += '.' + relpath
            else:
                rootpath = relpath
        logger.info(
            "{}.get_absolutepath('{}'): Result = '{}' (for attribute '{}')".format(self._path, relativepath, rootpath,
                                                                                   attribute))
        if rootpath[-5:] == '.self':
            rootpath = rootpath.replace('.self', '')
        rootpath = rootpath.replace('.self.', '.')
        return rootpath

    def expand_relativepathes(self, attr, begintag, endtag):
        """
        converts a configuration attribute containing relative item paths
        to absolute paths

        The item's attribute can be of type str or list (of strings)

        The begintag and the endtag remain in the result string!

        :param attr: Name of the attribute. Use * as a wildcard at the end
        :param begintag: string or list of strings that signals the beginning of a relative path is following
        :param endtag: string or list of strings that signals the end of a relative path

        """
        def __checkforentry(attr):
            if isinstance(self.conf[attr], str):
                if (begintag != '') and (endtag != ''):
                    self.conf[attr] = self.get_stringwithabsolutepathes(self.conf[attr], begintag, endtag, attr)
                elif (begintag == '') and (endtag == ''):
                    self.conf[attr] = self.get_absolutepath(self.conf[attr], attr)
            elif isinstance(self.conf[attr], list):
                logger.debug("expand_relativepathes(1): to expand={}".format(self.conf[attr]))
                new_attr = []
                for a in self.conf[attr]:
                    # Convert accidentally wrong dict entries to string
                    if isinstance(a, dict):
                        a = list("{!s}:{!s}".format(k,v) for (k,v) in a.items())[0]
                    logger.debug("expand_relativepathes: before : to expand={}".format(a))
                    if (begintag != '') and (endtag != ''):
                        a = self.get_stringwithabsolutepathes(a, begintag, endtag, attr)
                    elif (begintag == '') and (endtag == ''):
                        a = self.get_absolutepath(a, attr)
                    logger.debug("expand_relativepathes: after: to expand={}".format(a))
                    new_attr.append(a)
                self.conf[attr] = new_attr
                logger.debug("expand_relativepathes(2): expanded={}".format(self.conf[attr]))
            else:
                logger.warning("expand_relativepathes: attr={} can not expand for type(self.conf[attr])={}".format(attr, type(self.conf[attr])))

        # Check if wildcard is used
        if isinstance(attr, str) and attr[-1:] == "*":
            for entry in self.conf:
                if attr[:-1] in entry:
                    __checkforentry(entry)
        elif attr in self.conf:
            __checkforentry(attr)
        return


    def get_stringwithabsolutepathes(self, evalstr, begintag, endtag, attribute=''):
        """
        converts a string containing relative item paths
        to a string with absolute item paths

        The begintag and the endtag remain in the result string!

        :param evalstr: string with the statement that may contain relative item paths
        :param begintag: string that signals the beginning of a relative path is following
        :param endtag: string that signals the end of a relative path
        :param attribute: string with the name of the item's attribute, which contains the relative path

        :return: string with the statement containing absolute item paths
        """
        def __checkfortags(evalstr, begintag, endtag):
            pref = ''
            rest = evalstr
            while (rest.find(begintag+'.') != -1):
                pref += rest[:rest.find(begintag+'.')+len(begintag)]
                rest = rest[rest.find(begintag+'.')+len(begintag):]
                if endtag == '':
                    rel = rest
                    rest = ''
                else:
                    rel = rest[:rest.find(endtag)]
                rest = rest[rest.find(endtag):]
                pref += self.get_absolutepath(rel, attribute)

            pref += rest
            logger.debug("{}.get_stringwithabsolutepathes('{}') with begintag = '{}', endtag = '{}': result = '{}'".format(
                self._path, evalstr, begintag, endtag, pref))
            return pref

        if not isinstance(evalstr, str):
            return evalstr

        if isinstance(begintag, list):
            # Fill end or begintag with empty tags if list length is not equal
            diff_len = len(begintag) - len(endtag)
            begintag = begintag + [''] * abs(diff_len) if diff_len < 0 else begintag
            endtag = endtag + [''] * diff_len if diff_len > 0 else endtag
            for i, _ in enumerate(begintag):
                if not evalstr.find(begintag[i]+'.') == -1:
                    evalstr = __checkfortags(evalstr, begintag[i], endtag[i])
            pref = evalstr
        else:
            if evalstr.find(begintag+'.') == -1:
                return evalstr
            pref = __checkfortags(evalstr, begintag, endtag)
        return pref


    def _get_attr_from_parent(self, attr):
        """
        Get value from parent

        :param attr: Get the value from this attribute of the parent item
        :return: value from attribute of parent item
        """
        pitem = self.return_parent()
        pattr_value = pitem.conf.get(attr, '')
        #        logger.warning("_get_attr_from_parent Item {}: for attr '{}'".format(self._path, attr))
        #        logger.warning("_get_attr_from_parent Item {}: for parent '{}', pattr_value '{}'".format(self._path, pitem._path, pattr_value))
        return pattr_value


    def _get_attr_from_grandparent(self, attr):
        """
        Get value from grandparent

        :param attr: Get the value from this attribute of the grandparent item
        :return: value from attribute of grandparent item
        """
        pitem = self.return_parent()
        gpitem = pitem.return_parent()
        gpattr_value = pitem.get(attr, '')
#        logger.warning("_get_attr_from_grandparent Item {}: for attr '{}'".format(self._path, attr))
#        logger.warning("_get_attr_from_grandparent Item {}: for grandparent '{}', gpattr_value '{}'".format(self._path, gpitem._path, gpattr_value))
        return gpattr_value


    def _build_trigger_condition_eval(self, trigger_condition):
        """
        Build conditional eval expression from trigger_condition attribute

        :param trigger_condition: list of condition dicts
        :return:
        """
        wrk_eval = []
        for or_cond in trigger_condition:
            for ckey in or_cond:
                if ckey.lower() == 'value':
                    pass
                else:
                    and_cond = []
                    for cond in or_cond[ckey]:
                        wrk = cond
                        if (wrk.find('=') != -1) and (wrk.find('==') == -1) and \
                                (wrk.find('<=') == -1) and (wrk.find('>=') == -1) and \
                                (wrk.find('=<') == -1) and (wrk.find('=>') == -1):
                            wrk = wrk.replace('=', '==')

                        p = wrk.lower().find('true')
                        if p != -1:
                            wrk = wrk[:p]+'True'+wrk[p+4:]
                        p = wrk.lower().find('false')
                        if p != -1:
                            wrk = wrk[:p]+'False'+wrk[p+5:]

                        # expand relative item paths
                        wrk = self.get_stringwithabsolutepathes(wrk, 'sh.', '(', KEY_CONDITION)

                        and_cond.append(wrk)

                    wrk = ') and ('.join(and_cond)
                    if len(or_cond[ckey]) > 1:
                        wrk = '(' + wrk + ')'
                    wrk_eval.append(wrk)

    #                wrk_eval.append(str(or_cond[ckey]))
                    result = ') or ('.join(wrk_eval)

        if len(trigger_condition) > 1:
            result = '(' + result + ')'

        return result


    def __call__(self, value=None, caller='Logic', source=None, dest=None):
        if value is None or self._type is None:
            return copy.deepcopy(self._value)
        if self._eval:
            args = {'value': value, 'caller': caller, 'source': source, 'dest': dest}
            self._sh.trigger(name=self._path + '-eval', obj=self.__run_eval, value=args, by=caller, source=source, dest=dest)
        else:
            self.__update(value, caller, source, dest)

    def __iter__(self):
        for child in self.__children:
            yield child

    def __setitem__(self, item, value):
        vars(self)[item] = value

    def __getitem__(self, item):
        return vars(self)[item]

    def __bool__(self):
        return bool(self._value)

    def __str__(self):
        return self._name

    def __repr__(self):
        return "Item: {}".format(self._path)


    def _init_prerun(self):
        """
        Build eval expressions from special functions and triggers before first run

        Called from Items.load_itemdefinitions
        """
        if self._trigger:
            # Only if item has an eval_trigger
            _items = []
            for trigger in self._trigger:
                if _items_instance.match_items(trigger) == [] and self._eval:
                    logger.warning("item '{}': trigger item '{}' not found for function '{}'".format(self._path, trigger, self._eval))
                _items.extend(_items_instance.match_items(trigger))
            for item in _items:
                if item != self:  # prevent loop
                        item._items_to_trigger.append(self)
            if self._eval:
                # Build eval statement from trigger items (joined by given function)
                items = ['sh.' + str(x.id()) + '()' for x in _items]
                if self._eval == 'and':
                    self._eval = ' and '.join(items)
                elif self._eval == 'or':
                    self._eval = ' or '.join(items)
                elif self._eval == 'sum':
                    self._eval = ' + '.join(items)
                elif self._eval == 'avg':
                    self._eval = '({0})/{1}'.format(' + '.join(items), len(items))
                elif self._eval == 'max':
                    self._eval = 'max({0})'.format(','.join(items))
                elif self._eval == 'min':
                    self._eval = 'min({0})'.format(','.join(items))


    def _init_start_scheduler(self):
        """
        Start schedulers of the items which have a crontab or a cycle attribute

        up to version 1.5 of SmartHomeNG the schedulers were started when initializing the item. That
        could lead to a scheduler to fire a routine, which references an item which is not yet initialized
        :return:
        """

        #############################################################
        # Crontab/Cycle
        #############################################################
        if self._crontab is not None or self._cycle is not None:
            cycle = self._cycle
            if cycle is not None:
                cycle = self._build_cycledict(cycle)
            self._sh.scheduler.add(self._itemname_prefix+self._path, self, cron=self._crontab, cycle=cycle)

        return


    def _init_run(self):
        """
        Run initial eval to set an initial value for the item

        Called from Items.load_itemdefinitions
        """
        if self._trigger:
            # Only if item has an eval_trigger
            if self._eval:
                # Only if item has an eval expression
                self._sh.trigger(name=self._path, obj=self.__run_eval, by='Init', value={'value': self._value, 'caller': 'Init'})


    def __run_eval(self, value=None, caller='Eval', source=None, dest=None):
        """
        evaluate the 'eval' entry of the actual item
        """
        if self._eval:
            # Test if a conditional trigger is defined
            if self._trigger_condition is not None:
#                logger.warning("Item {}: Evaluating trigger condition {}".format(self._path, self._trigger_condition))
                try:
                    sh = self._sh
                    cond = eval(self._trigger_condition)
                    logger.warning("Item {}: Condition result '{}' evaluating trigger condition {}".format(self._path, cond, self._trigger_condition))
                except Exception as e:
                    logger.warning("Item {}: problem evaluating trigger condition {}: {}".format(self._path, self._trigger_condition, e))
                    return
            else:
                cond = True

            if cond == True:
    #            if self._path == 'wohnung.flur.szenen_helper':
    #                logger.info("__run_eval: item = {}, value = {}, self._eval = {}".format(self._path, value, self._eval))
                sh = self._sh  # noqa
                shtime = self.shtime

                import math as mymath
                try:
                    value = eval(self._eval)
                except Exception as e:
                    logger.warning("Item {}: problem evaluating {}: {}".format(self._path, self._eval, e))
                else:
                    if value is None:
                        logger.debug("Item {}: evaluating {} returns None".format(self._path, self._eval))
                    else:
                        if self._path == 'wohnung.flur.szenen_helper':
                            logger.info("__run_eval: item = {}, value = {}".format(self._path, value))
                        self.__update(value, caller, source, dest)


    # New for on_update / on_change
    def _run_on_xxx(self, path, value, on_dest, on_eval, attr='?'):
        """
        common method for __run_on_update and __run_on_change

        :param path: path to this item

        :param attr: Descriptive text for origin of update of item
        :type: path: str

        :type attr: str
        """
        if self._path == 'wohnung.flur.szenen_helper':
            logger.info("_run_on_xxx: item = {}, value = {}".format(self._path, value))
        sh = self._sh
        logger.info("Item {}: '{}' evaluating {} = {}".format(self._path, attr, on_dest, on_eval))
        try:
            dest_value = eval(on_eval)       # calculate to test if expression computes and see if it computes to None
        except Exception as e:
            logger.warning("Item {}: '{}' item-value='{}' problem evaluating {}: {}".format(self._path, attr, value, on_eval, e))
        else:
            if dest_value is not None:
                # expression computes and does not result in None
                if on_dest != '':
                    dest_item = _items_instance.return_item(on_dest)
                    if dest_item is not None:
                        dest_item.__update(dest_value, caller=attr, source=self._path)
                        logger.debug(" - : '{}' finally evaluating {} = {}, result={}".format(attr, on_dest, on_eval, dest_value))
                    else:
                        logger.error("Item {}: '{}' has not found dest_item '{}' = {}, result={}".format(self._path, attr, on_dest, on_eval, dest_value))
                else:
                    dummy = eval(on_eval)
                    logger.debug(" - : '{}' finally evaluating {}, result={}".format(attr, on_eval, dest_value))
            else:
                logger.debug(" - : '{}' {} not set (cause: eval=None)".format(attr, on_dest))
                pass


    def __run_on_update(self, value=None):
        """
        evaluate all 'on_update' entries of the actual item
        """
        if self._on_update:
            sh = self._sh  # noqa
#            logger.info("Item {}: 'on_update' evaluating {} = {}".format(self._path, self._on_update_dest_var, self._on_update))
            for on_update_dest, on_update_eval in zip(self._on_update_dest_var, self._on_update):
                self._run_on_xxx(self._path, value, on_update_dest, on_update_eval, 'on_update')


    def __run_on_change(self, value=None):
        """
        evaluate all 'on_change' entries of the actual item
        """
        if self._on_change:
            sh = self._sh  # noqa
#            logger.info("Item {}: 'on_change' evaluating lists {} = {}".format(self._path, self._on_change_dest_var, self._on_change))
            for on_change_dest, on_change_eval in zip(self._on_change_dest_var, self._on_change):
                self._run_on_xxx(self._path, value, on_change_dest, on_change_eval, 'on_change')


    def __trigger_logics(self, source_details=None):
        source={'item': self._path, 'details': source_details}
        for logic in self.__logics_to_trigger:
#            logic.trigger(by='Item', source=self._path, value=self._value)
            logic.trigger(by='Item', source=source, value=self._value)

    # logic.trigger(by='Logic', source=None, value=None, dest=None, dt=None):

    def __update(self, value, caller='Logic', source=None, dest=None):
        try:
            value = self.cast(value)
        except:
            try:
                logger.warning('Item {}: value "{}" does not match type {}. Via {} {}'.format(self._path, value, self._type, caller, source))
            except:
                pass
            return
        self._lock.acquire()
        _changed = False
        self.__prev_update = self.__last_update
        self.__last_update = self.shtime.now()
        self.__updated_by = "{0}:{1}".format(caller, source)
        trigger_source_details = self.__updated_by
        if value != self._value or self._enforce_change:
            _changed = True
            self.__prev_value = self.__last_value
            self.__last_value = self._value
            self._value = value
            self.__prev_change = self.__last_change
            self.__last_change = self.__last_update
            self.__changed_by = "{0}:{1}".format(caller, source)
            trigger_source_details = self.__changed_by
            if caller != "fader":
                self._fading = False
                self._lock.notify_all()
                self._change_logger("Item {} = {} via {} {} {}".format(self._path, value, caller, source, dest))
                if self._log_change_logger is not None:
                    log_src = ''
                    if source is not None:
                        log_src += ' (' + source + ')'
                    log_dst = ''
                    if dest is not None:
                        log_dst += ', dest: ' + dest
                    self._log_change_logger.info("Item Change: {} = {}  -  caller: {}{}{}".format(self._path, value, caller, log_src, log_dst))
        self._lock.release()
        # ms: call run_on_update() from here
        self.__run_on_update(value)
        if _changed or self._enforce_updates or self._type == 'scene':
            # ms: call run_on_change() from here
            self.__run_on_change(value)
            for method in self.__methods_to_trigger:
                try:
                    method(self, caller, source, dest)
                except Exception as e:
                    logger.exception("Item {}: problem running {}: {}".format(self._path, method, e))
            if self._threshold and self.__logics_to_trigger:
                if self.__th_crossed and self._value <= self.__th_low:  # cross lower bound
                    self.__th_crossed = False
                    self._threshold_data[2] = self.__th_crossed
                    self.__trigger_logics(trigger_source_details)
                elif not self.__th_crossed and self._value >= self.__th_high:  # cross upper bound
                    self.__th_crossed = True
                    self._threshold_data[2] = self.__th_crossed
                    self.__trigger_logics(trigger_source_details)
            elif self.__logics_to_trigger:
                self.__trigger_logics(trigger_source_details)
            for item in self._items_to_trigger:
                args = {'value': value, 'source': self._path}
                self._sh.trigger(name=item.id(), obj=item.__run_eval, value=args, by=caller, source=source, dest=dest)
        if _changed and self._cache and not self._fading:
            try:
                _cache_write(self._cache, self._value)
            except Exception as e:
                logger.warning("Item: {}: could update cache {}".format(self._path, e))
        if self._autotimer and caller != 'Autotimer' and not self._fading:

            _time, _value = self._autotimer[0]
            compat = self._autotimer[1]
            if self._autotimer[2]:
                try:
                    _time = eval('self._sh.'+self._autotimer[2]+'()')
                except:
                    logger.warning("Item '{}': Attribute 'autotimer': Item '{}' does not exist".format(self._path, self._autotimer[2]))
            if self._autotimer[3]:
                try:
                    _value = self._castvalue_to_itemtype(eval('self._sh.'+self._autotimer[3]+'()'), compat)
                except:
                    logger.warning("Item '{}': Attribute 'autotimer': Item '{}' does not exist".format(self._path, self._autotimer[3]))
            self._autotimer[0] = (_time, _value)     # for display of active/last timer configuration in backend

            next = self.shtime.now() + datetime.timedelta(seconds=_time)
            self._sh.scheduler.add(self._itemname_prefix+self.id() + '-Timer', self.__call__, value={'value': _value, 'caller': 'Autotimer'}, next=next)


    def add_logic_trigger(self, logic):
        """
        Add a logic trigger to the item

        :param logic:
        :type logic:
        :return:
        """
        self.__logics_to_trigger.append(logic)

    def remove_logic_trigger(self, logic):
        self.__logics_to_trigger.remove(logic)

    def get_logic_triggers(self):
        """
        Returns a list of logics to trigger, if the item gets changed

        :return: Logics to trigger
        :rtype: list
        """
        return self.__logics_to_trigger

    def add_method_trigger(self, method):
        self.__methods_to_trigger.append(method)

    def remove_method_trigger(self, method):
        self.__methods_to_trigger.remove(method)

    def get_method_triggers(self):
        """
        Returns a list of item methods to trigger, if this item gets changed

        :return: methods to trigger
        :rtype: list
        """
        return self.__methods_to_trigger


    def autotimer(self, time=None, value=None, compat=ATTRIB_COMPAT_V12):
        if time is not None and value is not None:
            self._autotimer = [(time, value), compat, None, None]
        else:
            self._autotimer = False

    def fade(self, dest, step=1, delta=1):
        dest = float(dest)
        self._sh.trigger(self._path, _fadejob, value={'item': self, 'dest': dest, 'step': step, 'delta': delta})

    def remove_timer(self):
        self._sh.scheduler.remove(self._itemname_prefix+self.id() + '-Timer')

    def return_children(self):
        for child in self.__children:
            yield child

    def return_parent(self):
        return self.__parent

    def set(self, value, caller='Logic', source=None, dest=None, prev_change=None, last_change=None):
        try:
            value = self.cast(value)
        except:
            try:
                logger.warning("Item {}: value {} does not match type {}. Via {} {}".format(self._path, value, self._type, caller, source))
            except:
                pass
            return
        self._lock.acquire()
        self._value = value
        if prev_change is None:
            self.__prev_change = self.__last_change
        else:
            self.__prev_change = prev_change
        if last_change is None:
            self.__last_change = self.shtime.now()
        else:
            self.__last_change = last_change
        self.__changed_by = "{0}:{1}".format(caller, None)
        self.__updated_by = "{0}:{1}".format(caller, None)
        self._lock.release()
        self._change_logger("Item {} = {} via {} {} {}".format(self._path, value, caller, source, dest))

    def timer(self, time, value, auto=False, compat=ATTRIB_COMPAT_DEFAULT):
        time = self._cast_duration(time)
        value = self._castvalue_to_itemtype(value, compat)
        if auto:
            caller = 'Autotimer'
            self._autotimer = [(time, value), compat, None, None]
        else:
            caller = 'Timer'
        next = self.shtime.now() + datetime.timedelta(seconds=time)
        self._sh.scheduler.add(self._itemname_prefix+self.id() + '-Timer', self.__call__, value={'value': value, 'caller': caller}, next=next)

    def get_children_path(self):
        return [item._path
                for item in self.__children]

    def jsonvars(self):
        """
        Translation method from object members to json
        :return: Key / Value pairs from object members
        """
        return { "id": self._path,
                 "name": self._name,
                 "value" : self._value,
                 "type": self._type,
                 "attributes": self.conf,
                 "children": self.get_children_path() }

# alternative method to get all class members
#    @staticmethod
#    def get_members(instance):
#        return {k: v
#                for k, v in vars(instance).items()
#                if str(k) in ["_value", "conf"] }
#                #if not str(k).startswith('_')}

    def to_json(self):
       return json.dumps(self.jsonvars(), sort_keys=True, indent=2)



#####################################################################
# Cast Methods
#####################################################################

def _cast_str(value):
    if isinstance(value, str):
        return value
    else:
        raise ValueError


def _cast_list(value):
    if isinstance(value, str):
        try:
            value = literal_eval(value)
        except:
            pass
    if isinstance(value, list):
        return value
    else:
        raise ValueError


def _cast_dict(value):
    if isinstance(value, str):
        try:
            value = literal_eval(value)
        except:
            pass
    if isinstance(value, dict):
        return value
    else:
        raise ValueError


def _cast_foo(value):
    return value


# TODO: Candidate for Utils.to_bool()
# write testcase and replace
# -> should castng be restricted like this or handled exactly like Utils.to_bool()?
#    Example: _cast_bool(2) is False, Utils.to_bool(2) is True

def _cast_bool(value):
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


def _cast_scene(value):
    return int(value)


def _cast_num(value):
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

def _split_duration_value_string(value):
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


def _join_duration_value_string(time, value, compat=''):
    """
    joins a duration value string from its thre components

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


def _cache_read(filename, tz, cformat=CACHE_FORMAT):
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

def _cache_write(filename, value, cformat=CACHE_FORMAT):
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
def _fadejob(item, dest, step, delta):
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
