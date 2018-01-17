const express = require('express');
const server = express();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');

//student login
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

  //add a new student (via teacher interface)
  server.post('/new', (req, res) => {
    console.log('adding a student',req.body);
    bcrypt.hash(req.body.password, 12, (fail,hash) => {
      //console.log(req.body.class_id);
    return knex('students')
      .insert({
        username: req.body.username,
        hashpassword: hash,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        grade: parseInt(req.body.grade),
        createdat: new Date()
      },'*')
        .then((student) => {
          console.log('student?', student);
          return knex('students_class')
          .insert({
            student_id: student[0].id,
            class_id: parseInt(req.body.class_id)
          }, '*')
          .then((joinids) => {
            console.log('result?',student);
            res.send(student[0])
          })
          .catch((err) => {
            res.send(err)
          })
        })
        .catch((err) => {
          res.send(err)
        })
    })
  })

  //get the classes a student is in
  server.get('/:id/classes', (req, res) => {
    console.log('hello?');
    knex('students')
      .where({'students.id':req.params.id})
      .innerJoin('students_class', 'students.id', 'students_class.student_id')
      .innerJoin('classes', 'students_class.class_id', 'classes.id')
      .then( (classes) => {
        console.log(classes);
        res.send(classes)
      })
      .catch( (err) => {
        console.log(err);
        res.send(err)
      })
  })

  //get the students grades in a class
  server.get('/:id/classes/:classid/assignments', (req, res) => {
    knex('grades')
      .select('*')
      .where({'class_id':req.params.classid})
      .innerJoin('assignments', 'grades.assignment_id', 'assignments.id')
      .innerJoin('students', 'grades.student_id', req.params.id)
      .then((grades) => {
        console.log(grades);
      })
  })

  //update a student record
  server.patch('/', (req, res) => {
    console.log(req);
    let fullName = req.body.name.split(' ');
    let firstname = fullName[0];
    let lastname = fullName[1];
    bcrypt.hash(req.body.password, 12, (err,hash) => {
      knex('students')
        .where({id:req.body.student_id})
        .update({
          username:req.body.username,
          hashpassword: hash,
          grade: req.body.grade,
          firstname: firstname,
          lastname: lastname,
          updatedat: new Date()
        })
        .then( (res) => {
          console.log('the res', res);
          res.end()
        })
      .catch( (err) => {
        res.send(err)
      })
    })
  })

module.exports = server;
