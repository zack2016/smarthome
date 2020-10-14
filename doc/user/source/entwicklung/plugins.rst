
.. index:: Entwicklung; Plugins

.. role:: bluesup
.. role:: redsup


=======================
Entwicklung von Plugins
=======================

Informationen über das Schreiben von Plugins und wie sie in SmartHomeNG eingebunden werden, kann hier
gefunden werden:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   /dev/README.md


Weitere Informationen die zu erstellenden Methoden und ihre Parameter kann in der folgenden Kurzanleitung gefunden
werden. Die Libraries im Verzeichnis ```./lib``stellen Funktionalitäten bereit, die nicht in ```./bin/smarthome.py``
enthalten sind.

.. toctree::
   :maxdepth: 1
   :titlesonly:
   :hidden:

   plugins/plugin_in5minutes.md


Ein Plugin besteht im absoluten Minimum aus zwei Dateien. Alle Dateien eines Plugins befinden sich in einem
Unterverzeichnis des Verzeichnisses ``/plugins``, welches den Namen des Plugins trägt (nur Kleinbuchstaben):

+--------------------------+---------------------------------------------------------------------------------+
| File                     | Description                                                                     |
+==========================+=================================================================================+
| ``__init__.py``          | Der Programm Code des Plugins                                                   |
+--------------------------+---------------------------------------------------------------------------------+
| ``plugin.yaml``          | Die (mehrsprachige) Beschreibung der Metadaten für das Plugin                   |
+--------------------------+---------------------------------------------------------------------------------+


Je nach Umfang und Erfordernissen sind folgende optionale Dateien hinzuzufügen:

+--------------------------+---------------------------------------------------------------------------------+
| File                     | Description                                                                     |
+==========================+=================================================================================+
| ``locale.yaml``          | Enthält die Übersetzungen für die mehrsprachige Implementierung des Web         |
|                          | Interfaces                                                                      |
+--------------------------+---------------------------------------------------------------------------------+
| ``requirements.txt``     | Falls ein Plugin ein Python Package nutzt, welches nicht in der                 |
|                          | Standardinstallation von Python enthalten ist, muss diese Anforderung in der    |
|                          | Datei ``requirements.txt`` dokumentiert werden. (Für eine Beschreibung der      |
|                          | Dateiformats bitte in der Dokumentation des **pip** Kommandos nachlesen:        |
|                          | (https://pip.pypa.io/en/stable/reference/pip_install/#requirements-file-format) |
+--------------------------+---------------------------------------------------------------------------------+
| ``user_doc.rst``         | Weitergehende Dokumentation des Plugins, die in die Anwender Dokumentation      |
|                          | integriert wird. Falls die Dokumentation in ``user_doc.rst`` Bilder oder andere |
|                          | Assets enthalten soll, ist im Plugin Verzeichnis ein Verzeichnis ``assets``     |
|                          | anzulegen, welches diese Dateien aufnimmt.                                      |
|                          |                                                                                 |
|                          | Die Dokumentationsdatei ``user_doc.rst`` muss nicht in den Metadaten            |
|                          | (``plugin.yaml``) referenziert werden. Sie wird automatisch bei der Generierung |
|                          | der Anwender Dokumentation von SmartHomeNG integriert.                          |
+--------------------------+---------------------------------------------------------------------------------+
| ``developer_doc.rst``    | Optional: Weitergehende Entwickler Dokumentation des Plugins.                   |
+--------------------------+---------------------------------------------------------------------------------+
| ``README.rst`` oder      | README ist als Format für die Dookumentation von Plugins veraltet. Ein Großteil |
| ``README.md``            | der Dokumentation ist in die Matadaten Dokumentation in ``plugin.yaml``         |
|                          | übergegangen. Die restliche Dokumentation sollte in ``user_doc.rst`` erfolgen.  |
+--------------------------+---------------------------------------------------------------------------------+

.. important::

   Die erste Überschrift in der Datei ``user_doc.rst`` MUSS dem Short-Name des Plugins in Kleinbuchstaben
   entsprechen (identisch zum Namen des Verzeichnisses in dem die Plugin Dateien gespeichert sind.

   Diese Überschrift wird als Eintrag in der Navigation der Dokumentation verwendet. Wenn eine andere Überschrift
   gewählt würde, würde die Navigation der Dokumentation inkonsistent werden.


Ein Plugin kann die folgenden Unterverzeichnisse haben:

+--------------------------+-----------------------------------------------------------------------+
| Directory                | Description                                                           |
+==========================+=======================================================================+
| ``_pv_<version>``        | Ein Verzeichnis, welches eine vorangegangene Version des Plugins      |
|                          | enthält (bei größeren Überarbeitungen des Plugins). Die ``<version>`` |
|                          | muss der Versionsnummer des Plugins entsprechen, wobei die Punkte     |
|                          | durch Unterstriche ersetzt werden. (z.B.: 1.3.5 -> 1_3_5)             |
+--------------------------+-----------------------------------------------------------------------+
| ``assets``               | Verzeichnis für Bilder und Assets der Doku (``user_doc``)             |
+--------------------------+-----------------------------------------------------------------------+
| ``webif``                | Enthält die Dateien eines Webinterfaces, falls das Plugin eines       |
|                          | implementiert. (Es sollte die Unterverzeichnisse ``static`` und       |
|                          | ``templates`` enthalten.)                                             |
+--------------------------+-----------------------------------------------------------------------+
| ``webif/static``         | Enthält die eigentlichen Dateien des Webinterfaces                    |
+--------------------------+-----------------------------------------------------------------------+
| ``webif/static/css``     | Optional, falls cascading style sheets genutzt werden.                |
+--------------------------+-----------------------------------------------------------------------+
| ``webif/static/img``     | Optional, falls das Webinterface Bilder enthält                       |
+--------------------------+-----------------------------------------------------------------------+
| ``webif/templates``      | Dieses Verzeichnis enthält die Jinja2 Templatesdes Webinterfaces und  |
|                          | solte mindestens ``index.html`` enthalten.                            |
+--------------------------+-----------------------------------------------------------------------+


Ein Plugin implementiert im Code eine Klasse, welche vor der ``class SmartPlugin`` abgeleitet ist. Die Methoden
von ``SmartPlugin`` sind hier dokumentiert:

.. toctree::
   :maxdepth: 5
   :titlesonly:

   plugins/smartplugin

Plugins welche MQTT nutzen, sollten stattdessen von ``class MqttPlugin`` abgeleitet werden. ``MqttPlugin`` ist
eine subclass von ``SmartPlugin``, die um Methoden zur MQTT Nutzung erweitert ist. Die Methoden von
``MqttPlugin`` sind hier dokumentiert:

.. toctree::
   :maxdepth: 5
   :titlesonly:

   plugins/mqttplugin


.. toctree::
   :maxdepth: 5
   :titlesonly:
   :hidden:

   plugins/plugin_metadata
   plugins/plugin_documentation_files
   plugins/webinterface
   plugins/multilanguage
   plugins/sampleplugin
   plugins/samplemqttplugin
   modules/modules_plugins
   plugins/libraries_plugins



Some very specific info upon some plugins can be found here:

.. toctree::
   :maxdepth: 1
   :titlesonly:

   /plugins/visu_smartvisu/developer_doc
   /plugins/visu_websocket/developer_doc


