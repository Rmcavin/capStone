const express = require('express');
const server = express();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');


server.post('/login', (req, res) => {
  knex('students')
    .where('username', req.body.username)
    .first()
    .then((user) => {
      if (user === undefined || user === null) {
        res.send('User not found.')
      } else {
        bcrypt.compare(req.body.password, user.hashpassword, (err, success) => {
          if (success) {
            res.send(user)
          } else {
            res.send('invalid login credentials')
          }
        }
      )}
    })
    .catch( (err) => {
      console.error(err)
    })
  })

  server.post('/new', (req, res) => {
    bcrypt.hash(req.body.password, 12, (err,hash) => {
    knex('students')
      .insert({
        username:req.body.username,
        password:hash,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        grade: req.body.grade,
        createdat: new Date()})
      });
  })

module.exports = server;
