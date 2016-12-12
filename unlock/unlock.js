var request = require('request');
var lockFile = require('lockfile');
var msg;
module.exports = function(RED) {
    function unlockUpdates(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
          lockFile.unlock('/data/resin-updates.lock', function(error) {
            if (error) {
              return node.error("An error occurred: " + error);
            }
            msg = {
                payload: "updates unlocked"
            };
            node.send(msg);
          });
        });
    }
    RED.nodes.registerType("unlock", unlockUpdates);
};
