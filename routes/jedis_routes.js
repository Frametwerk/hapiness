'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');

exports.register = function(server, options, next) {

  const db = server.app.db;
  const jedis = db.collection('jedis');

  server.route({
    method: 'GET',
    path: '/jedis',
    handler: function(request, reply) {

      jedis.find((err, docs) => {

        if (err) {
          return reply(Boom.badData('Internal MongoDB error', err));
        }

        reply(docs);
      });
    }
  });

  server.route({
    method: 'GET',
    path: '/jedis/{id}',
    handler: function(request, reply) {

      jedis.findOne({
        _id: request.params.id
      }, (err, doc) => {

        if (err) {
          return reply(Boom.badData('Internal MongoDB error', err));
        }

        if (!doc) {
          return reply(Boom.notFound());
        }

        reply(doc);
      });
    }
  });

  server.route({
    method: 'POST',
    path: '/jedis',
    handler: function(request, reply) {

      const jedi = request.payload;

      //Create an id
      jedi._id = uuid.v1();

      jedis.save(jedi, (err, result) => {

        if (err) {
          return reply(Boom.badData('Internal Mongodb error', err));
        }

        reply(jedi);
      });
    },
    config: {
      validate: {
        payload: {
          name: Joi.string().min(1).required(),
          lightsaberColor: Joi.string().min(3).required(),
          world: Joi.string().min(1)
        }
      }
    }
  });

  server.route({
    method: 'PATCH',
    path: '/jedis/{id}',
    handler: function(request, reply) {

      jedis.update({
        _id: request.params.id
      }, {
        $set: request.payload
      }, function(err, result) {

        if (err) {
          return reply(Boom.badData('Internal MongoDB error', err));
        }

        if (result.n === 0) {
          return reply(Boom.notFound());
        }

        reply().code(204);
      });
    },
    config: {
      validate: {
        payload: Joi.object({
          name: Joi.string().min(1).optional(),
          lightsaberColor: Joi.string().min(3).optional(),
          world: Joi.string().min(1).optional()
        }).required().min(1)
      }
    }
  });

  server.route({
    method: 'DELETE',
    path: '/jedis/{id}',
    handler: function(request, reply) {

      jedis.remove({
        _id: request.params.id
      }, function(err, result) {

        if (err) {
          return reply(Boom.badData('Internal MongoDB error', err));
        }

        if (result.n === 0) {
          return reply(Boom.notFound());
        }

        reply().code(204);
      });
    }
  });

  return next();

};

exports.register.attributes = {
  name: 'routes-jedis'
};
