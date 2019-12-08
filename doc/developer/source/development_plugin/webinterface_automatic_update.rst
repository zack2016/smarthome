.. index:: Web Interface; Automatich Updates

.. role:: redsup
.. role:: bluesup



Automatic Updates of Webinterface data :redsup:`new`
====================================================

To update data in the web interface, the web page periodically sends AJAX requests to the plugin and processes the
result by incorporating the new data in the DOM of the web page.

To implement automatic updates, the following has to be added to the web interface:

  - In the class **WebInterface** of the plugin, the method **get_data_html()** has to be implemented/extended to deliver
    the needed data
  - int the html template, the javascript function **handleUpdatedData()** has to be implemented/extended
  - The template variable **update_interval** has to be set to the desired interval (in milli-seconds)


Extending the Python method get_data_html()
-------------------------------------------

...


Extending the Javascript function handleUpdatedData()
-----------------------------------------------------

...


Setting the update interval
---------------------------

At the top of the template file **webif/templates/index.html** you find the following line

.. code-block:: css+jinja

   {% set update_interval = 0 %}

Change it to the desired update interval in milli-seconds. Make sure, that the interval is not too short. It should be
longer than the time needed to execute the Python method **get_data_html()**. If the method only returns data that
has been updated/collected by other Python threads, you can go down to about 1000 msec. If the Python method
**get_data_html()** needs to collect the data when beeing called, you probably should set the update interval not
below 5000 msec.

