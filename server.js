'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');//adding mongojs
const errorHandle = require(__dirname + '/lib/error-handle');

//Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 3000
});

//Connect to db
server.app.db = mongojs('hapi-rest-mongo');//Adding db plugin

//Add a route
server.route({
  method: 'GET',
  path: '/jedis',
  handler: function(request, reply) {
    return reply('Hello World!')
  }
});

//Starts the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server up at:', server.info.uri);
});
