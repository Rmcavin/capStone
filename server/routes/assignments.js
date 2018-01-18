const express = require('express');
const server = express();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');

//add a new assignment
server.post('/new', (req, res) => {
  console.log('hello?');
  knex('assignments')
    .insert({
      assignmentname:req.body.assignmentname,
      type: req.body.type,
      teacher_id:req.body.teacher_id,
      createdat: new Date()},'*')
    .then( (assignment) => {
      console.log(assignment);
      res.send(assignment[0])
    })
    .catch((err) => {
      res.send(err)
    })
})

//update assignments and assign them to a class


module.exports = server
