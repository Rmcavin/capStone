const express = require('express');
const server = express();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const util = require('util')

server.patch('/', (req, res) => {
  console.log(req.body);

  knex('grades')
    .select('grades.id', 'grades.score', 'grades.student_id', 'grades.assignment_id', 'grades.class_id')
    .where({student_id:req.body.student_id}).andWhere({assignment_id:req.body.assignment_id}).andWhere({class_id:req.body.class_id}).count('score')
    .groupBy('grades.id')
    .then((count) => {
      if (count.length === 0) {
        return knex('grades')
        .insert({score:req.body.score, student_id:req.body.student_id, assignment_id:req.body.assignment_id, class_id:req.body.class_id, createdat: new Date()},'*')
      }
      else {
        return knex('grades')
          .where({student_id:req.body.student_id}).andWhere({assignment_id:req.body.assignment_id}).andWhere({class_id:req.body.class_id}).count()
          .update({score: req.body.score, updatedat: new Date()})
      }
    })
    .then((grades) => {
      res.send(grades)
    })
  // knex('grades')
  //   .where({student_id:req.body.student_id}).andWhere({assignment_id:req.body.assignment_id})
  //   .update({score: req.body.score, updatedat: new Date()})
  //   .then( (grades) => {
  //     res.end()
  //   })
})

module.exports = server;
