.. index:: Items; Properties
.. index:: Properties; Items

.. role:: bluesup
.. role:: redesup


Properties eines Items :redsup:`new`
====================================

Jedes definierte Item bietet die folgenden Properties an, die unter anderem in **eval** Ausdrücken
genutzt werden können. Alle Properties sind zumindest lesend (r/o) zugreifbar. Einige Properties können
auch beschrieben (r/w) werden.

Properties sind **ab SmartHomeNG v1.6** verfügbar.


Properties werden in Logiken und eval-Ausdrücken folgendermaßen abgerufen:

.. code::

    var = sh.<Item-Pfad>.property.<Property-Name>

    # Beispiel zur Abfrage des Names eines Items:
    var = sh.wohnung.testitem.property.name


Werte für Properties, die auch geschrieben werden können, werden folgendermaßen gesetzt:

.. code::

    sh.<Item-Pfad>.property.<Property-Name> = value

    # Beispiel zur Abfrage des Names eines Items:
    sh.wohnung.testitem.property.name = 'Neuer Name'


+----------------------+------------+----------+------------------------------------------------------------------------------+
| **Property**         | **Access** | **Type** | **Beschreibung**                                                             |
+======================+============+==========+==============================================================================+
| defined_in           | r/o        | str      | Liefert den Dateinamen in dem das Item definiert wurde zurück                |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| enforce_updates      | r/w        | bool     | Setzt oder löscht den **enforce_updates** Status                             |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| eval                 | r/w        | str      | Erlaubt das Abfragen oder Setzen der eval Expression                         |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| last_change          | r/o        | datetime | Liefert ein *datetime* Objekt mit dem Zeitpunkt der letzten Änderung des     |
|                      |            |          | Items zurück.                                                                |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| last_change_age      | r/o        | float    | Liefert das Alter des Items seit der letzten Änderung des Wertes in Sekunden |
|                      |            |          | zurück.                                                                      |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| last_change_by       | r/o        | str      | Liefert einen String zurück, der auf das Objekt hinweist, welches das Item   |
|                      |            |          | zuletzt geändert hat.                                                        |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| last_update          | r/o        | datetime | Liefert ein *datetime* Objekt mit dem Zeitpunkt des letzten Updates des      |
|                      |            |          | Items zurück. Im Gegensatz zu **last_change()** wird dieser Zeitstempel auch |
|                      |            |          | verändert, wenn sich bei einem Update der Wert des Items nicht ändert.       |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| last_update_age      | r/o        | float    | Liefert das Alter des Items seit dem letzten Update in Sekunden zurück. Das  |
|                      |            |          | Update Age wird auch gesetzt, wenn sich bei einem Update der Wert des Items  |
|                      |            |          | nicht ändert.                                                                |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| last_update_by       | r/o        | str      | Liefert einen String zurück, der auf das Objekt hinweist, durch welches das  |
|                      |            |          | Item zuletzt ein Update erfahren hat.                                        |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| last_value           | r/o        | str      | Liefert den Wert des Items zurück, den es vor der letzten Änderung hatte.    |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| name                 | r/w        | str      | Erlaubt das Abfragen oder Setzen des Namens des Items                        |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| on_change            | r/o        | list     | Liefert die Liste der **on_change** Ausdrücke des Items zurück               |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| on_change_unexpanded | r/w        | list     | Liefert die Liste der **on_change** Ausdrücke des Items zurück, in der       |
|                      |            |          | relative Item Referenzen nicht expandiert sind. Beim Beschreiben des         |
|                      |            |          | Properties werden evtl. enthaltene relative Item Referenzen zur Nutzung      |
|                      |            |          | expandiert.                                                                  |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| on_update            | r/o        | list     | Liefert die Liste der **on_update** Ausdrücke des Items zurück               |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| on_update_unexpanded | r/w        | list     | Liefert die Liste der **on_update** Ausdrücke des Items zurück, in der       |
|                      |            |          | relative Item Referenzen nicht expandiert sind. Beim Beschreiben des         |
|                      |            |          | Properties werden evtl. enthaltene relative Item Referenzen zur Nutzung      |
|                      |            |          | expandiert.                                                                  |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| path                 | r/o        | str      | Liefert den Pfad des Items zurück                                            |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| prev_change          | r/o        | datetime | Liefert ein *datetime* Objekt mit dem Zeitpunkt der vorletzten Änderung des  |
|                      |            |          | Items zurück.                                                                |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| prev_change_age      | r/o        | float    | Liefert das Alter des vorangegangenen Wertes in Sekunden zurück.             |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| prev_change_by       | r/o        | str      | Liefert einen String zurück, der auf das Objekt hinweist, welches das Item   |
|                      |            |          | das vorletzte mal geändert hat.                                              |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| prev_update          | r/o        | datetime | Liefert ein *datetime* Objekt mit dem Zeitpunkt des vorletzten Updates des   |
|                      |            |          | Items zurück. Im Gegensatz zu **prev_change()** wird dieser Zeitstempel auch |
|                      |            |          | verändert, wenn sich bei einem Update der Wert des Items nicht ändert.       |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| prev_update_age      | r/o        | float    | Liefert das Alter des vor-vorangegangenen Wertes in Sekunden zurück.         |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| prev_update_by       | r/o        | str      | Liefert einen String zurück, der auf das Objekt hinweist, durch welches das  |
|                      |            |          | Item das vorletzte mal ein Update erfahren hat.                              |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| prev_value           | r/o        | str      | Liefert den Wert des Items zurück, den es vor der vorletzten Änderung hatte. |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| trigger              | r/w        | list     | Erlaubt das Abfragen oder Setzen der Listes der Trigger (eval_trigger) des   |
|                      |            |          | Items.                                                                       |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| type                 | r/o        | str      | Liefert den Typ des Items zurück                                             |
+----------------------+------------+----------+------------------------------------------------------------------------------+
| value                | r/w        | str      | Das Property value stellt eine Alternative zur Abfrage/Zuweisung durch       |
|                      |            |          | var=**item()** / **item(**value**)** dar.                                    |
+----------------------+------------+----------+------------------------------------------------------------------------------+


