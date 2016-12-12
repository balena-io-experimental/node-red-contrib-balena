var request = require('request');
var msg;
module.exports = function(RED) {
    function blinkLed(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            request.post({
                url: process.env.RESIN_SUPERVISOR_ADDRESS + '/v1/blink?apikey=' + process.env.RESIN_SUPERVISOR_API_KEY
            }, function(error, response, body) {
                if (error) {
                    return node.error("An error occurred: " + error);
                }
                msg = {
                    payload: response.statusCode
                };
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("blink", blinkLed);
};
