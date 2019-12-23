.. index:: Logiken; Datum und Zeit
.. index:: Logiken; holidays
.. index:: Logiken; Feiertage
.. index:: holidays; Logiken
.. index:: Feiertage; Logiken

.. role:: bluesup
.. role:: redsup

Feiertage, Daten und Zeiten :redsup:`Neu`
=========================================

Das Modul **shtime** stellt eine Reihe von Funktionen zur Verfügung, die es erlauben festzustellen ob ein Datum ein
Feiertag ist (und welcher). Dazu muss die Verwendung von Feiertagen in **/etc/holidays.yaml** konfiguriert sein.

Weiterhin gibt es Funktionen, die den Umgang mit Datums und Zeitangaben vereinfachen.

.. note::

   Diese Funktionen können außer in Logiken auch in **eval** Ausdrücken in Item Attributen verwendet werden.


Die Funktionen für Feiertags- und Wochenend-Handling sind folgende:

+---------------------------------+------------------------------------------------------------------------------------+
| Funktion                        | Erläuterung                                                                        |
+=================================+====================================================================================+
| shtime.is_holiday(date)         | Liefert **True**, falls das Datum ein Feiertag ist                                 |
+---------------------------------+------------------------------------------------------------------------------------+
| is_public_holiday(date)         | Liefert **True**, falls das Datum ein gesetzlicher Feiertag ist                    |
+---------------------------------+------------------------------------------------------------------------------------+
| shtime.holiday_name(date)       | Liefert den Namen des Feiertags, falls das Datum ein Feriertag ist                 |
+---------------------------------+------------------------------------------------------------------------------------+
| shtime.holiday_list(year)       | Liefert eine Liste aller Feiertage für ein Jahr                                    |
+---------------------------------+------------------------------------------------------------------------------------+
| shtime.public_holiday_list(year)| Liefert eine Liste aller gesetzlichen Feiertage für ein Jahr                       |
+---------------------------------+------------------------------------------------------------------------------------+
| shtime.weekday(date)            | Liefert den Wochentag nach ISO (1=Montag - 7=Sonntag) für das angegebene Datum     |
+---------------------------------+------------------------------------------------------------------------------------+
| shtime.weekday_name(date)       | Liefert den Namen des Wochentags für das angegebene Datum                          |
+---------------------------------+------------------------------------------------------------------------------------+
| shtime.is_weekend(date)         | Liefert **True**, falls das Datum auf ein Wochenende fällt                         |
+---------------------------------+------------------------------------------------------------------------------------+


Die Funktionen für das Datums-Handling sind folgende:

+------------------------------------+---------------------------------------------------------------------------------+
| Funktion                           | Erläuterung                                                                     |
+====================================+=================================================================================+
| shtime.today()                     | Liefert das aktuelle Datum                                                      |
+------------------------------------+---------------------------------------------------------------------------------+
| shtime.tomorrow()                  | Liefert das Datum des folgenden Tages                                           |
+------------------------------------+---------------------------------------------------------------------------------+
| shtime.yesterday()                 | Liefert das Datum des zurück liegenden Tages                                    |
+------------------------------------+---------------------------------------------------------------------------------+
| shtime.current_year()              | Liefert das aktuelle Jahr                                                       |
+------------------------------------+---------------------------------------------------------------------------------+
| shtime.current_month()             | Liefert den aktuellen Monat                                                     |
+------------------------------------+---------------------------------------------------------------------------------+
| shtime.current_day()               | Liefert den aktuellen Tag                                                       |
+------------------------------------+---------------------------------------------------------------------------------+
| shtime.day_of_year(date)           | Liefert als Ergebnis, der wievielte Tag im Jahr das angegebene Datum ist        |
+------------------------------------+---------------------------------------------------------------------------------+
| shtime.length_of_year(year)        | Liefert die Anzahl Tage, die das angegebene Jahr hat                            |
+------------------------------------+---------------------------------------------------------------------------------+
| shtime.length_of_month(month, year)| Liefert die Anzahl Tage, die der angegebene Monat im angegebenen Jahr hat       |
+------------------------------------+---------------------------------------------------------------------------------+
| shtime.calendar_week(date)         | Liefert die Kalenderwoche (nach ISO), in der das angegebe Datum liegt           |
+------------------------------------+---------------------------------------------------------------------------------+


.. note::

   Funktionen, die als Parameter ein **date** erwarten, können ohne diesen Parameter aufgerufen werden. Dann wird das
   aktuelle Datum verwendet.

   Funktionen, die als Parameter ein **year** und/oder **month** erwarten, können ohne diesen Parameter aufgerufen
   werden. Dann wird eine Liste über alle vorberechneten Feiertage zurück geliefert.


.. tip::

   Die Funktionen wie **shtime.today()** sind im Zusammenhang mit den Feiertags-Funktionen nützlich. Um z.B. festzustellen,
   ob der folgende Tag ein Feiertag ist, kann einfach **shtime.is_holiday(shtime.tomorrow())** aufgerufen werden.


Die Funktionen für das Zeit-Handling sind folgende:

+---------------------------------+----------------------------------------------------------------------------------------+
| Funktion                        | Erläuterung                                                                            |
+=================================+========================================================================================+
| shtime.now()                    | Liefert die aktuelle Zeit, unter Berücksichtigung der Zeitzone                         |
+---------------------------------+----------------------------------------------------------------------------------------+
| shtime.tz()                     | Liefert die aktuelle lokale Zeitzone                                                   |
+---------------------------------+----------------------------------------------------------------------------------------+
| shtime.tzname()                 | Liefert den Namen der aktuellen lokalen Zeitzone (z.B. CET)                            |
+---------------------------------+----------------------------------------------------------------------------------------+
| shtime.utcnow()                 | Liefert die aktuelle Zeit in GMT, also ohne Berücksichtigung der Zeitzone              |
+---------------------------------+----------------------------------------------------------------------------------------+
| shtime.runtime()                | Liefert die Laufzeit von SmartHomeNG, seit SmartHomeNG das letzte mal gestartet wurde. |
+---------------------------------+----------------------------------------------------------------------------------------+


