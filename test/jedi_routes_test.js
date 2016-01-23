const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
process.env.MONGOLABL_URI = 'mongodb://localhost/jedis_app_test';
const server = require(__dirname + '/../server');
const request = chai.request;
