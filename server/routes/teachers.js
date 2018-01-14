const express = require('express');
const server = express();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');

function User(username, hash, firstname, lastname, title) {
  this.username = username;
  this.hashpassword = hash;
  this.firstname = firstname;
  this.lastname = lastname;
  this.title = title;
  this.createdat = new Date();
}

//get all the teachers
server.get('/', (req, res) => {

})

//register new teachers
server.post('/register', (req, res) => {
  console.log('registration');
    let username = req.body.username;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let title = req.body.title;
    console.log(req.body);
    bcrypt.hash(req.body.password, 12, (err, hash) => {
      let user = new User(username, hash, firstname, lastname, title);
      knex('teachers')
        .insert(user)
        .returning('*')
        .then((teachers) => {
          console.log(teachers);
          res.send(teachers)
        })
        .catch( (err) => {
          console.error(err)
          res.send('invalid registration');
        });
    })
})

//log in a teachers
server.post('/login', (req, res) => {
  console.log('am I in here?');
  knex('teachers')
    .where('username', req.body.username)
    .first()
    .then((user) => {
      if (user === undefined || user === null) {
        res.send('User not found.')
      } else {
        bcrypt.compare(req.body.password, user.hashpassword, (err, success) => {
          if (success) {
            console.log('success');
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

//get a particular teacher
server.post('/:id', (req, res) => {
  knex('teachers')
    .where({username:req.body.username})
    .first()
    .then( (user) => {
      if (user === undefined || user === null) {
        res.send('User not found.')
      } else {
        console.log(user);
        res.send(user);
      }
    })
})

//get all the classes for a teacher
server.get('/:id/classes', (req, res) => {
  let teacherid = req.params.id;
  knex('teachers')
    .where({id:teacherid}).first().then( (teacher) => {
      knex('classes')
        .select('*').where({teacher_id:teacherid})
          .then( (classes) => {
            res.status(200)
            res.json(classes)
        }).catch( (err) => {
          res.status(500)
          res.send(err)
        })
    }).catch( (err) => {
      res.status(500)
      res.send(err)
    })
})

  //get assignments, students, grades for a class
  server.get('/:id/classes/:classid/assignments' , (req, res) => {
    let classid = req.params.classid;
      knex('grades')
        .select('*')
        .where({'class_id':classid})
        .innerJoin('assignments', 'grades.assignment_id', 'assignments.id')
        .innerJoin('students', 'grades.student_id', 'students.id')
        .then( (studentGrades) => {
          let gradeData = processData(studentGrades);
          let columns = getColumns(studentGrades);
          let result = {columns: columns, grades: gradeData};
          console.log(result);
          res.send(result)
        })
      .catch( (err) => {
        res.send(err)
      })
  })

  function processData(grades) {
    let processedData = [];
    let entry = {}
    count = grades.length;
    grades.forEach( (el) => {
      let fullName = `${el.firstname} ${el.lastname}`
      //if there is no fullname, set it

      if (!entry.name) {
        entry.name = fullName
        console.log('hello?');
      }
      if (entry.name !== fullName) {
        console.log('hello?');
        processedData.push(entry)
        entry = {}
        entry.name = fullName;
      }
      else if (!entry.name) {
        console.log('hey?');

      }
      entry[el.assignmentname] = el.score;
      console.log(entry);
      count -= 1;
      if (count === 0) {
        processedData.push(entry)
      }
    })
    return processedData;
  }

  function getColumns(grades) {
    console.log('in function');
    let columnnames = ['name']
    let columns = [];


    grades.forEach( (el) => {
      if (columnnames.indexOf(el.assignmentname) === -1) {
        columnnames.push(el.assignmentname)
      }
    })
    columnnames.forEach( (el) => {
      columns.push({Header: el, accessor: el})
    })
    return columns;
  }


module.exports = server;
