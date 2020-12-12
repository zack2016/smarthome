
Übersetzen und Aktualisieren:


Virtualenv / Pyenv
------------------

If other software is running on the same system then a better choice might be to isolate the needed Python
modules for SmartHomeNG using a virtual environment.
With Python >= 3.5 this is provided with the pyvenv tool, before virtualenv will do this job.
First the home directory of SmartHomeNG is entered and then
a subdirectory ``shpy-virtualenv`` will be created within the home directory of user **smarthome**.
Next the Python package manager is updated to the most recent version and finally the modules are
installed according to requirements in base.txt

.. code-block:: bash

   cd /usr/local/smarthome                   # Change this if needed
   ~/shpy-virtualenv                         # Or "pyenv" of Python >= 3.5
   ~/shpy-virtualenv/bin/activate            # Activates the virtual environment for this shell
   pip install --upgrade pip                 # Update the Python Package Installer inside the virtualenv
   pip install -r requirements/base.txt      # Install base requirements for smarthome.py

Now the dependencies for the core should be met. Some plugins however require further Python modules.
Since every plugin supplies a requirement file, the missing modules can be installed with

.. code-block:: bash

   cd /usr/local/smarthome                            # Change this if needed
   . ~/shpy-virtualenv/bin/activate                   # Activate the virtual environment for this shell
   pip install -r plugins/pluginname/requirements.txt # Install requirements of pluginname.

Keep in mind that some Python modules require additional apt packages for a working installation. Just
take a look at plugins/pluginname/README.md.

Every time you want to use SmartHomeNG with an virtualenv, you must activate it in the current shell:

.. code-block:: bash

   cd /usr/local/smarthome                    # Change this if needed
   . ~/shpy-virtualenv/bin/activate           # Activate the Virtual Environment for this shell

Virtualenv can be deactivated by entering ``deactivate`` in the current shell.
