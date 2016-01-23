const hapi = require('hapi');
const jsonParser = require('body-parser').json();
const Jedi = require(__dirname + '/../models/jedis');
const errorHandle = require(__dirname + '/../lib/error-handle.js');
