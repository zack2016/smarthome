#!/usr/bin/env python3
# vim: set encoding=utf-8 tabstop=4 softtabstop=4 shiftwidth=4 expandtab
#########################################################################
#  Copyright 2018-      Martin Sinn                         m.sinn@gmx.de
#########################################################################
#  This file is part of SmartHomeNG.
#
#  MQTT is a machine-to-machine (M2M)/"Internet of Things" connectivity
#  protocol. It was designed as an extremely lightweight publish/subscribe
#  messaging transport.
#
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


import logging
import json
import os
import socket    # for gethostbyname
import inspect

import paho.mqtt.client as mqtt

from lib.model.module import Module
from lib.module import Modules
from lib.shtime import Shtime
from lib.utils import Utils


class Mqtt(Module):
    version = '1.7.0'
    longname = 'MQTT module for SmartHomeNG'

    __plugif_CallbackTopics = {}         # for plugin interface
    __plugif_Sub = None

    _broker_version = '?'
    _broker = {}

    def __init__(self, sh, testparam=''):
        """
        Initialization Routine for the module
        """
        # TO DO: Shortname anders setzen (oder warten bis der Modul Loader es beim Laden setzt)
        self._shortname = self.__class__.__name__
        self._shortname = self._shortname.lower()

        self.logger = logging.getLogger(__name__)
        self._sh = sh
        self.shtime = Shtime.get_instance()
        self.logger.debug("Module '{}': Initializing".format(self._shortname))


        # get the parameters for the plugin (as defined in metadata plugin.yaml):
        self.logger.debug("Module '{}': Parameters = '{}'".format(self._shortname, dict(self._parameters)))
        try:
            self.broker_hostname = self._parameters['broker_host']
            self.broker_port = self._parameters['broker_port']
            self.broker_monitoring = self._parameters['broker_monitoring']
            self.qos = self._parameters['qos']
            self.last_will_topic = self._parameters['last_will_topic']
            self.last_will_payload = self._parameters['last_will_payload']
            self.birth_topic = self._parameters['birth_topic']
            self.birth_payload = self._parameters['birth_payload']
            # self.publish_items = self._parameters['publish_items']
            # self.items_topic_prefix = self._parameters['items_topic_prefix']
            self.username = self._parameters['user']
            self.password = self._parameters['password']

            # self.tls = self._parameters['tls']
            # self.ca_certs = self._parameters['ca_certs']
            self.acl = self._parameters['acl'].lower()
        except KeyError as e:
            self.logger.critical(
                "Module '{}': Inconsistent module (invalid metadata definition: {} not defined)".format(self._shortname, e))
            self._init_complete = False
            return

        # resolve broker name, is no ip address is specified
        try:
            self.broker_ip = socket.gethostbyname(self.broker_hostname)
        except Exception as e:
            self.logger.error("Error resolving '{}': {}".format(self.broker_hostname, e))
            self._init_complete = False
            return
        if self.broker_ip == self.broker_hostname:
            self.broker_hostname = ''

        # handle last_will and birth topic configuration
        if (self.last_will_topic != '') and (self.last_will_topic [-1] == '/'):
            self.last_will_topic = self.last_will_topic[:-1]
        if self.birth_topic == '':
            self.birth_topic = self.last_will_topic
        else:
            if self.birth_topic [-1] == '/':
                self.birth_topic = self.birth_topic[:-1]

        # if self.items_topic_prefix [-1] != '/':
        #     self.items_topic_prefix = self.items_topic_prefix + '/'


        if self.password == '':
            self.password = None

        # tls ...
        # ca_certs ...

        self.topics = {}  # subscribed topics
        self.logictopics = {}  # subscribed topics for triggering logics
        self.logicpayloadtypes = {}  # payload types for subscribed topics for triggering logics
        self.inittopics = {}  # topics for items publishing initial value ('mqtt_topic_init')


        # ONLY used for multiinstance handling of plugins?
        # # needed because self.set_attr_value() can only set but not add attributes
        # self.at_instance_name = self.get_instance_name()
        # if self.at_instance_name != '':
        #     self.at_instance_name = '@' + self.at_instance_name


        self._connected = False
        self._connect_result = ''

        # tls ...
        # ca_certs ...

        if not self.ConnectToBroker():
            self._init_complete = False
            return


        ip = get_local_ipv4_address()


    def start(self):
        """
        If the module needs to startup threads or uses python modules that create threads,
        put thread creation code or the module startup code here.

        Otherwise don't enter code here
        """
        # self.alive = True
        if (self.birth_topic != '') and (self.birth_payload != ''):
            self._client.publish(self.birth_topic, self.birth_payload, self.qos, retain=True)
        self._client.loop_start()
        # set the name of the paho thread for this plugin instance
        try:
            self._client._thread.name = "paho_" + self.longname
        except:
            self.logger.warning("Unable to set name for paho thread")


    def stop(self):
        """
        If the module has started threads or uses python modules that created threads,
        put cleanup code here.

        Otherwise don't enter code here
        """
        #        self.logger.debug("Module '{}': Shutting down".format(self.shortname))
        self._client.loop_stop()
        self.DisconnectFromBroker()
        # self.alive = False




