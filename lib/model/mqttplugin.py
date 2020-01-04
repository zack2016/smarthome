#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
#  Copyright 2019-      Martin Sinn                       m.sinn@gmx.de
#########################################################################
#  This file is part of SmartHomeNG
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
#  along with SmartHomeNG  If not, see <http://www.gnu.org/licenses/>.
#########################################################################

import logging

from lib.module import Modules
from lib.shtime import Shtime


class MqttPlugin():

    _broker_version = '?'
    _broker = {}
    broker_config = {}
    broker_monitoring = False

    _item_values = {}                    # dict of dicts


    def mqtt_init(self):
        """
        Initialization Routine for the mqtt extension class to SmartPlugin
        """
        # get instance of MQTT module
        try:
            self.mod_mqtt = Modules.get_instance().get_module(
                'mqtt')  # try/except to handle running in a core version that does not support modules
        except:
            self.mod_mqtt = None
        if self.mod_mqtt == None:
            self.logger.error("Module MQTT could not be initialized. The plugin is not starting")
            self._init_complete = False
            return False

        self._subscribed_topics = {}  # subscribed topics (a dict of dicts)
        self._subscribe_current_number = 0  # current number of the subscription entry

        # get broker configuration (for display in web interface)
        self.broker_config = self.mod_mqtt.get_broker_config()

        return True


    def get_broker_info(self):
        if self.mod_mqtt:
            (self._broker, self.broker_monitoring) = self.mod_mqtt.get_broker_info()


    def broker_uptime(self):
        """
        Return formatted uptime of broker
        """
        if self.shtime is None:
            self.shtime = Shtime.get_instance()
        try:
            return self.shtime.seconds_to_displaysting(int(self._broker['uptime']))
        except:
            return '-'


    def _start_subscriptions(self):
        """
        Start subscription to all topics
        """
        if self.mod_mqtt:
            for topic in self._subscribed_topics:
                # start subscription to all items for this topic
                for item_path in self._subscribed_topics[topic]:
                    current = str(self._subscribed_topics[topic][item_path]['current'])
                    qos = self._subscribed_topics[topic][item_path].get('qos', None)
                    payload_type = self._subscribed_topics[topic][item_path].get('payload_type', None)
                    # callback = self._subscribed_topics[topic][item_path].get('callback', None)
                    bool_values = self._subscribed_topics[topic][item_path].get('bool_values', None)
                    self.logger.info("run(): Subscribing to topic {} for item {}".format(topic, item_path))
                    self.mod_mqtt.subscribe_topic(self.get_shortname() + '-' + current, topic, callback=self.on_mqtt_message,
                                                  qos=qos, payload_type=payload_type, bool_values=bool_values)
        return

    def _stop_subscriptions(self):
        """
        Stop subscription to all topics
        """
        if self.mod_mqtt:
            for topic in self._subscribed_topics:
                # stop subscription to all items for this topic
                for item_path in self._subscribed_topics[topic]:
                    current = str(self._subscribed_topics[topic][item_path]['current'])
                    self.logger.info("stop(): Unsubscribing from topic {} for item {}".format(topic, item_path))
                    self.mod_mqtt.unsubscribe_topic(self.get_shortname() + '-' + current, topic)
        return

    def _add_subscription(self, topic, payload_type, bool_values, item):
        """

        :param topic:        topic to subscribe to
        :param payload_type: payload type of the topic (for this subscription to the topic)
        :param bool_values:  bool values (for this subscription to the topic)
        :param item:         item that should receive the payload as value
        :return:
        """

        # test if topic is new
        if not self._subscribed_topics.get(topic, None):
            self._subscribed_topics[topic] = {}
        # add this item to topic
        self._subscribed_topics[topic][item.path()] = {}
        self._subscribe_current_number += 1
        self._subscribed_topics[topic][item.path()]['current'] = self._subscribe_current_number
        self._subscribed_topics[topic][item.path()]['item'] = item
        self._subscribed_topics[topic][item.path()]['qos'] = None
        self._subscribed_topics[topic][item.path()]['payload_type'] = payload_type
        # self._subscribed_topics[topic][item.path()]['callback'] = self.on_mqtt_message
        self._subscribed_topics[topic][item.path()]['bool_values'] = bool_values

        return


    def on_mqtt_message(self, topic, payload, qos=None, retain=None):
        """
        Callback function to handle received messages

        :param topic:
        :param payload:
        :return:
        """
        self.logger.info(self.get_loginstance() + "on_mqtt_message: Received topic '{}', payload '{} (type {})', QoS '{}', retain '{}' ".format(topic, payload, type(payload), qos, retain))

        # get item for topic
        if self._subscribed_topics.get(topic, None):
            # at least 1 item has subscribed to this topic
            for item_path in self._subscribed_topics[topic]:
                item = self._subscribed_topics[topic][item_path].get('item', None)
                if item != None:
                    self.logger.info(self.get_loginstance()+"Received topic '{}', payload '{}' (type {}), QoS '{}', retain '{}' for item '{}'".format( topic, payload, item.type(), qos, retain, item.id() ))
                    item(payload, self.get_shortname())
                    # Update dict for periodic updates of the web interface
                    self._update_item_values(item, payload)
        else:
            self.logger.error("on_mqtt_message: No definition found for subscribed topic '{}'".format(topic))
        return


    def _publish_topic(self, item, topic, payload, qos=None, retain=False, bool_values=None):
        self.logger.info("_publish_topic: Item '{}' -> topic '{}', payload '{}', QoS '{}', retain '{}'".format(item.id(), topic, payload, qos, retain))
        self.mod_mqtt.publish_topic(self.get_shortname(), topic, payload, qos, retain, bool_values)

        # Update dict for periodic updates of the web interface
        self._update_item_values(item, payload)
        return


    def _update_item_values(self, item, payload):
        """
        Update dict for periodic updates of the web interface

        :param item:
        :param payload:
        """
        if not self._item_values.get(item.id()):
            self._item_values[item.id()] = {}
        if isinstance(payload, bool):
            self._item_values[item.id()]['value'] = str(payload)
        else:
            self._item_values[item.id()]['value'] = payload
        self._item_values[item.id()]['last_update'] = item.last_update().strftime('%d.%m.%Y %H:%M:%S')
        self._item_values[item.id()]['last_change'] = item.last_change().strftime('%d.%m.%Y %H:%M:%S')
        self.logger.info("_update_item_values: self._item_values = {}".format(self._item_values))
        return
