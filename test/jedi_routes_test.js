const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const mongoose = require('mongoose');
process.env.MONGOLABL_URI = 'mongodb://localhost/jedis_app_test';
const server = require(__dirname + '/../server');
const Jedi = require(__dirname + '/../models/jedis');
const request = chai.request;
