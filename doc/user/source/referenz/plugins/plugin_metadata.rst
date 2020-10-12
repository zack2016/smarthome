
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
- ``item_attributes:`` - Definition of the item attributes that are used by the plugin
- ``item_structs:`` - Definition of item structs that can be used with the plugin
- ``logic_parameters:`` - Definition of parameters that control how a logic can be used/triggered from the plugin
- ``plugin_functions:`` - Decscription of public functions that are defined by the plugin


.. include:: /referenz/metadata/plugin_global.rst

.. include:: /referenz/metadata/parameters.rst

.. include:: /referenz/metadata/item_attributes.rst

.. include:: /referenz/metadata/item_structs.rst

.. include:: /referenz/metadata/logic_parameters.rst

.. include:: /referenz/metadata/plugin_functions.rst
