var request = require('request');
var msg;
module.exports = function(RED) {
    function getState(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            request(process.env.BALENA_SUPERVISOR_ADDRESS + '/v2/state/status?apikey=' + process.env.BALENA_SUPERVISOR_API_KEY, function(error, response, body) {
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
    RED.nodes.registerType("state", getState);
};
