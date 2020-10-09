
Module zur Nutzung durch Plugins
================================

Einige der ladbaren Module können bei der Entwicklung von Plugins genutzt werden.
Diese Module implementieren Funktionalitäten, die nicht fest in den Core von SmartHomeNG integriert sind,
und somit auch nicht zwangsweise geladen werden.

Die zu ladenden Module werden in ../ect/modules.yaml konfiguriert. Die Parameter sind in der README und in
den Metadaten des jeweiligen Moduls beschrieben. Die Konfiguration kann vollständig durch das Admin Interface
erfolgen.


.. toctree::
   :maxdepth: 3
   :titlesonly:
   :hidden:

   module_http
   module_mqtt
   module_websocket

