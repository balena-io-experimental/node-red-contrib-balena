var request = require('request');
var msg;
module.exports = function(RED) {
    function restartService(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {

            request(
               { 
                   uri: process.env.BALENA_SUPERVISOR_ADDRESS + '/v2/applications/'  + process.env.BALENA_APP_ID + '/restart-service?apikey=' + process.env.BALENA_SUPERVISOR_API_KEY,
                   method: 'POST',
                   json : {
                       "serviceName" : msg.payload
                   }
               }
              , function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    // body = JSON.parse(body);
                    msg = {
                        payload: body
                    };
                    node.send(msg);
                } else {
                  node.error("[response.statusCode="+ response.statusCode + "] An error occurred: "+ error);
                }
            });
        });
    }
    RED.nodes.registerType("restart service", restartService);
};
