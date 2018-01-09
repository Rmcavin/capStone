const express = require('express');
const server = express();
const knex = require('../db/knex');
//const bcrypt = require('bcrypt');
//const saltRounds = 12;

//get all the teachers
server.get('/teachers', (req, res) => {

})

//get a particular teacher
server.get('/teachers/:id', (req, res) => {

})

//register new teachers
// server.post('/teachers/register', (req, res) => {
//   (req, res) => {
//     let username = req.body.teacherUserName;
//     let firstName = req.body.firstName;
//     let lastName = req.body.lastName;
//     let title = req.body.title;
//     bcrypt.hash(req.body.teacherPassWord, saltRounds, (err, hash) => {
//       let user = new User({username:username, password:hash, firstName:firstName, lastName:lastName, title:title});
//       knex('teachers')
//         insert(user)
//         .then((teachers) => {
//           res.json(teachers[0])
//         })
//         .catch( (err) => {
//           next(err);
//         });
//     })
//   }
// })

//log in a teachers
server.post('/teachers/login', (req, res) => {

})

module.exports = server;
