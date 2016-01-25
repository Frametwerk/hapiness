const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
process.env.MONGOLABL_URI = 'mongodb://localhost/jedis_app_test';
const request = chai.request;
require(__dirname + '/../server.js');

describe('The Jedis API', () => {

  it('should be able to retrieve all jedis', (done) => {
    request('localhost:3000')
      .get('/jedis')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(Array.isArray(res.body)).to.eql(true);
        done();
      });
  });

  it('should create a jedi with a POST', (done) => {
    request('localhost:3000')
      .post('/jedis')
      .send({name: 'test-jesse',lightsaberColor: 'purple'})
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.body.name).to.eql('test-jesse');
        expect(res.body).to.have.property('_id');
        done();
      });
  });

});
