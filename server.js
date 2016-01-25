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

//Load plugins and start server
server.register([
  require('./routes/jedis_routes')
], (err) => {

  if (err) {
    throw err;
  }

  //Starts the server
  server.start((err) => {
    console.log('Server up at:', server.info.uri);
  });

});
