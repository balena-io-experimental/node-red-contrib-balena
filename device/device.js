var request = require('request');
var msg;
module.exports = function(RED) {
    function getDeviceState(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            request(process.env.RESIN_SUPERVISOR_ADDRESS + '/v1/device?apikey=' + process.env.RESIN_SUPERVISOR_API_KEY, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    body = JSON.parse(body);
                    msg = {
                        payload: body
                    };
                    node.send(msg);
                } else {
                  node.error("An error occurred: "+ error);
                }
            });
        });
    }
    RED.nodes.registerType("device", getDeviceState);
};
