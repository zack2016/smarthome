==========================
Release 1.x - tt. mmm 2020
==========================

Es gibt eine Menge neuer Features im Core von SmartHomeNG und den Plugins.

.. note::

    Diese Release Notes sind ein Arbeitsstand.

     - Berücksichtigt sind Commits im smarthome Repository bis incl. 28. September 2020 12:xx Uhr
       (Documentation updates)
     - Berücksichtigt sind Commits im plugins Repository bis incl. 15. Juli 2020
       (plugin casmbi)



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


Bugfixes in the CORE
--------------------

* ...


Updates in the CORE
-------------------

* Creating var directory and sub directories, if they don't exist
* Experimental support for running SmartHomeNG on Windows
* add Python package 'portalocker' for os independant file locking for PID

* bin.smarthome:

  * Changed exitcode to 5 for restarts to signal systemctl that the service should be restarted
  * added commandline parameter 'pip3_command' to be able to install core requirements if the
    pip3 command is not at the default location

* Items:

  * ...

* Logics:

  * ...

* lib.db:

  * Added name of used database driver to log message

* lib.item:

  * Refactored library
  * Added log_change output during initialization phase
  * Added Methods for validity checking of plugin specific attributes
  * Added filename to attribute-not-defined warning; excluded env.* items from warnings
  * Fixed setting of 'updated_by' property, if value was changed by on_update/on_change and syntax
    without assignement was used
  * Fixed merging structs with same attribute/item in subtree
  * Implemented check for datatype of plugin-specific item attributes
  * Changed Thread name for calls to scheduler.trigger()

* lib.metadata:

  * Added handling of plugin specific attributes
  * Make sure, itemprefixdefinitions exists
  * Implemented check for datatype of plugin-specific item attributes
  * Implemented item-attribute checking valid_min, valid_max, valid_list

* lib.module:

  * Thread names adjusted

* lib.network:

  * Introduced iowait instead of select.poll() which is not platform portable
  * terminator not ignored anymore
  * Changed building of thread names for tcp_client and tcp_server

* lib.plugin:

  * Added handling of plugin specific attributes

* lib.scheduler:

  * scheduler.change() now accepts the same values for parameter cycle as scheduler.add does

* lib.shpypi:

  * Configuration of pip_command now overrides other methods of finding the right pip3 command
  * If getting path to pip from path to os package (os.__file__), try file 'pip3', if file 'pip 3.<x>' is not found
  * Write output of PIP3 command to file in log directory
  * Requesting newest version of a package in the order they are displayed in the admin gui

* lib.shtime:

  * Bugfix for public holidays

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

  * http:

    * Set maximum version of cherrypy to avoid problem with cheroot 8.4.4

  * mqtt:

    * Fixed an incompatibility with Windows
    * Thread names adjusted

* shngAdmin:

  * Switched to new menu bar
  * Update to system properties page
  * Updated pages under system and services menu
  * Update to logics list and scene list and scene configuration page (basic css grid implementation)
  * Update to logics parameter and scheduler lists (basic css grid implementation); Added parameter to
    allow click on header of dropdown menu
  * Changed handling of boolean value field in item tree
  * Added tab to configure upcoming websocket module


* Plugins:

  * ...



New Plugins
-----------

For details of the changes of the individual plugins, please refer to the documentation of the respective plugin.

* <Name>: ...



Plugin Updates
--------------

* avm:

  * added set hkr window open command
  * Added warning for negative durations
  * Added item attribute avm_wlan_index to metadata
  * Added support for tam index
  * Fixed problem with get_iattr_value for index parameter
  * Added description to meta data avm_wlan_index
  * Added description for avm_wlan_index

* casambi:

  * Cleaned-up webinterface
  * Fixed error when API key is no longer valid

* database:

  * Added automatic restart if database file could not be opened - That happens often with sqlite3 after
    switching from older Python version to 3.8 or back from 3.8 to older version.
  * Restart shng on stall of db-driver only for sqlite3 databases

* easymeter:

  * Updated to SmartPlugin

* enigma2:

  * Added item attribute enigma2_remote_command_id to metadata

* enocean:

  * Fixed serial close; added possibility for debug outputs from eepparser
  * Completed plugin metadata

* garminconnect:

  * Added some error handling acc. to related open source lib

* gpio:

  * Fixed recently introduced bug in gpio out control
* hue:

  * Fixed a "RuntimeError: dictionary changed size during iteration" error
  * Added item attribute definitions to metadata (descriptions are still missing)

* lirc:

  * Added definitions of the item_attributes to metadatalirc: Added definitions of the item_attributes to metadata

* neato:

  * Added debug outputs
  * Completed plugin metadata
  * Catching empty security keys

* openweathermap:

  * Added x, y, and z attributes to item attribute definition
  * Added example of rain_layer and cloud_layer to README

* robonect:

  * Added robonect_remote_index to item attributes of plugin
  * Added valid list for robonect_data_type

* rpi1wire:

  * New Version 1.7.0 with webinterface
  * Removed invalid content from metadata to make it a valid yaml file

* rrd:

  * Create rrd directory if it does not exist

* sonos:

  * Added debug outputs
  * Switched to lib.item import Items to be compatible with latest develop core
  * Added item attribute definitions to metadata
  * Completed plugin metadata

* stateengine:

  * Extended metadata with attribute-name prefixes
  * Attribute_prefixes completed and described
  * Allow individual loglevels for each SE item and updated docu accordingly
  * bump version to 1.7.1

* tankerkoenig:

  * Added missing item attribute to metadata

* tasmota:

  * Adjusted log level

* visu_smartvisu:

  * Added item attribute sv_blocksize to metadata
  * Added missing item attributes to metadata

* visu_websocket:

  * Bugfix for series_cancel command

* withings_health:

  * Changed nh_type to withings_type in plugin.yaml
  * Added english translations for BMI


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

Documentation
-------------

* User Documentation

  * Changed configuration of smarthome.service to enable restarts initiated by SmartHomeNG
  * doc for crontab: changes samples to comply with yaml
  * Started a reference section
  * Added a Translation entry to the navigation that calls Google Tanslate to create a non German version

* Developer Documentation

  * ...
