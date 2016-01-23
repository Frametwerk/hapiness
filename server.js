'use strict';

const Hapi = require('hapi');
const errorHandle = require(__dirname + '/lib/error-handle');

//Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 3000
});

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
