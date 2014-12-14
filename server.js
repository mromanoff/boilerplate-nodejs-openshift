'use strict';

var app = require('./app');

var serverPort = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var serverIpAddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
 
app.listen(serverPort, serverIpAddress, function () {
  console.log( "Listening on " + serverIpAddress + ", port " + serverPort);
});
