
.. index:: Konfiguration über die GUI

.. role:: bluesup
.. role:: redsup

========================================
Konfiguration über die GUI :redsup:`new`
========================================

SmartHomeNG kann vollständig über die graphische Oberfläche konfiguriert werden. Für einen Teil der Konfiguration stehen
Dialoge zur Verfügung, die Erläuterungen zu den einzelnen Einstellungen geben und evtl. vorhandene Standardwerte
anzeigen. Für den Rest der Konfiguration stehen Editoren zur Verfügung, mit denen die jeweiligen YAML Dateien bearbeitet
werden können.

.. note::

   Die Beschreibung der vollständigen Funktionalität der graphischen Administrationsoberfläche  befindet sich im
   Abschnitt :doc:`/admin/admin`


Konfigurations-Dialoge
======================

Konfigurations-Dialoge bestehen standardmäßig aus 4 Spalten:

- **Parameter**: Name der Parameter
- **Wert**: Zu konfigurierender Wert für die Parameter - Dieses können Freitext-Felder oder Drop-Down Listen sein

  Wenn in einem Dialogfeld kein Wert eingegeben ist, wird dort der in diesem Fall verwendete Standardwert angezeigt.

  Inhalte von Feldern die als Drop-Down Liste dargestellt werden, können durch klicken auf das **x** neben dem Inhalt
  gelöscht werden.
- **Typ**: Datentyp der einzugebenden Werte
- **Beschreibung**: Erläuterung der Parameter

.. hint::

   Wenn unter **Dienste** die Sprache der graphischen Oberfläche umgestellt wird, ändert sich auch die Sprache der
   Beschreibungstexte.

Die Dialoge können nach jeder der 4 Spalten sortiert werden. Dieses ist bei längeren Dialogen hilfreich, da es das
auffinden eines gesuchten Parameters erleichtert.


Systemkonfiguration
===================

Die Grundkonfiguration findet im Menü **System** durch Auswahl von **Konfiguration** statt.

Essentiell ist die Konfiguration der ersten vier Parameter. Falls diese Parameter nicht richtig konfiguriert sind,
liefern Funktionen zu Sonnensnatd, Monstand und Uhrzeit falsche ergebnisse.

Die anderen Parameter der Systemkonfiguration können anfangs unverändert bleiben.

.. image:: /admin/assets/system-common.jpg
   :class: screenshot

Nachdem die Werte eingegeben wurden, müssen die Einstellungen gesichert werden (Button unten rechts im Dialog).
Wirksam werden diese Änderungen jedoch erst bei einem Neustart von SmartHomeNG. Dieser kann bequem aus dem
Konfigurationsdialog heraus veranlasst werden.

Falls Daten verändert und gesichert wurden, wird der Button **Core neu starten** (unten links im Dialog) aktiviert.
Wenn der Button geklickt wird, wird SmartHomeNG neu gestartet. Dieses nimmt einige Zeit in Anspruch. Der Fortschritt
kann auf der Seite **Dienste** im Tab **Dienste** verfolgt werden.


Konfiguration der Feiertage
===========================

Dieser Abschnitt wird vervollständigt, nachdem das Administations-Interface einen Dialog zur Konfiguration der Feiertage
erhalten hat. Bis dahin müssen die Feiertage direkt in der Konfigurationsdatei **etc/holidays.yaml** konfiguriert werden.


Konfiguration von Plugins
=========================

Die Konfiguration der Plugins findet im Menü **Plugins** durch Auswahl von **Konfiguration** statt.

hier können Plugins aus der Liste der installierten Plugins hinzukonfiguriert und ihre Parameter angepasst werden.

.. image:: /admin/assets/plugin-configlist.jpg
   :class: screenshot


Hinzufügen von Plugins
----------------------

Durch klicken auf den Button **Plugin hinzufügen** (oben rechts auf der Seite) wird ein Dialog geöffnet, in dem ein
Plugin ausgewählt werden kann, um es der aktuellen Konfiguration hinzuzufügen.

.. image:: /admin/assets/plugin-addlist.jpg
   :class: screenshot

Zum Hinzufügen die gewünschte Plugin Kategorie aufklappen und auf die Zeile mit dem gewünschten Plugin klicken. Dadurch
öffnet sich ein Dialog, in dem ein eindeutiger Name für diese Plugin Instanz gewählt werden muss. Bei Plugins, voon
denen nur eine Instanz konfiguriert wird, kann einfach der Name des Plugins gewählt werden. Bei Plugins, von denen
mehrere Instanzen konfiguriert werden sollen, muss hier für jede Instanz ein individueller Name gewählt werden.

Plugins die neu hinzugefügt wurden, sind erstmal deaktiviert. Aktivieren kann man Sie dasurch, dass sie konfiguriert
werden.


Konfiguration eines Plugins
---------------------------

Durch klicken auf eine Zeile der bereits konfigurierten Plugins wird der zum Plugin gehörige Konfigurationsdialog
gestartet.

Die Liste der konfigurierbarn Parameter unterscheidet sich von Plugin zu Plugin. Allen Konfigurationen gemein ist
der Schiebeschalter oben links im Dialog. Wenn dieser nach links geschoben ist, ist das Plugin deaktivert. Das
bedeutet, dass es beim nächsten Neustart von SmartHomeNG nicht geladen wird. Dadurch kann schnell ein Plugin aus
der aktiven Konfiguration entfernt werden, ohne die Einstellungen der Parameter des Plugins zu verlieren.

.. image:: /admin/assets/plugin-config.jpg
   :class: screenshot

Die Konfiguration der einzelnen Parameter geschieht analog zum Dialog der Systemkonfiguration.



Konfiguration von Items
=======================

...


