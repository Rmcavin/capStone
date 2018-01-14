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
  //not necessary at this point
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
        .then((teacher) => {
          res.send(teacher)
        })
        .catch( (err) => {
          console.error(err)
          res.send('invalid registration');
        });
    })
})

//log in a teachers
server.post('/login', (req, res) => {
  knex('teachers')
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
          let key = assignmentKey(studentGrades);
          let result = {columns: columns, grades: gradeData, key: key};
          res.send(result)
        })
      .catch( (err) => {
        res.send(err)
      })
  })

  function processData(grades) {
    console.log('hi?');
    let processedData = [];
    let entry = {}
    count = grades.length;
    grades.forEach( (el) => {
      let fullName = `${el.firstname} ${el.lastname}`
      //if there is no fullname, set it
      if (!entry.name) {
        entry.name = fullName
        entry.studentId = el.student_id;
      }
      if (entry.name !== fullName) {
        processedData.push(entry)
        entry = {}
        entry.name = fullName;
        entry.studentId = el.student_id;
      }
      entry[el.assignmentname] = el.score;
      count -= 1;
      //if this is the last entry push it now
      if (count === 0) {
        processedData.push(entry)
      }
    })
    console.log('done');
    return processedData;
  }

  function getColumns(grades) {
    console.log('hey?');
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
    console.log('done');
    return columns;
  }

  function assignmentKey(grades) {
    console.log('hello?');
    let assignmentMap = {};
    grades.forEach( (el) => {
      if (!assignmentMap.hasOwnProperty(el.assignmentname)) {
        console.log(el);
        assignmentMap[el.assignmentname] = el.assignment_id;
      }
    })
    return assignmentMap;
  }


module.exports = server;
