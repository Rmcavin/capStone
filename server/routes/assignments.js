const express = require('express');
const server = express();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const moment = require('moment')

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
server.patch('/', (req, res) => {
  console.log('req.body',req.body);
  knex('assignments')
  .where({'assignments.id':req.body.assignment_id})
  .update({assignmentname: req.body.assignmentname, type: req.body.type, updatedat: new Date()}, '*')
  .then((update) => {
    return knex('assignments_class')
    .where({'assignment_id': req.body.assignment_id})
    .andWhere({'class_id': req.body.class_id})
    .count('due_date')
    .then((count) => {
      console.log(count);
      if (count[0].count === '0') {
        console.log('hello?');
        return knex('assignments_class')
        .insert({assignment_id: req.body.assignment_id, class_id:req.body.class_id, due_date: moment(req.body.value, 'M/D/YYYY', true).format()})
      }
      else {
        console.log('hi?');
        return knex('assignments_class')
        .where({'assignment_id': req.body.assignment_id})
        .andWhere({'class_id': req.body.class_id})
        .update({due_date: req.body.value})
      }
    }).then((result) => {
      console.log(result);
      res.send('success');
    })
    .catch((err) => {
      res.send(err)
    })
  })
})


module.exports = server
