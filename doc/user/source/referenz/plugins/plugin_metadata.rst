
Metadata für Plugins
====================

Plugins are configured in ``etc/plugin.yaml``. The parameters are described in the plugin's documentation.
files of the modules.


A plugin consists of a minimum of three files:

- The program code: __init__.py
- The metadata: plugin.yaml
- and optional: A short documentation: user_doc.rst

All three files reside in a folder within the ``/plugins`` folder. The name of the folder reflects
the name of the plugin.


The **metadata** file is named ``/plugins/<name of the plugin>/plugin.yaml``. It has two main and four
additional sections:

- ``plugin:`` - Global metadata of the plugin
- ``parameters:`` - Definition of the parameters that can bei used in ``../etc/plugin.yaml`` to configure the plugin
- ``item_attributes:`` - ...
- ``item_structs:`` - ...
- ``logic_parameters:`` - ...
- ``plugin_functions:`` - ...


.. include:: /referenz/metadata/plugin_global.rst

.. include:: /referenz/metadata/parameters.rst

.. include:: /referenz/metadata/item_attributes.rst

.. include:: /referenz/metadata/item_structs.rst

.. include:: /referenz/metadata/logic_parameters.rst

.. include:: /referenz/metadata/plugin_functions.rst
