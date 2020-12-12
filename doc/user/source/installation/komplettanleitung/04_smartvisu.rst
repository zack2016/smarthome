
.. index:: smartVISU installieren

.. role:: bluesup
.. role:: redsup

======================
smartVISU installieren
======================

Die SmartVISU ist eine Sammlung von HTML-Dateien und PHP Skripten die es
ermöglicht Items vom SmartHomeNG anzuzeigen. Im Wesentlichen wird dazu
ein Webserver benötigt, hier der Apache2 und für die variablen Daten des
SmartHomeNG braucht die SmartVisu noch eine Websocket-Verbindung zum
SmartHomeNG.

.. contents:: Schritte der Installation
   :local:


zusätzliche Pakete installieren
===============================

Der Apache2 braucht noch ein paar Pakete wie PHP um die Webseiten der
SmartVISU liefern zu können:

.. code-block:: bash

   sudo apt-get install libawl-php php-curl php php-json php-xml php-mbstring
   sudo service apache2 restart


SmartVISU Quellcode laden
=========================

Die Dateien der SmartVISU werden in einem Unterverzeichnis abgelegt,
das für den **Apache2** Webserver zugänglich ist:

.. code-block:: bash

    cd /var/www/html
    sudo rm index.html
    sudo mkdir smartvisu
    sudo chown smarthome:www-data smartvisu
    # guid setzen
    chmod g+rws smartvisu/
    cd smartvisu
    git clone git://github.com/Martin-Gleiss/smartvisu.git .
    # Apache2 Zugriff erlauben
    sudo find . -type d -exec chmod g+rwsx {} +
    sudo find . -type f -exec chmod g+r {} +

Bitte auf den **Punkt** am Ende des **git clone** Kommandos achten!

Für den ordnungsgemäßen Betrieb braucht die SmartVISU noch das SmartHomeNG Plugin
**visu_websocket**. Dieses ist in der **plugin.yaml.default** bereits vorkonfiguriert
und wird beim ersten Start nach einer frischen Installation in die **plugin.yaml**
übernommen.


Zugriff auf die SmartVISU testen
================================

Mit einem Browser kann nun erstmals auf die SmartVISU zugegriffen
werden: Hierbei ist ``<ip-des-servers>`` natürlich mit der IP oder dem
Hostnamen deines SmartVISU Servers ersetzen:
``http://<ip-des-servers>/smartVISU`` Bei **Checking your
configuration** sollte alles mit einem grünen Häckchen versehen sein.
Über den Knopf **Config** kommt man ins SmartVISU Interface direkt auf
die Config Seite.

Bei I/O Connection **SmartHomeNG** auswählen. Bei Adresse (URL / IP) die IP Adresse des
Servers oder den DNS Namen eingeben auf dem SmartHomeNG installiert ist.
Bei Port ist standardmäßig ``2424`` einzugeben.

**ACHTUNG**: Hier **NICHT** ``localhost`` oder ``127.0.0.1``
eingeben, denn diese Adresse wird vom Client Browser benutzt
(Javascripts) um aktuelle Daten über einen Websocket direkt von
SmartHomeNG abzufragen.

Im Tab **Interfaces** muß noch die anzuzeigende Visu Seite eingestellt
werden. Dort kann unter anderem gewählt werden zwischen verschiedenen
Demoseiten.

Um die Einstellungen zu sichern bitte **Save** auswählen.


Eigene Visu Seiten anlegen
==========================

Um mit der SmartVISU eine eigene Visu anzulegen, muß innerhalb des
Ordners ``pages`` der SmartVISU ein neues Verzeichnis angelegt werden,
in dem dann die eigenen Seiten z.B. für Räume oder Funktionsbereich
abgelegt werden. Es existiert im Ordner ``pages`` bereits ein
Unterordner ``_template``. Dieser wird als Basis der neuen Visu einfach
kopiert ``cp _template <meineneuevisu>``. Für ``<meineneuevisu>`` sollte
**nicht smarthome** gewählt werden wenn später die Visu vom SmartHomeNG Plugin
**visu\_smartvisu** erstellt werden soll. Die manuell erstellten Seiten
könnten sonst einfach von SmartHomeNG überschrieben werden.

Die Dateien für die SmartVISU sind einfache HTML Dateien.
Die einzelnen Bedienelemente wie Buttons, Flips, Werteanzeigen
(sogenannte Widgets) sind Makros die mit der Makrosprache **TWIG** definiert sind.
Die HTML können auf eigene Bedürfnisse beliebig angepasst werden.
Im einzelnen ist das `auf der Projektseite <http://www.smartvisu.de/>`__ nachzulesen.
Die durch die SmartVISU generierten HTML Seiten sind zwar responsiv aber
durchweg statisch. Die Kommunikation zwischen SmartHomeNG und der
SmartVISU erfolgt über ein Websocket Plugin für SmartHomeNG und
JavaScript Code der in der HTML Seite eingebunden wird.
Der Javascript Code manipuliert dann aufgrund der via Websocket
übermittelten Daten von Items in SmartHomeNG dynamisch den Inhalt
der Webseite (DOM).


SmartHomeNG Plugin **visu\_smartvisu**
======================================

Mit dem Plugin **visu\_smartvisu** können aus der Definition der Items in SmartHomeNG automatisch Visuseiten
erstellt werden. Diese Visu Seiten werden im Verzeichnis ``smarthome`` des ``pages`` Verzeichnisses der
smartVISU erstellt. Das Plugin unterstützt smartVISU Versionen von v2.7 bis zur releasten v2.9 (master branch).


.. Ab SmartHomeNG v1.7.x werden
    die Visu Seiten im Verzeichnis ``smarthomeng`` erstellt! Dazu bitte beim
    entsprechenden Plugin die Doku lesen.

.. .. important::
       Änderung ab SmartHomeNG v1.7.x:

       Ab SmartHomeNG v1.7.x werden die Visu Seiten nicht mehr im Verzeichnis ``pages/smarthome``, sondern
       im Verzeichnis ``pages/smarthomeng`` erstellt.

       Ein evtl. existierendes Verzeichnis ``smarthome`` im ``pages`` Verzeichnis der smartVISU bitte löschen
       um Verwechselungen und den Aufruf veralteter Visu Seiten zu vermeiden.


Mischung von generierten und manuell erstellten Seiten
------------------------------------------------------

Es ist möglich automatisch generierte und manuell erstellte Seiten zu mischen. Das Vorgehen hierzu ist
in unter :doc:`Visualisierung </visualisierung/visualisierung>` und in der
:doc:`Dokumentation des Plugins </plugins/visu_smartvisu/user_doc>` beschrieben.

