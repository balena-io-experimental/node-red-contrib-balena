var request = require('request');
var msg;
module.exports = function(RED) {
    function pingSupervisor(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            request(process.env.RESIN_SUPERVISOR_ADDRESS + '/v1/ping?apikey=' + process.env.RESIN_SUPERVISOR_API_KEY, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    msg = {
                        payload: "OK"
                    };
                    node.send(msg);
                } else {
                  msg = {
                      payload: "KO"
                  };
                  node.send(msg);
                }
            });
        });
    }
    RED.nodes.registerType("ping", pingSupervisor);
};
