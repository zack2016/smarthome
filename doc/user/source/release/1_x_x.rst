==========================
Release 1.x - tt. mmm 2020
==========================

Es gibt eine Menge neuer Features im Core von SmartHomeNG und den Plugins.

.. note::

    Diese Release Notes sind ein Arbeitsstand.

     - Berücksichtigt sind Commits im smarthome Repository bis incl. 6. Dezember 2020
       (test.mock: Added shng_status to MockSmarthome)
     - Berücksichtigt sind Commits im plugins Repository bis incl. 6. Dezember 2020
       (Merge pull request #423 from onkelandy/kodi ...)



Unterstützte Python Versionen
=============================

Die älteste offiziell unterstützte Python Version für SmartHomeNG Release 1.8 ist Python 3.6.
(Siehe auch *Hard- u. Software Anforderungen* im Abschnitt *Installation* zu unterstützten Python Versionen)

..
    Das bedeutet nicht unbedingt, dass SmartHomeNG ab Release 1.8 nicht mehr unter älteren Python Versionen läuft,
    sondern das SmartHomeNG nicht mehr mit älteren Python Versionen getestet wird und das gemeldete Fehler mit älteren
    Python Versionen nicht mehr zu Buxfixen führen.

    Es werden jedoch zunehmend Features eingesetzt, die erst ab Python 3.6 zur Verfügung stehen.
    So ist Python 3.6 die minimale Vorraussetzung zur Nutzung des neuen Websocket Moduls.


Absolute Minimum Python Version
===============================

Die Minimum Python Version in der SmartHomeNG startet wurde auf v3.6 angehoben, da Python 3.5 im September 2020
End-of-Life (End of security fixes) gegangen ist. Bei einer Neuinstallation wird jedoch empfohlen auf einer
der neueren Python Versionen (3.7 oder 3.8) aufzusetzen.

.. important::

   Mit dem kommenden Release 1.8 werden die unterstützten Python Versionen
   :doc:`(wie hier beschrieben) </installation/anforderungen>` auf **Python 3.6, 3.7, 3.8** angehoben. Python 3.6
   hat eine Reihe sehr interessanter Features und Verbesserungen gebracht, die dann in SmartHomeNG genutzt
   werden können.

   Sollten solche neuen Features in den Core Einzug halten, wird die **Absolute Minimum Python Version** auf 3.6
   angehoben werden. Sollten die Features nur in Plugins genutzt werden, so können nur solche Plugins nicht genutzt
   werden, wenn eine ältere Python Version als 3.6 eingesetzt wird.

   Außerdem hat Python 3.5 am 30. September 2020 sein End-of-Life erreicht. Es wird für Python 3.5 also keine Updates
   (auch keine Security Updates) mehr geben. Der Stand wurde von den Entwicklern eingefroren und es gibt für die
   Version keinen Branch mehr im Repository.


Bugfixes in the CORE
--------------------

* lib.item:

  * Fixed setting of 'updated_by' property, if value was changed by on_update/on_change and syntax
    without assignement was used
  * Fixed merging structs with same attribute/item in subtree
  * Fixed relative item evaluation when usind '.property'
  * Fixed bug in referencing an attribute of grandpartent item

* lib.shpypi

  * Fix to be able to handle first run of smarthomeng (without any installed requirements)

* lib.shtime:

  * Bugfix for public holidays

* lib.smarthome

  * Fix in deprecated methods to call self.<method> instead of sh.<method>



Updates in the CORE
-------------------

* Creating var directory and sub directories, if they don't exist
* Experimental support for running SmartHomeNG on Windows
* add Python package 'portalocker' for os independant file locking for PID
* Removed tests for Python 3.5

* bin.smarthome:

  * Changed exitcode to 5 for restarts to signal systemctl that the service should be restarted
  * added commandline parameter 'pip3_command' to be able to install core requirements if the
    pip3 command is not at the default location
  * streamlined bin.smarthome.py after isolating SmartHome class from bin/smarthome.py to lib.smarthome.py

* Items:

  * ...

* Logics:

  * ...

* lib.db:

  * Added name of used database driver to log message
  * Some cursor operations are now done only, if the cursor is not None

* lib.item:

  * Refactored library
  * Added log_change output during initialization phase
  * Added Methods for validity checking of plugin specific attributes
  * Added filename to attribute-not-defined warning; excluded env.* items from warnings
  * Implemented check for datatype of plugin-specific item attributes
  * Changed Thread name for calls to scheduler.trigger()
  * eval, on_update, on_change, eval_trigger: Now support shtime.*, items.* and math.*
  * implemented referencing attributes of greatgrandparent items
  * Added further info to shng_status text

* lib.metadata:

  * Added handling of plugin specific attributes
  * Make sure, itemprefixdefinitions exists
  * Implemented check for datatype of plugin-specific item attributes
  * Implemented item-attribute checking valid_min, valid_max, valid_list
  * Added valid_list_ci for case insensitive plugin parameters and item attributes
  * Plugin parameters can now be dicts

* lib.model.smartplugin:

  * SmartPlugins can now update their own section in ../etc/plugin.yaml (only parameters that are defined
    in their metadata (<plugin>/plugin.yaml)
  * Changed logging in update_config_section()

* lib.module:

  * Thread names adjusted

* lib.network:

  * Introduced iowait instead of select.poll() which is not platform portable
  * terminator not ignored anymore
  * Changed building of thread names for tcp_client and tcp_server
  * Added try/except when getting number of active connections

* lib.plugin:

  * Added handling of plugin specific attributes

* lib.scheduler:

  * scheduler.change() now accepts the same values for parameter cycle as scheduler.add does

* lib.shpypi:

  * Configuration of pip_command now overrides other methods of finding the right pip3 command
  * If getting path to pip from path to os package (os.__file__), try file 'pip3', if file 'pip 3.<x>' is not found
  * Write output of PIP3 command to file in log directory
  * Requesting newest version of a package in the order they are displayed in the admin gui
  * Changed access to pypi.org because the rpc api is deprecated. Now using rss feed data
  * newest release is updated daily (not only on first access)
  * Adjusted some log levels
  * crontab for scheduler can be configured in etc/smarthome.yaml

* lib.smarthome

  * Isolated SmartHome class from bin/smarthome.py to lib.smarthome.py (to enable documentation in Sphinx)
  * changed foreground (-f) option to write a pidfile (to enable showing od pid and to restart with Admin GUI
    when in foreground mode)
  * Added export of threadinfo to support tool cpuusage
  * Added support for tool cpuusage.py

* lib.tools:

  * Extended tools.ping to work with windows

* Modules:

  * admin:

    * Changed check for blog links from dedicated thread to scheduler task
    * Added display of scheduler-triggers
    * Added installed version to service info for 1-wire
    * Fixed getting version for owserver (owserver sends version info to stderr)
    * Changed var name to build pip_log_name
    * Added 'waiting...' on Core Restart and adjusted timing of messages
    * Thread names adjusted
    * eval / eval checker: Allows API access through items.<method> instead of having to use sh.items.<method>
    * eval checker: Now support shtime.*, items.* and math.*
    * Added details to information while restarting core
    * added display of system pid for threads (when running under Python 3.8 and up)

  * http:

    * Set maximum version of cherrypy to avoid problem with cheroot 8.4.4
    * Added get methods for service user and password. get_service_password always returns the
      hashed password - which is generated in case the user has entered a plain text password in the yaml file
    * Updated bootstrap from 4.3.1 to 4.5.3
    * Changed global template for plugin webinterface to support up to 6 tabs
    * Webinterfaces now have a prefix '/plugin' in the url -> http://<ip>:<port>/plugin/<plugin_name>

  * mqtt:

    * Fixed an incompatibility with Windows
    * Thread names adjusted

  * websocket:

    * Initial commit
    * known issue: periodic updates for series (plots) do not work yet
    * Added janus to requirements
    * Changed loop.create_task() for Python 3.7
    * Improved exception handling on network hickups

* shngAdmin:

  * Switched to new menu bar
  * Update to system properties page
  * Updated pages under system and services menu
  * Update to logics list and scene list and scene configuration page (basic css grid implementation)
  * Update to logics parameter and scheduler lists (basic css grid implementation); Added parameter to
    allow click on header of dropdown menu
  * Changed handling of boolean value field in item tree
  * Added tab to configure upcoming websocket module
  * Update to system properties page
  * Translations for new startup status; adjusted display size of log files to prevent scrolling of browser window.
  * Better handling for exception while testing for blog articles
  * Added gui_type 'readonly' for plugin parameters that are configured by the plugin itself
  * implemented handling for plugin parameter 'configuration_needed'
  * added spinner when loading information of configured plugins

* tests:

  * Changed plugin test for cli to reflect change to multi-instance
  * Adjusted test_smarthome to reflect changes (bin.smarthome -> lib.smarthome)
  * Added shng_status to MockSmarthome



New Plugins
-----------

For details of the changes of the individual plugins, please refer to the documentation of the respective plugin.

* bsblan:

  * This plugin connects your BSB-LPB-LAN-Adapter (https://github.com/1coderookie/BSB-LPB-LAN/) to SmarthomeNG
  * BSB-LPB-LAN is a LAN Interface for Boiler-System-Bus (BSB) that enables you to control heating systems from
    Elco or Brötje and similar Systems
  * Reads out all available Boiler data

* hue2:

  * New plugin for Philips Hue
  * Has a web interface and extensive documentation
  * Authorization at a Hue bride integrated into the plugin and is done through the web interface
  * The plugin has a feature to find acive Hue bridges in the local network
  * The plugin support only one bridge per instance. It ia multi instance capable though
  * The plugin comes with structure templates to ease the configuration of items
  * Added two smartVISU widgets (color_control and attributes)
  * It is no direct replacement for the old hue plugin, since it is not configuration compatible
  * Not yet feature complete

* smartvisu: New plugin to replace visu_smartvisu plugin -

  * Not yet feature complete
  * Checks for the usage of deprecated or removed widgets while generating visu pages
  * For sv v2.9 and up templates (index.html, rooms.html from sv are used instead of templates of plugin
  * Structure of smartVISU navigation can optionally be defined in /etc/visu.yaml


Plugin Updates and Bugfixes
---------------------------

* appletv:

  * Complete rewrite

* asterisk:

  * Now has extensive metadata in plugin.yaml

* avm:

  * added set hkr window open command
  * Added warning for negative durations
  * Added item attribute avm_wlan_index to metadata
  * Added support for tam index
  * Fixed problem with get_iattr_value for index parameter
  * Added description to meta data avm_wlan_index
  * Added description for avm_wlan_index
  * **Changed attribute name** "mac" to "avm_mac"
  * Attribute avm_mac requires instance added now when multiple plugin instances are used
  * Fixed avm_wlan_index for citem
  * Fixed attribute definition for wifi index
  * Adjusted thread name for Monitoring-Service
  * Replaced deprecated smartVISU widgets in widget_avm
  * Avoid double exception, Initialize dictionary
  * fixed typo in metadata
  * fixed exception occurring on error in hkr device readout

* buderus:

  * Improved the documentation and added structs
  * Removed some non working URLs
  * Improved and tested

* casambi:

  * Cleaned-up webinterface
  * Fixed error when API key is no longer valid
  * set state from develop to ready
  * added user_doc

* cli:

  * Add a webinterface
  * now uses lib.network instead of lib.connection
  * Uses now latest shtime API
  * Adjusted name of tcp_server thread


* database:

  * Added automatic restart if database file could not be opened - That happens often with sqlite3 after
    switching from older Python version to 3.8 or back from 3.8 to older version.
  * Restart shng on stall of db-driver only for sqlite3 databases
  * Replaced time.sleep by event wait with timeout
  * Fixed conversion bug for webinterface and comparison
  * Changed loglevel for entry "Cache not available in database for item ..." to info
  * Corrected german description of item attribute 'database'
  * Changed valid_list item attributes to valid_list_ci
  * Greyed out delete button for most recent value
  * fix that delete button is only greyed out on most recent day ("now")
  * fix for zero padded numbers in if comparison
  * fix for day = None
  * Added mouse-over text for greyed delete button
  * corrected typos in metadata
  * disabled item delete button for first AND second item as both cannot be deleted until next value comes in

* dashbutton:

  * use latest shtime API

* datalog:

  * Uses now latest shtime API

* drexelundweiss:

  * improve reading of txt files if line ending format differs
  * include PANEL pcb to set and get room temperature, etc.
  * fix line endings in txt files
  * fix x2_plus lineendings and update PANEL info
  * Addes user_doc

* easymeter:

  * Updated to SmartPlugin

* enigma2:

  * Added item attribute enigma2_remote_command_id to metadata
  * Replaced deprecated smartVISU widgets in widget_enigma2

* enocean:

  * Fixed serial close; added possibility for debug outputs from eepparser
  * Completed plugin metadata
  * Improved documentation for reading transceiver chip's BaseID
  * Rework for Eltako Shutter Actor FSB71
  * Add device name for custom EEPs and small improvements
  * completed metadata

* garminconnect:

  * Added some error handling acc. to related open source lib

* gpio:

  * Fixed recently introduced bug in gpio out control

* homematic:

  * Adjusted thread name (for server thread)
  * Fixed bug in items display of web interface

* helios:

  * logic uses shtime now

* hue:

  * Fixed a "RuntimeError: dictionary changed size during iteration" error
  * Added item attribute definitions to metadata (descriptions are still missing)
  * Replaced deprecated smartVISU widgets in widget_hue

* knx:

  * Fix for metadata
  * Suppress get_process_info on windows systems
  * Correct caller check in update item
  * Using lib/network instead of lib/connection.py
  * Correct caller check in update item and more verbose debug info
  * Add a logo to webinterface
  * Upload a knxproj file and show with linked items in webinterface
  * Able to read knxproj and opc files for comparison of GroupAddresses
  * Adjusted plugin version
  * Added support thread
  * update docs and set js+css resource to local source
  * Modified prompts in web interface to be usable on (tablet) devices with smaller viewport (1024 pixels wide)

* kodi:

  * expand valid list for kodi_item

* lirc:

  * Added definitions of the item_attributes to metadatalirc: Added definitions of the item_attributes to metadata
  * Replace connection lib by network lib and some minor tweaks.
    Problem: Version is not detected correctly. Will be fixed in next major update

* mpd:

  * Add item attributes to plugin.yaml
  * Internal refactoring
  * Add support thread to metadata

* neato:

  * Added debug outputs
  * Completed plugin metadata
  * Catching empty security keys
  * added new Oauth2 based authentication feature for Vorwerk robots (compatible with MyKobold APP's interface)
  * added WebInterface with OAuth2 step-by-step guide
  * robustness improvements
  * improved vendor selection
  * fixed plugin.yaml
  * changed attribute charge_percentage from string to integer
  * preliminary fix for number of robots readout with legacy login
  * Adapted readme and fixed roboter count
  * completed metadata
  * new feature to write token obtained via WebIf directly to plugin.yaml with new function update_config_section()
  * added alert text output, e.g. dustbin full

* network:

  * Improve documentation, add user_doc.rst
  * prepare for lib\connection removal

* nuki:

  * Added detected nuki ids to web interface
  * Changed info about updater to self.get_shortname()
  * Added door sensor states
  * Show door states in Webinterface
  * Added trigger for door states
  * Added some default handling for updating webif
  * Migration from connection lib to mod_http services interface
  * Extended error log, if mod_http is not configured
  * adapted copyright header, removed MultiInstance from code

* odlinfo:

  * added check if key is present in result data

* onewire:

  * Removed sleep and uses threading.event(), added counter options to plugin.yaml

* openweathermap:

  * Added x, y, and z attributes to item attribute definition
  * Added example of rain_layer and cloud_layer to README

* operationlog:

  * refined metadata
  * clean up, improve inline docu, scaffold webif and tests

* robonect:

  * Added robonect_remote_index to item attributes of plugin
  * Added valid list for robonect_data_type
  * Added items for translated texts (in language of shng)
  * Added some checks for reading weather data
  * Catching invalid json bug in newest robonect firmware
  * Added timeout of 15 sec for get_mower_information_from_api to avoid problems with incomplete json
    returned from robonect module

* rpi1wire:

  * New Version 1.7.0 with webinterface
  * Removed invalid content from metadata to make it a valid yaml file

* rrd:

  * Create rrd directory if it does not exist

* rtr:

  * Removed some parameter checks which are in core alread and added webinterface

* simulation:

  * fix plugin.yaml, include struct. Create user_doc and sv_widget based on README

* sma_em:

  * Updated to newest code in SMA-EM project
  * added logger.error instead of print
  * Reformatted code
  * updated version

* solarlog:

  * Uses now latest shtime API

* sonos:

  * Added debug outputs
  * Switched to lib.item import Items to be compatible with latest develop core
  * Added item attribute definitions to metadata
  * Completed plugin metadata
  * Added missing values to valid_lists for item attributes sonos_recv and sonos_send
  * Updated plugin core to recently released SoCo v20
  * Fixed error in sonos widget with popups having hardcoded ID
  * Fixed memory leak
  * fixed default handling for param discover_cycle
  * completed metadata
  * Added missing values to valid_list for sonos_recv attribute

* squeezebox:

  * Switch from connection lib to network lib
  * Improve rescan status in plugin.yaml struct
  * Move readme infos to user_doc
  * fix scantype typo in plugin.yaml
  * fix structs for random and shuffle

* stateengine:

  * Extended metadata with attribute-name prefixes
  * Attribute_prefixes completed and described
  * Allow individual loglevels for each SE item and updated docu accordingly
  * Update user doc: include info on global attribute se_repeat_actions
  * Fix metadata as most of the attributes can be defined by evals, int, etc.
  * se_delay has to be type foo, too
  * Small fix for webinterface
  * Adjust logging for actions
  * Add changedby and updatedby
  * Improve handling of mixed condition checks (items, evals, etc.), logging for incorrect value type definitions
  * Improve logging for web interface update
  * replace some sh. functions by shtime lib
  * add additional suspend_end formats (datetime stamp and unix_timestamp)= as well as suspend_start and
    supsendduration duration_format to use with the new clock.countdown widget from smartvisu
  * fix suspend_end and start if value is empty
  * improve metadata in plugin.yaml
  * replace deprecated functions and implement functions for SV clock.countdown
  * convert source for actions/item changes to string, otherwise this can create errors e.g. when
    using log_change attribute
  * docu update for current.state_id etc.
  * small tweak in plugin.yaml for suspend_end/start time

* tankerkoenig:

  * Added missing item attribute to metadata

* tasmota:

  * Adjusted log level

* telegram:

  * Update to Lib V12.8.0 with refactoring according to changes

* thz:

  * add some more logging for debug purposes and minor information

* unifi:

  * **Changed item atribute name** from 'mac' to 'unifi_client_mac'

* uzsu:

  * Limited scipy version to v1.5.1 to enable standard install on Raspberry Pis
  * Added different requirement for Python versions < 3.7
  * Added requirement for Python 3.8 (for non-Pi installations)

* vacations:

  * Updated requirements as old package of ferien-api seems not to work anymore

* visu_smartvisu:

  * Added item attribute sv_blocksize to metadata
  * Added missing item attributes to metadata

* visu_websocket:

  * Bugfix for series_cancel command

* webservices:

  * Added option to activate/deactivate basic auth check via service_user and service_password of mod_http

* withings_health:

  * Changed nh_type to withings_type in plugin.yaml
  * Added english translations for BMI

* xmpp:

  * Replace sleekxmpp with slixmpp
  * Add return type to send method and fix parameters key in plugin.yaml
  * Add list of supported XEPs to documentation
  * Create event loop created outside of thread / adjust stop()

* yamaha:

  * Prepare multiinstance and webinterface
  * Complete metadata in plugin.yaml


Outdated Plugins
----------------

The following plugins were already marked in version v1.6 as *deprecated*. This means that the plugins
are still working, but are not developed further anymore and are removed from the release of SmartHomeNG
in the next release. User of these plugins should switch to corresponding succeeding plugins.

* System Plugins

  * sqlite_visu2_8 - switch to the **database** plugin

* Gateway Plugins

  * ...

* Interface Plugins

  * ...

* Web Plugins

  * alexa - switch to the **alexa4p3** plugin
  * wunderground - the free API is not provided anymore by Wunderground


The following plugins are marked as *deprecated* with SmartHomeNG v1.7, because neither user nor tester have been found:

* Gateway Plugins

  * ecmd
  * elro
  * iaqstick
  * snom

* Interface Plugins

  * easymeter
  * vr100

* Web Plugins

  * ...

Moreover, the previous mqtt plugin was renamed to mqtt1 and marked as *deprecated*, because the new mqtt
plugin takes over the functionality. This plugin is based on the mqtt module and the recent core.


Retired Plugins
---------------

The following plugins have been retired. They had been deprecated in one of the preceding releases of SmartHomeNG.
They have been removed from the plugins repository, but they can still be found on github. Now they reside in
the plugin_archive repository from where they can be downloaded if they are still needed.

* boxcar
* jointspace
* knx/_pv_1_3_4
* mail
* modbus_shng_1_2
* mqtt1
* netio230b
* nma
* openenergymonitor
* russound
* smawb
* speech
* sqlite
* tellstick
* visu_shng_1_2
* visu_websocket/_pv_1_1_3
* visu_websocket/_pv_1_4_5
* xbmc


Tools
-----

* plugin_metadata_checker:

  * Added option -v to list shng and Python min/max versions; added structs to listing of
    metadata of a plugin (options -d and -dd)

* Added tool cpuusage.py


Documentation
-------------

* User Documentation

  * Changed configuration of smarthome.service to enable restarts initiated by SmartHomeNG
  * doc for crontab: changes samples to comply with yaml
  * Started a reference section
  * Added a Translation entry to the navigation that calls Google Tanslate to create a non German version

* Developer Documentation

  * ...
