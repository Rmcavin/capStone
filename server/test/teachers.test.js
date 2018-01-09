let expect = require('Chai').expect;
let request = require('supertest')(server);
let bcrypt = require('bcrypt');
let server = '../server';

//knex
let knexConfig = require('../knexfile.js')['test'];
let knex = require('knex')(knexConfig);


describe('Teachers', () => {
  describe('Auth', () => {
    //sign up new teacher
    it('should create a new teacher', () => {
      //hash the pw
      let password = bcrypt.hash('testing', 12, (err, hash) => {
        return hash;
      })
      let newTeacher = {firstName: 'Rachel', lastName: 'Cavin', title: 'Ms.', username: 'sample', password: password};
      request.post('/teachers/register')
      .send(newTeacher)
      .end( (err, res) => {
        request.get('/teachers')
        .expect(200)
        .end( (err, res) => {
          expect(res.json).to.contain('Rachel')
          expect(res.json).to.not.contain('testing')
          done()
        })
      })
    })
    it('should return a teacher object', () => {
      let username = 'sampleteacher';
      let password = 'samplePW';


    })
  })
})
