const express = require('express');
const server = express();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');

server.patch('/', (req, res) => {
  console.log('THE REQ',req.body);
  knex('grades')
    .where({student_id:req.body.student_id}).andWhere({assignment_id:req.body.assignment_id})
    .update({score: req.body.score, updatedat: new Date()})
    .then( (res) => {
      res.end()
    })
})

module.exports = server;
