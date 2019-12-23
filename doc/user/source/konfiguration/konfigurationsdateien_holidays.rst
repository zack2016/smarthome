.. index:: holidays
.. index:: Feiertage

.. role:: bluesup
.. role:: redsup

===========================
holidays.yaml :redsup:`new`
===========================


.. _`holidays.yaml`:

Ab Version 1.7 unterstützt SmartHomeNG Feiertage. In Logiken und Plugins kann abgefragt werden, ob ein bestimmtes
Datum ein Feiertag ist und welcher.

Es werden zzt. die Feiertage von 50 Ländern unterstützt. Falls die ein Land regional unterschiedliche Feiertage hat,
so wird dieses auch unterstützt. Um die richtigen Feiertage in der SmartHomeNG Umgebung zu erhalten, muss das zu
verwendende Land und die Region/Provinz konfiguriert werden.

In der Konfigurationsdatei können auch noch zusätzlich benutzerdefinierte Feiertage konfiguriert werden.


Die Konfiguration sollte in etwa so aussehen:

.. literalinclude:: ../../../../etc/holidays.yaml.default
   :caption: holidays.yaml
   :language: yaml


Im Abschnitt **Logiken** ist auf der Seite :doc:`Feiertage, Daten und Zeiten </logiken/objekteundmethoden_feiertage_datum_zeit>`
beschrieben, wie die hier konfigurierten Feiertage in Logiken und **eval** Attributen genutzt werden können.

