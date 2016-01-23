// const hapi = require('hapi');
// const jsonParser = require('body-parser').json();
// const Jedi = require(__dirname + '/../models/jedis');
// const errorHandle = require(__dirname + '/../lib/error-handle.js');
//

'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');

exports.register = function(server, options, next) {

  const db = server.app.db;
  const jedis = db.collection('jedis');

  return next();

};

exports.register.attributes = {
  name: 'routes-jedis'
};
