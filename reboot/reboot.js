var request = require('request');
var msg;
module.exports = function(RED) {
    function rebootDevice(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            request.post({
                url: process.env.RESIN_SUPERVISOR_ADDRESS + '/v1/reboot?apikey=' + process.env.RESIN_SUPERVISOR_API_KEY
            }, function(error, httpResponse, body) {
                if (!error && response.statusCode == 204) {
                    body = JSON.parse(body);
                    msg = {
                        payload: body
                    };
                    node.send(msg);
                } else {
                    node.error("An error occurred: " + error);
                }
            });
        });
    }
    RED.nodes.registerType("reboot", rebootDevice);
};
