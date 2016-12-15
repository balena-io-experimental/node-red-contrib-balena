# Changelog

## 0.1.7

* fixed a bug that would make the shutdown node behave like a reboot one.

## 0.1.6

* make better use of colors in palettes

## 0.1.5

* fixed a dependency declaration typo for lock/unlock nodes

## 0.1.4

* updates lock supervisor endpoint node
* updates unlock supervisor endpoint node
* updates apply (lock override) supervisor endpoint node

## 0.1.3

* minor fixes (labels typos)

## 0.1.2

* fixed an issue with ping node trying to use API version prefix (not supported from supervisor)

## 0.1.1

* fixed an issue in the httpResponse handler for some of the nodes

## 0.1.0
* first set of supervisor nodes release
  * [blink](https://docs.resin.io/runtime/supervisor-api/#post-v1-blink)
  * [ping](https://docs.resin.io/runtime/supervisor-api/#get-ping)
  * [device](https://docs.resin.io/runtime/supervisor-api/#get-v1-device)
  * [restart](https://docs.resin.io/runtime/supervisor-api/#post-v1-restart)
  * [reboot](https://docs.resin.io/runtime/supervisor-api/#post-v1-reboot)
  * [shutdown](https://docs.resin.io/runtime/supervisor-api/#post-v1-shutdown)
  * [purge](https://docs.resin.io/runtime/supervisor-api/#post-v1-purge)

## 0.0.4
* restart supervisor endpoint node
* purge supervisor endpoint node
* reboot supervisor endpoint node
* shutdown supervisor endpoint node

## 0.0.3
* ping node now returns HTTP Response code
* Supervisor blink endpoint node

## 0.0.2
* changed nodes color and icon
* fixed a bug where Supervisor device endpoint node would return only `state`
* Supervisor ping endpoint node

## 0.0.1
* Intial release
* Supervisor device endpoint node
