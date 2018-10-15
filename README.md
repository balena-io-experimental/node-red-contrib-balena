# node-red-contrib-balena
A set of nodes that allow to interact with [balena supervisor](https://docs.balena.io/runtime/supervisor-api/) from [Node-RED on balena](https://github.com/balena-projects/balena-node-red)

**this set of nodes works only on balena applications, check [balena-node-red](https://github.com/balena-projects/balena-node-red) for deploying Node-RED on balena**

# Installation

```
npm i node-red-contrib-balena -g
```

# Nodes

### Blink
![blink](https://raw.githubusercontent.com/balena-projects/node-red-contrib-balena/master/docs-assets/blink-node.png)

A wrapper for balena-supervisor [blink endpoint](https://docs.balena.io/runtime/supervisor-api/#post-v1-blink)

Returns the HTTP Status Code

### Ping
![ping](https://raw.githubusercontent.com/balena-projects/node-red-contrib-balena/master/docs-assets/ping-node.png)

A wrapper for balena-supervisor [ping endpoint](https://docs.balena.io/runtime/supervisor-api/#get-ping)

Returns the HTTP Status Code

### Device
![device](https://raw.githubusercontent.com/balena-projects/node-red-contrib-balena/master/docs-assets/device-node.png)

A wrapper for balena-supervisor [device state endpoint](https://docs.balena.io/runtime/supervisor-api/#get-v1-device)

Returns a device state JSON object

### Restart
![restart](https://raw.githubusercontent.com/balena-projects/node-red-contrib-balena/master/docs-assets/restart-node.png)

A wrapper for balena-supervisor [container restart endpoint](https://docs.balena.io/runtime/supervisor-api/#post-v1-restart)

Returns the HTTP Status Code

### Reboot
![reboot](https://raw.githubusercontent.com/balena-projects/node-red-contrib-balena/master/docs-assets/reboot-node.png)

A wrapper for balena-supervisor [reboot endpoint](https://docs.balena.io/runtime/supervisor-api/#post-v1-reboot)

Returns the HTTP Status Code

### Shutdown
![shutdown](https://raw.githubusercontent.com/balena-projects/node-red-contrib-balena/master/docs-assets/shutdown-node.png)

A wrapper for balena-supervisor [shutdown endpoint](https://docs.balena.io/runtime/supervisor-api/#post-v1-shutdown)

Returns the HTTP Status Code

### Purge
![purge](https://raw.githubusercontent.com/balena-projects/node-red-contrib-balena/master/docs-assets/purge-node.png)

A wrapper for balena-supervisor [data purge endpoint](https://docs.balena.io/runtime/supervisor-api/#post-v1-purge)

Returns a JSON object

### Lock
![lock](https://raw.githubusercontent.com/balena-projects/node-red-contrib-balena/master/docs-assets/lock-node.png)

sets the update lockfile, more info [here](https://github.com/resin-io/resin-supervisor/blob/master/docs/update-locking.md)

returns `true` when the action completes, throws an error and returns `false` when the action fails

### Unlock
![unlock](https://raw.githubusercontent.com/-projects/node-red-contrib-balena/master/docs-assets/unlock-node.png)

removes the update lockfile, more info [here](https://github.com/resin-io/resin-supervisor/blob/master/docs/update-locking.md)

returns `true` when the action completes, throws an error and returns `false` when the action fails

### Update
![update](https://raw.githubusercontent.com/-projects/node-red-contrib-balena/master/docs-assets/update-node.png)

A wrapper for balena-supervisor [update endpoint](https://docs.balena.io/runtime/supervisor-api/#post-v1-update) with [lock override](https://github.com/resin-io/balena-supervisor/blob/master/docs/update-locking.md#overriding-the-lock)

Returns the HTTP Status Code

# Changelog
please see [CHANGELOG.md](https://github.com/-projects/node-red-contrib-balena/blob/master/CHANGELOG.md)

## License

Copyright 2016 balena Ltd.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
