
.. index:: Konfiguration über die GUI; System

.. role:: bluesup
.. role:: redsup


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
---------------------------

Dieser Abschnitt wird vervollständigt, nachdem das Administations-Interface einen Dialog zur Konfiguration der Feiertage
erhalten hat. Bis dahin müssen die Feiertage direkt in der Konfigurationsdatei **etc/holidays.yaml** konfiguriert werden.


