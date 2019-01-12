# Module admin

This module implements the administration interface for SmartHomeNG.


## Requirements

This module is running under SmmartHomeNG versions beyond v1.5.1. It requires Python >= 3.4 as well as ... . You can install the libraries (python modules) with:

```
(sudo apt-get install ...)
sudo pip3 install ...
```

And please pay attention that the lib(s) are installed for Python3 and not an older Python 2.7 that is probably installed on your system. Be carefull to use `pip3` and nor `pip`.

> Note: This module needs the module handling in SmartHomeNG to be activated. Make sure, that `use_modules`in `etc/smarthome.yaml` is **not** set to False!


## Configuration

### etc/module.yaml


```yaml
# etc/module.yaml
admin:
    module_name: admin
```


## API of module admin

### PLUGINS API

####GET /api/plugins
liefert die Liste der installierten Plugins

#### GET /api/plugins/config
liefert die gesamte config

#### POST /api/plugins/config/\<neu> 
legt eine neue Confic-section Namens ‚\<neu>‘ an

#### PUT /api/plugins/config/\<plgsection>
Macht ein Update auf section ‚\<plgsection>‘

#### DELETE /api/plugins/config/\<plgsection> 
Löscht section ‚\<plgsection>‘




### Test if module admin is loaded

`dummy` is a loadlable module. Therefore there is no guarantiee that it is present in every system. Before you can use this module, you have to make sure ist is loaded. You can do it by calling a method of the main smarthome object. Do it like this:

```
self.classname = self.__class__.__name__

try:
    self.mod_admin = self._sh.get_module('admin')
except:
    self.mod_admin = None
    
if self.mod_admin == None:
    # Do what is necessary if you can't use the admin interface
    # for your plugin. For example:
    self.logger.error('{}: Module ''admin'' not loaded - Abort loading of plugin {0}'.format(self.classname))
    return
```