+------------------------+------------------------------------------------------------------------------+
| return_parent()        | Liefert den Item-Pfad des übergeordneten Items zurück.                       |
|                        | Aufruf: sh.item.return_parent()                                              |
+------------------------+------------------------------------------------------------------------------+
| return_children()      | Liefert die Item-Pfade der direkt untergeordneten Items zurück. Aufruf:      |
|                        | for child in sh.item.return_children(): ...                                  |
+------------------------+------------------------------------------------------------------------------+
| autotimer(time, value) | Setzt einen Timer bei jedem Werte-Wechsel der Items. Angegeben wird die      |
|                        | Zeit (**time**) die vergehen soll, bis das Item auf den Wert (**value**)     |
|                        | gesetzt wird. Die Zeitangabe erfolgt in Sekunden. Eine Angabe der Dauer in   |
|                        | Minuten ist wie in '10m' möglich.                                            |
+------------------------+------------------------------------------------------------------------------+
| timer(time, value)     | Funktioniert wir **autotimer()**, ausser dass die Aktion nur einmal          |
|                        | ausgeführt wird.                                                             |
+------------------------+------------------------------------------------------------------------------+
| fade(end, step, delta) | Blendet das Item mit der definierten Schrittweite (int oder float) und       |
|                        | timedelta (int oder float in Sekunden) auf einen angegebenen Wert auf oder   |
|                        | ab. So wird z.B.: **sh.living.light.fade(100, 1, 2.5)** das Licht im         |
|                        | Wohnzimmer mit einer Schrittweite von **1** und einem Zeitdelta von **2,5**  |
|                        | Sekunden auf **100** herunterregeln.                                         |
+------------------------+------------------------------------------------------------------------------+


