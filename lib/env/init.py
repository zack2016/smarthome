import uptime
import socket

# lib/env/init.py

sh.env.core.version(sh.version)
sh.env.core.start(sh.now())

hostname = socket.gethostname()
sh.env.system.name(hostname)

# system start
uptime = uptime.uptime()
start = sh.now() - datetime.timedelta(seconds=uptime)
sh.env.system.start(start)
