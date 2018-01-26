const express = require('express');
const server = express();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');


server.post('/new', (req, res) => {
  knex('classes')
    .insert({
      classname:req.body.classname,
      subject: req.body.subject,
      teacher_id:parseInt(req.body.teacher_id),
      createdat: new Date()},'*')
    .then( (newClass) => {
      res.send(newClass[0])
    })
    .catch((err) => {
      //console.log(err);
      res.send(err)
    })
})

server.patch('/', (req, res) => {
  knex('classes')
    .where({'classes.id':req.body.class_id})
    .update({classname: req.body.classname, subject: req.body.subject, updatedat: new Date()}, '*')
    .then( (update) => {
      res.send(update)
    })
    .catch((err) => {
      //console.error(err)
      res.send(err)
    })
})


module.exports = server;
