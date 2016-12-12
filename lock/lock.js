var request = require('request');
var lockFile = require('lockFile');
var msg;
module.exports = function(RED) {
    function lockUpdates(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
          lockFile.lock('/data/resin-updates.lock', function(error) {
            if (error) {
              return node.error("An error occurred: " + error);
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
