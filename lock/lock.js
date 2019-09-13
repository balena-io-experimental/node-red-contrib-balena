var request = require('request');
var lockFile = require('lockfile');
var msg;
module.exports = function(RED) {
    function lockUpdates(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
          lockFile.lock('/tmp/balena/updates.lock', function(error) {
            if (error) {
              node.error("An error occurred: " + error);
              msg = {
                  payload: false
              };
              node.send(msg);
              return;
            }
            msg = {
                payload: "updates locked"
            };
            node.send(msg);
          });
        });
    }
    RED.nodes.registerType("lock", lockUpdates);
};
