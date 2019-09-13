var request = require('request');
var msg;
module.exports = function(RED) {
    function pingSupervisor(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            request(process.env.BALENA_SUPERVISOR_ADDRESS + '/ping?apikey=' + process.env.BALENA_SUPERVISOR_API_KEY, function(error, response, body) {
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
    RED.nodes.registerType("ping", pingSupervisor);
};
