Abschlussarbeiten
=================

Manche Kommandos auf der Linux Shell gehen einfacher von der Hand, wenn man
Abkürzungen nutzen kann. Folgende Kommandos bieten sich an:

.. code-block:: bash

   alias la='ls -A'
   alias ll='ls -l'
   alias ls='ls --color=auto'
   alias ..='cd ..'
   alias cli='rlwrap telnet $IP 2323'
   alias e='grep "FATAL\|ERROR\|WARNING\|CRITICAL"'
   alias sh.error='tail -f -n 500 /var/log/smarthome/smarthome.log | e | colorize yellow .*WARNING.* purple .*ERROR.* red .*CRITICAL.* red .*FATAL.* '
   alias sh.log='tail -f -n 50 /var/log/smarthome/smarthome.log | colorize green .*INFO.* yellow .*WARNING.* purple .*ERROR.* gray .*DEBUG.* red .*CRITICAL.* red .*FATAL.* '

Ein guter Ort die einzufügen ist die ``.bashrc`` des Benutzers
**smarthome**.

.. code-block:: bash

   cd ~
   nano .bashrc

Um das colorize-Skript einzusetzen, muss es zuerst heruntergeladen und
korrekt verschoben werden:

.. code-block:: bash

   cd ~
   wget http://www.fam.tuwien.ac.at/~schamane/_/_media/bash:mycolorize-r.sh
   mv mycolorize.sh /usr/local/bin/colorize
   chmod u+x /usr/local/bin/colorize

Für den Kurzbefehl ``cli``oben muß ``rlwrap`` noch zu installiert werden mit:

.. code-block:: bash

   apt-get install rlwrap

SmartHomeNG als Dienst einrichten
---------------------------------

Um SmartHomeNG als Dienst zu betreiben muß dazu noch eine Startup-Datei
für systemd erstellt werden.

.. warning::
    Bevor man ale *Neuuser* SmartHomeNG als Dienst einrichtet,
    sollte man das System verstanden haben und es sollte einigermaßen
    fehlerfrei laufen.

Zum Einrichten den Texteditor anwerfen mit

.. code-block:: bash

   sudo nano /lib/systemd/system/smarthome.service

und folgenden Text hineinkopieren:

.. code-block:: bash

   [Unit]
   Description=SmartHomeNG daemon
   After=network.target
   After=knxd.service
   After=knxd.socket

   [Service]
   Type=forking
   ExecStart=/usr/bin/python3 /usr/local/smarthome/bin/smarthome.py
   User=smarthome
   PIDFile=/usr/local/smarthome/var/run/smarthome.pid
   Restart=on-abort

   [Install]
   WantedBy=default.target

Der so vorbereitete Dienst kann über den systemctl Befehl gestartet
werden.

.. code-block:: bash

   sudo systemctl start smarthome.service

Im Log schauen, ob keine Fehlermeldung beim Starten geschrieben wurde.

.. code-block:: bash

   tail /usr/local/smarthome/var/log/smarthome.log

Wenn alles ok ist, kann der Autostart aktiviert werden:

.. code-block:: bash

   sudo systemctl enable smarthome.service

Bei Systemstart wird nun SmartHomeNG automatisch gestartet.

Um den Dienst wieder auszuschalten und den Neustart bei Systemstart zu
verhindern nutzt man:

.. code-block:: bash

   sudo systemctl disable smarthome.service

Um zu sehen, ob SmartHomeNG läuft, genügt ein

.. code-block:: bash

   sudo systemctl status smarthome.service

Läuft es noch nicht und man möchte sozusagen manuell starten reicht ein:

.. code-block:: bash

   sudo systemctl start smarthome.service

Ein Neustart von SmartHomeNG würde mit

.. code-block:: bash

   sudo systemctl restart smarthome.service

funktionieren, ein Stop von SmartHomeNG entsprechend

.. code-block:: bash

   sudo systemctl stop smarthome.service
