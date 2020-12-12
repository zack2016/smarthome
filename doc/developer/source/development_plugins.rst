======================
Development of Plugins
======================


Information about writing a plugin and getting it included in SmartHomeNG can be found here:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   /dev/README.md


More info upon the functions and their parameters can be found here. The core which resides in bin/smarthome.py is the heart of the system.
It is accessible via ``sh``-Object. The libraries provide extra functionality like scheduling, database access, connections etc.

.. toctree::
   :maxdepth: 1
   :titlesonly:
   :hidden:

   development_plugin/plugin_in5minutes.md


A plugin consists of a minimum of three files (without user- and developer documentation):

+--------------------------+---------------------------------------------------------------------------------+
| File                     | Description                                                                     |
+==========================+=================================================================================+
| ``__init__.py``          | The file containing the Python source code                                      |
+--------------------------+---------------------------------------------------------------------------------+
| ``plugin.yaml``          | The file containing the metadata of the plugin                                  |
+--------------------------+---------------------------------------------------------------------------------+
| ``locale.yaml``          | Optional, containing translation strings for the multi-language implementation  |
|                          | of a web interface                                                              |
+--------------------------+---------------------------------------------------------------------------------+
| ``README.rst`` oder      | A basic documentation file (in English language) - The documentation can be     |
| ``README.md``            | written in **markdown** or **restructured text** format                         |
+--------------------------+---------------------------------------------------------------------------------+
| **user_doc.rst**         | Optional, a user documentation file (in German language). It will be included   |
|                          | in the navigation of the user documentation.                                    |
+--------------------------+---------------------------------------------------------------------------------+
| **developer_doc.rst**    | Optional, a developer documentation file (in English language).                 |
|                          | It will be included in the navigation of the developer documentation            |
+--------------------------+---------------------------------------------------------------------------------+
| **requirements.txt**     | Falls ein Plugin ein Python Package nutzt, welches nicht in der                 |
|                          | Standardinstallation von Python enthalten ist, muss diese Anforderung in der    |
|                          | Datei ``requirements.txt`` dokumentiert werden. (Für eine Beschreibung der      |
|                          | Dateiformats bitte in der Dokumentation des **pip** Kommandos nachlesen:        |
|                          | (https://pip.pypa.io/en/stable/reference/pip_install/#requirements-file-format) |
+--------------------------+---------------------------------------------------------------------------------+

If one of the documentation files (**user_doc.\*** or **developer_doc.\***) should include images or
other assets, create a directory named **assets** in the plugin directory and put the files in that
directory **../<plugin>/assets**. The documentation files (**user_doc.\*** or **developer_doc.\***)
need not to be referenced in the metadata file **plugin.yaml**

.. important::

   The first Heading of the **user_doc.rst** / **user_doc.md** or **developer_doc.rst** / **developer_doc.md**
   MUST be the short-name of the plugin in lower case.

   It is used as the entry in the navigation bar of the documentation. Choosing an other top level
   header for these files would make the documentations navigation inconsistent.


The plugin may have the following subdirectories:

+--------------------------+----------------------------------------------------------------------+
| Directory                | Description                                                          |
+==========================+======================================================================+
| _pv_<version>            | A directory containing a former version of the plugin (the dots of   |
|                          | the version number are replaced by underline. eg: 1.3.5 -> 1_3_5)    |
+--------------------------+----------------------------------------------------------------------+
| assets                   | Containing files user by the **user_doc** or **developer_doc** files |
+--------------------------+----------------------------------------------------------------------+
| webif                    | Containing the files of a webinterface, if the plugin implements     |
|                          | one. This directory should contain two sub directories (**static**   |
|                          | and **templates**).                                                  |
+--------------------------+----------------------------------------------------------------------+
| webif/static             | Containing the files of a webinterface, if the plugin implements     |
+--------------------------+----------------------------------------------------------------------+
| webif/static/css         | Optional, if cascading style sheets are needed by the web interface, |
|                          | they go here.                                                        |
+--------------------------+----------------------------------------------------------------------+
| webif/static/img         | Optional, if images are needed by the web interface, they go here.   |
+--------------------------+----------------------------------------------------------------------+
| webif/templates          | The **templates** directory should contain the html tempate(s), at   |
|                          | least **index.html**.                                                |
+--------------------------+----------------------------------------------------------------------+


The plugin code is a class based on the class SmartPlugin. The methods of SmartPlugin are documented here.

.. toctree::
   :maxdepth: 5
   :titlesonly:

   development_plugin/smartplugin

Plugins that use MQTT should be derived from clatt MqttPlugin. MqttPlugin is a subclass of SmartPlugin. The methods of
MqttPlugin are documented here.

.. toctree::
   :maxdepth: 5
   :titlesonly:

   development_plugin/mqttplugin


.. toctree::
   :maxdepth: 5
   :titlesonly:
   :hidden:

   development_plugin/plugin_metadata
   development_plugin/plugin_documentation_files
   development_plugin/webinterface
   development_plugin/multilanguage
   development_plugin/sampleplugin
   development_plugin/samplemqttplugin
   modules_doc/modules_plugins
   modules_doc/modules_readmes
   development_plugin/libraries_plugins



Some very specific info upon some plugins can be found here:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   plugins/visu_smartvisu/developer_doc.md
   plugins/visu_websocket/developer_doc.md


