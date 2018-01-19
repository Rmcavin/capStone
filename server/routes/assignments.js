const express = require('express');
const server = express();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');

//add a new assignment
server.post('/new', (req, res) => {
  knex('assignments')
    .insert({
      assignmentname:req.body.assignmentname,
      type: req.body.assignmenttype,
      teacher_id:parseInt(req.body.teacher_id),
      createdat: new Date()},'*')
    .then( (assignment) => {
      console.log('the result from db',assignment);
      res.send(assignment[0])
    })
    .catch((err) => {
      res.send(err)
    })
})

//update assignments and assign them to a class


module.exports = server
