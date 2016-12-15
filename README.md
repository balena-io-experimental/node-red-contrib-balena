# node-red-contrib-resinio
A set of nodes that allow to interact with [resin.io supervisor](https://docs.resin.io/runtime/supervisor-api/) from [Node-RED on resin](https://github.com/resin-io-projects/resin-node-red)

**this set of nodes works only on resin.io applications, check [resin-node-red](https://github.com/resin-io-projects/resin-node-red) for deploying Node-RED on resin.io**

# Installation

```
npm i node-red-contrib-resinio -g
```

# Nodes

### Blink
![blink](https://raw.githubusercontent.com/resin-io-projects/node-red-contrib-resinio/master/docs-assets/blink-node.png)

A wrapper for resin-supervisor [blink endpoint](https://docs.resin.io/runtime/supervisor-api/#post-v1-blink)

Returns the HTTP Status Code

### Ping
![ping](https://raw.githubusercontent.com/resin-io-projects/node-red-contrib-resinio/master/docs-assets/ping-node.png)

A wrapper for resin-supervisor [ping endpoint](https://docs.resin.io/runtime/supervisor-api/#get-ping)

Returns the HTTP Status Code

### Device
![device](https://raw.githubusercontent.com/resin-io-projects/node-red-contrib-resinio/master/docs-assets/device-node.png)

A wrapper for resin-supervisor [device state endpoint](https://docs.resin.io/runtime/supervisor-api/#get-v1-device)

Returns a device state JSON object

### Restart
![restart](https://raw.githubusercontent.com/resin-io-projects/node-red-contrib-resinio/master/docs-assets/restart-node.png)

A wrapper for resin-supervisor [container restart endpoint](https://docs.resin.io/runtime/supervisor-api/#post-v1-restart)

Returns the HTTP Status Code

### Reboot
![reboot](https://raw.githubusercontent.com/resin-io-projects/node-red-contrib-resinio/master/docs-assets/reboot-node.png)

A wrapper for resin-supervisor [reboot endpoint](https://docs.resin.io/runtime/supervisor-api/#post-v1-reboot)

Returns the HTTP Status Code

### Shutdown
![shutdown](https://raw.githubusercontent.com/resin-io-projects/node-red-contrib-resinio/master/docs-assets/shutdown-node.png)

A wrapper for resin-supervisor [shutdown endpoint](https://docs.resin.io/runtime/supervisor-api/#post-v1-shutdown)

Returns the HTTP Status Code

### Purge
![purge](https://raw.githubusercontent.com/resin-io-projects/node-red-contrib-resinio/master/docs-assets/purge-node.png)

A wrapper for resin-supervisor [data purge endpoint](https://docs.resin.io/runtime/supervisor-api/#post-v1-purge)

Returns a JSON object

### Lock
![lock](https://raw.githubusercontent.com/resin-io-projects/node-red-contrib-resinio/master/docs-assets/blink-node.png)

sets the update lockfile, more info [here](https://github.com/resin-io/resin-supervisor/blob/master/docs/update-locking.md)

returns `true` when the action completes, throws an error and returns `false` when the action fails

### Unlock
![unlock](https://raw.githubusercontent.com/resin-io-projects/node-red-contrib-resinio/master/docs-assets/blink-node.png)

removes the update lockfile, more info [here](https://github.com/resin-io/resin-supervisor/blob/master/docs/update-locking.md)

returns `true` when the action completes, throws an error and returns `false` when the action fails

### Update
![update](https://raw.githubusercontent.com/resin-io-projects/node-red-contrib-resinio/master/docs-assets/blink-node.png)

A wrapper for resin-supervisor [update endpoint](https://docs.resin.io/runtime/supervisor-api/#post-v1-update) with [lock override](https://github.com/resin-io/resin-supervisor/blob/master/docs/update-locking.md#overriding-the-lock)

Returns the HTTP Status Code

# Changelog
please see [CHANGELOG.md](https://github.com/resin-io-projects/node-red-contrib-resinio/blob/master/CHANGELOG.md)

## License

Copyright 2016 Resinio Ltd.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
