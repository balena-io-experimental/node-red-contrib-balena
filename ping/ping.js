var request = require('request');
var msg;
module.exports = function(RED) {
    function pingSupervisor(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            request(process.env.RESIN_SUPERVISOR_ADDRESS + '/v1/ping?apikey=' + process.env.RESIN_SUPERVISOR_API_KEY, function(error, response, body) {
                msg = {
                    payload: response.statusCode
                };
                node.send(msg);
            });
        });
    }
    RED.nodes.registerType("ping", pingSupervisor);
};
