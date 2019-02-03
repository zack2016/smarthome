
.. index:: Dienste

=======
Dienste
=======

Auf dem Dienste Tab kann temporär die Sprache von SmartHomeNG umgeschaltet werden. Außerdem ist es möglich SmartHomeNG neu
zu starten und Password-Hashes zu erzeugen (z.B. für das CLI Plugin).

Weiterhin kann der Status einiger von Plugins genutzter Dienste angesehen werden, soweit diese Dienste auf dem selben
Rechner laufen wie SmartHomeNG selbt.

.. image:: assets/services.jpg
   :class: screenshot


.. index:: eval Syntax-Prüfer
.. index:: Dienste; eval Syntax-Prüfer

eval Syntax-Prüfer
==================

Auf diesem Tab können eval Ausdrücke auf richtigen Syntax geprüft werden. Die evaluierung der Ausdrücke findet im Kontext
von SmartHomeNG statt, so dass auf alle Items und Funktionen von Plugins zugegriffen werden kann. Es ist auch möglich
relative Item Referenzen anzugeben. Damit die relativen Referenzen richtig aufgelöst werden, muss in einem separaten Feld
das Item (als Item-Pfad) angegeben werden, zu welchem die Referenzen relativ sind.

.. image:: assets/services-evalchecker.jpg
   :class: screenshot

Angezeigt wird als Ergebnis der expandierte Ausdruck, bei dem alle relativen Referenzen aufgelöst sind und als absolute
Referenzen angezeigt werden. Im expandierten Ausdruck kann dadurch geprüft werden, ob die relativen Referenzen richtig
angegeben wurden.

Weiterhin wird der resultierende Wert des Ausdrucks und der Datentyp des Resultats angezeigt.


.. index:: YAML Syntax-Prüfer
.. index:: Dienste; YAML Syntax-Prüfer

YAML Syntax-Prüfer
==================

Im YAML Syntax-Prüfer kann ein Snippet im YAML Format eingegeben und überprüft werden. Als Ergebnis wird der durch einen
YAML Interpreter interpretierte und aufbereitete Ausdruck angezeigt.

.. image:: assets/services-yamlchecker.jpg
   :class: screenshot


.. index:: CONF-YAML Konverter
.. index:: Dienste; CONF-YAML Konverter

CONF-YAML Konverter
===================

Der CONF-YAML Konverter dient dazu, Sippets die im alten CONF Format vorliegen in das YAML Format zu konvertieren.

.. image:: assets/services-yamlconverter.jpg
   :class: screenshot


.. index:: Cache Prüfung
.. index:: Dienste; Cache Prüfung

Cache Prüfung
=============

Auf diesem Tab kann der SmartHomeNG Item-Cache überprüft werden. Dazu werden alle im Directory ../var/cache vorhandenen
Dateien angezeigt, zu denen es kein Item gibt oder zu denen es zwar ein Item gibt, bei dem jedoch das cache Attribut
nicht gesetzt ist.

.. image:: assets/services-cachechecker.jpg
   :class: screenshot

Gelöscht werden können entweder einzelne Cache Dateien durch den **Löschen** Button in der jeweiligen Zeile, oder die
zu löschenden Cache Dateien können mit Hilfe der Checkbox in der jeweiligen Zeile markiert werden und anschließend mit
dem Button **Ausgewählte Löschen** gelöscht werden.

