var request = require('request');
var msg;
module.exports = function(RED) {
    function updateContainer(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            request.post({
                url: process.env.BALENA_SUPERVISOR_ADDRESS + '/v1/update?apikey=' + process.env.BALENA_SUPERVISOR_API_KEY,
                form: {
                    force: true
                }
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
    RED.nodes.registerType("update", updateContainer);
};