# ----------------------------------------------------------------------------------------

    def cast_from_mqtt(self, datatype, raw_data):
        """
        Cast payload data to SmartHomeNG datatypes

        :param datatype:  datatype to which the data should be casted to
        :param raw_data:  data as received from the mqtt broker
        :return:          data casted to the datatype of the item it should be written to
        """
        str_data = raw_data.decode('utf-8')
        if datatype == 'str':
            data = str_data
        elif datatype == 'num':
            data = str_data
        elif datatype == 'bool':
            data = Utils.to_bool(str_data, default=False)
        elif datatype == 'list':
            if not((len(str_data) > 0) and (str_data[0] == '[')):
                str_data = '['+str_data+']'
            try:
                data = json.loads(str_data)
            except Exception as e:
                self.logger.error("cast_from_mqtt: datatype 'list', error '{}', data = ‘{}‘".format(e, str_data))
                data = str_data
        elif datatype == 'dict':
            try:
                data = json.loads(str_data)
            except Exception as e:
                self.logger.error("cast_from_mqtt: datatype 'dict', error '{}', data = ‘{}‘".format(e, str_data))
                data = str_data
        elif datatype == 'scene':
            data = '0'
            if Utils.is_int(str_data):
                if (int(str_data) >= 0) and (int(str_data) < 0):
                    data = str_data
        elif datatype == 'foo':
            data = raw_data
        else:
            self.logger.warning("cast_from_mqtt: Casting '{}' to '{}' is not implemented".format(raw_data, datatype))
            data = raw_data
        return data


    def cast_to_mqtt(self, data):
        """
        Cast SmartHomeNG datatypes to payload data

        :param datatype:  datatype to which the data should be casted to
        :param raw_data:  data as received from the mqtt broker
        :return:          data casted to the datatype of the item it should be written to
        """
        if isinstance(data, str):
            payload_data = data
        elif isinstance(data, int):
            payload_data = str(data)
        elif isinstance(data, float):
            payload_data = str(data)
        elif isinstance(data, bool):
            payload_data = 'true' if data else 'false'
        elif isinstance(data, list):
            payload_data = json.dumps(data)
        elif isinstance(data, dict):
            payload_data = json.dumps(data)
        else:
            self.logger.warning("cast_from_mqtt: Casting '{}' type = '{}' to payload fat is not implemented".format(data, type(data)))
            payload_data = str(data)
        return payload_data


    def get_qos_forTopic(self, item):
        """
        Return the configured QoS for a topic/item as an integer

        :param item:      item to get the QoS for
        :return:          Quality of Service (0..2)
        """
        qos = self.get_iattr_value(item.conf, 'mqtt_qos')
        if qos == None:
            qos = self.qos
        return int(qos)


    def on_mqtt_log(self, client, userdata, level, buf):
        # self.logger.info("on_log: {}".format(buf))
        return


    def ConnectToBroker(self):
        """
        Establish connection to MQTT broker
        """
        clientname = os.uname()[1] + '.MQTT-module'
        self.logger.info("Connecting to broker '{}:{}'. Starting mqtt client '{}'".format(self.broker_ip, self.broker_port, clientname))
        self._client = mqtt.Client(client_id=clientname)


        # set testament, if configured
        if (self.last_will_topic != '') and (self.last_will_payload != ''):
            retain = False
            if (self.birth_topic != '') and (self.birth_payload != ''):
                retain = True
            self._client.will_set(self.last_will_topic, self.last_will_payload, self.qos, retain=retain)
            self.logger.debug("- Last will set to topic '{}' and payload '{}' with retain set to '{}'".format(self.last_will_topic,self.last_will_payload, retain))

        if self.username != '':
            self._client.username_pw_set(self.username, self.password)
            self.logger.debug("- Using broker login information user '{}' and password".format(self.username))
        self._client.on_connect = self.on_connect
        self._client.on_log = self.on_mqtt_log
        self._client.on_message = self.on_mqtt_message
        try:
            self._client.connect(self.broker_ip, self.broker_port, 60)
            self.logger.debug("- Sending connect request to broker")
        except Exception as e:
            self.logger.error('Connection error: {0}'.format(e))
            return False
        return True


    def on_connect(self, client, userdata, flags, rc):
        """
        Callback function called on connect
        """
        self._connect_result = mqtt.connack_string(rc)

        if rc == 0:
            self.logger.info("Connection returned result '{}' (userdata={}) ".format(mqtt.connack_string(rc), userdata))
            self._connected = True

            self._client.subscribe('$SYS/broker/version', qos=0)
            self._client.subscribe('$SYS/broker/clients/active', qos=0)
            self._client.subscribe('$SYS/broker/subscriptions/count', qos=0)
            self._client.subscribe('$SYS/broker/messages/stored', qos=0)

            if self.broker_monitoring:
                self._client.subscribe('$SYS/broker/uptime', qos=0)
                self._client.subscribe('$SYS/broker/retained messages/count', qos=0)
                self._client.subscribe('$SYS/broker/load/messages/received/1min', qos=0)
                self._client.subscribe('$SYS/broker/load/messages/received/5min', qos=0)
                self._client.subscribe('$SYS/broker/load/messages/received/15min', qos=0)
                self._client.subscribe('$SYS/broker/load/messages/sent/1min', qos=0)
                self._client.subscribe('$SYS/broker/load/messages/sent/5min', qos=0)
                self._client.subscribe('$SYS/broker/load/messages/sent/15min', qos=0)

            # subscribe to topics to listen for items
            for topic in self.topics:
                item = self.topics[topic]
                self._client.subscribe(topic, qos=self.get_qos_forTopic(item) )
                self.logger.info("Listening on topic '{}' for item '{}'".format( topic, item.id() ))

            # subscribe to topics to listen for triggering logics
            for topic in self.logictopics:
                logic = self.logictopics[topic]
                self._client.subscribe(topic, qos=self.qos)
                self.logger.info("Listening on topic '{}' for logic '{}'".format( topic, str(logic) ))

            for topic in self.inittopics:
                item = self.inittopics[topic]
                self.logger.info("Publishing and initialising topic '{}' for item '{}'".format( topic, item.id() ))
                self.update_item(item)
            self.logger.info("self.topics = {}".format(self.topics))

            return

        self.logger.warning("Connection returned result '{}': {} (client={}, userdata={}, self._client={})".format( str(rc), mqtt.connack_string(rc), client, userdata, self._client ))
        if rc == 5:
            self.DisconnectFromBroker()


    def on_disconnect(self, client, userdata, rc):
        """
        Callback function called on disconnect
        """
        self.logger.info("Disconnection returned result '{}' ".format(rc))
        return


    def DisconnectFromBroker(self):
        """
        Stop all communication with MQTT broker
        """
        self._client.unsubscribe('$SYS/broker/version')
        self._client.unsubscribe('$SYS/broker/clients/active')
        self._client.unsubscribe('$SYS/broker/subscriptions/count')
        self._client.unsubscribe('$SYS/broker/messages/stored')

        if self.broker_monitoring:
            self._client.unsubscribe('$SYS/broker/uptime')
            self._client.unsubscribe('$SYS/broker/retained messages/count')
            self._client.unsubscribe('$SYS/broker/load/messages/received/1min')
            self._client.unsubscribe('$SYS/broker/load/messages/received/5min')
            self._client.unsubscribe('$SYS/broker/load/messages/received/15min')
            self._client.unsubscribe('$SYS/broker/load/messages/sent/1min')
            self._client.unsubscribe('$SYS/broker/load/messages/sent/5min')
            self._client.unsubscribe('$SYS/broker/load/messages/sent/15min')

        for topic in self.topics:
            item = self.topics[topic]
            self.logger.debug("Unsubscribing topic '{}' for item '{}'".format(str(topic), str(item.id())))
            self._client.unsubscribe(topic)

        for topic in self.logictopics:
            logic = self.logictopics[topic]
            self.logger.debug("Unsubscribing topic '{}' for logic '{}'".format(str(topic), str(logic.id())))
            self._client.unsubscribe(topic)

        self.logger.info("Stopping mqtt client '{}'. Disconnecting from broker.".format(self._client._client_id.decode('utf-8')))
        if (self.last_will_topic != '') and (self.last_will_payload != ''):
            if (self.birth_topic != '') and (self.birth_payload != ''):
                self._client.publish(self.last_will_topic, self.last_will_payload + ' (shutdown)', self.qos, retain=True)
                self.logger.debug("- Disconnect: Last will sent with topic '{}' and payload '{}' and retain set to '{}'".format(self.last_will_topic,self.last_will_payload, True))

        self._client.loop_stop()
        self._connected = False
        self._client.disconnect()


    def seconds_to_displaysting(self, sec):
        """
        Convert number of seconds to time display sting
        """
        min = sec // 60
        sec = sec - min * 60
        std = min // 60
        min = min - std * 60
        days = std // 24
        std = std - days * 24

        result = ''
        if days == 1:
            result += str(days) + ' ' + self.translate('Tag') + ', '
        elif days > 0:
            result += str(days) + ' ' + self.translate('Tage') + ', '
        if std == 1:
            result += str(std) + ' ' + self.translate('Stunde') + ', '
        elif std > 0:
            result += str(std) + ' ' + self.translate('Stunden') + ', '
        if min == 1:
            result += str(min) + ' ' + self.translate('Minute') + ', '
        elif min > 0:
            result += str(min) + ' ' + self.translate('Minuten') + ', '
        if sec == 1:
            result += str(sec) + ' ' + self.translate('Sekunde')
        elif sec > 0:
            result += str(sec) + ' ' + self.translate('Sekunden')
        return result


    def broker_uptime(self):
        """
        Return formatted uptime of broker
        """
        try:
            return self.seconds_to_displaysting(int(self._broker['uptime']))
        except:
            return '-'


    def on_mqtt_message(self, client, userdata, message):
        """
        Callback function to handle received messages for items and logics

        :param client:    the client instance for this callback
        :param userdata:  the private user data as set in Client() or userdata_set()
        :param message:   an instance of MQTTMessage.
                          This is a class with members topic, payload, qos, retain.
        """
        item = self.topics.get(message.topic, None)
        if item != None:
            payload = self.cast_from_mqtt(item.type(), message.payload)
            self.logger.info("Received topic '{}', payload '{}' (type {}), QoS '{}', retain '{}' for item '{}'".format( message.topic, str(payload), item.type(), str(message.qos), str(message.retain), str(item.id()) ))
            item(payload, 'MQTT')

        logic = self.logictopics.get(message.topic, None)
        if logic != None:
            datatype = self.logicpayloadtypes.get(message.topic, 'foo')
            payload = self.cast_from_mqtt(datatype, message.payload)
            self.logger.info("Received topic '{}', payload '{} (type {})', QoS '{}', retain '{}' for logic '{}'".format( message.topic, str(payload), datatype, str(message.qos), str(message.retain), str(logic) ))
            self._sh.logics.trigger_logic(logic, source='MQTT', by=message.topic, value=payload)

        if (item == None) and (logic == None):
            if message.topic == '$SYS/broker/clients/active':
                self._broker['active_clients'] = message.payload.decode('utf-8')
            elif message.topic == '$SYS/broker/subscriptions/count':
                self._broker['subscriptions'] = message.payload.decode('utf-8')
            elif message.topic == '$SYS/broker/messages/stored':
                self._broker['stored_messages'] = message.payload.decode('utf-8')
            elif message.topic == '$SYS/broker/retained messages/count':
                self._broker['retained_messages'] = message.payload.decode('utf-8')
            elif message.topic == '$SYS/broker/uptime':
                self._broker['uptime'] = message.payload.decode('utf-8').split(' ')[0]
            elif message.topic == '$SYS/broker/load/messages/received/1min':
                self._broker['msg_rcv_1min'] = message.payload.decode('utf-8')
            elif message.topic == '$SYS/broker/load/messages/received/5min':
                self._broker['msg_rcv_5min'] = message.payload.decode('utf-8')
            elif message.topic == '$SYS/broker/load/messages/received/15min':
                self._broker['msg_rcv_15min'] = message.payload.decode('utf-8')
            elif message.topic == '$SYS/broker/load/messages/sent/1min':
                self._broker['msg_snt_1min'] = message.payload.decode('utf-8')
            elif message.topic == '$SYS/broker/load/messages/sent/5min':
                self._broker['msg_snt_5min'] = message.payload.decode('utf-8')
            elif message.topic == '$SYS/broker/load/messages/sent/15min':
                self._broker['msg_snt_15min'] = message.payload.decode('utf-8')
            elif message.topic == '$SYS/broker/version':
                self.log_brokerinfo(message.payload)
                self._broker['version'] = message.payload.decode('utf-8')
                # self._client.unsubscribe('$SYS/broker/version')
            else:
                self.logger.error("on_mqtt_message: Received topic '{}', payload '{}', QoS '{}, retain '{}'' WITHOUT matching item/logic".format( message.topic, message.payload, str(message.qos), str(message.retain) ))


    def log_brokerinfo(self, payload):
        """
        Log info about broker connection
        """
        payload = self.cast_from_mqtt('str', payload)
        if self.broker_hostname == '':
            address = str(self.broker_ip)+':'+str(self.broker_port)
        else:
            address = self.broker_hostname + ' (' + str(self.broker_ip)+':'+str(self.broker_port) + ')'
        self.logger.info("Connected to broker '{}' at address {}".format( str(payload), address ))



    # ---------------------------------------------------------------------------------
    # Following functions build the interface for other plugins which want to use MQTT
    #

    def publish_topic(self, source, topic, payload, qos=None, retain=False):
        """
        method to publish a topic

        this method is to be called from plugins or logics

        :param source:     name of plugin or logic which want's to publish a topic
        :param topic:      topic to publish to
        :param payload:    payload to publish
        :param qos:        quality of service (optional) otherwise the default of the mqtt plugin will be used
        :param retain:     retain flag (optional)
        """
        self.logger.info("Function '{}()' - called by '{}()'".format(inspect.stack()[0][3], inspect.stack()[1][3]))
        self.logger.info("inspect.stack()[2][3] = '{}', inspect.stack()[3][3] = '{}'".format(inspect.stack()[2][3], inspect.stack()[3][3]))
        if not self._connected:
            return False

        if qos == None:
            qos = self.qos
        self.logger.info("Plugin/Logic '{}' is publishing topic '{}' with payload '{}' (qos={}, retain={})".format( source, topic, payload, qos, retain ))
        payload = self.cast_to_mqtt(payload)
        self._client.publish(topic=topic, payload=payload, qos=qos, retain=retain)
        return True


    def subscribe_topic(self, source, topic, qos=None):
        """
        function to subscribe to a topic

        this function is to be called from plugins, which are utilizing the mqtt module

        :param source:     name of plugin or logic which want's to publish a topic
        :param topic:      topic to subscribe to
        :param qos:        quality of service (optional) otherwise the default of the mqtt plugin will be used
        """
        if qos == None:
            qos = self.qos
        self._client.subscribe(topic, qos=qos)
        self.logger.info("Plugin/Logic '{}' is subscribing to topic '{}'".format( source, topic ))



    def subscribe_topic_from_logic(self, source, topic, qos=None, payload_type='str', logic=None):
        """
        function to subscribe to a topic

        this function is to be called from plugins, which are utilizing the mqtt module

        :param source:     name of plugin or logic which want's to publish a topic
        :param topic:      topic to subscribe to
        :param qos:        quality of service (optional) otherwise the default of the mqtt plugin will be used
        """
        self.logger.info("Function '{}()' - called by '{}()'".format(inspect.stack()[0][3], inspect.stack()[1][3]))
        self.logger.info("inspect.stack()[2][3] = '{}', inspect.stack()[3][3] = '{}'".format(inspect.stack()[2][3], inspect.stack()[3][3]))
        if qos == None:
            qos = self.qos
        self._client.subscribe(topic, qos=qos)
        self.logger.info("Logic '{}' is subscribing to topic '{}'".format( source, topic ))

        self.logictopics[topic] = logic

        if payload_type.lower() in ['str', 'num', 'bool', 'list', 'dict', 'scene']:
            self.logicpayloadtypes[topic] = payload_type.lower()
        else:
            self.logger.warning("Invalid payload-datatype specified for logic '{}', ignored".format(logic))



    def subscription_callback(self, source, sub, callback=None):
        """
        method set a callback function

        this method is to be called from plugins or logics to name a defined function which is handeling
        the incoming topics which it has subscribed to

        :param source:     name of plugin or logic which want's to publish a topic
        :param plug:       identifier of plugin/logic using the MQTT plugin
        :param sub:        topic(s) which should call the callback function
                           example: 'device/eno-gw1/#'
        :param callback:   quality of service (optional) otherwise the default of the mqtt plugin will be used
        """
        if self.__plugif_Sub == None:
            if sub != '':
                if sub[-2:] != '/#':
                    if sub[-1] == '/':
                        sub = sub[:-1]
                    self.__plugif_Sub = sub + '/#'
                else:
                    self.__plugif_Sub = sub

                self.logger.warning("Plugin/Logic '{}' is registering a callback function for subscription of topics '{}'".format( source, str(self.__plugif_Sub) ))
                self._client.message_callback_add(self.__plugif_Sub, callback)
        else:
            if sub == '':
                self.logger.warning("Plugin/Logic '{}' is clearing the callback function for subscription of topics '{}'".format( source, str(self.__plugif_Sub) ))
                self._client.message_callback_remove(self.__plugif_Sub)
                self.__plugif_Sub = None
            else:
                self.logger.error("Plugin/Logic '{}' is trying to register a second callback function (for subscription of topics '{}')".format( source, str(self.__plugif_Sub) ))



# ----------------------------------------------------------------------------------------

def get_local_ipv4_address():
    """
    Get's local ipv4 address of the interface with the default gateway.
    Return '127.0.0.1' if no suitable interface is found

    :return: IPv4 address as a string
    :rtype: string
    """
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 1))
        IP = s.getsockname()[0]
    except:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP
