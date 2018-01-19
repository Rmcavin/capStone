const express = require('express');
const server = express();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const moment = require('moment')

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
    let username = req.body.username;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let title = req.body.title;
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
      knex('classes')
        .select('students.id', 'students.firstname', 'students.lastname', 'students_class.class_id', 'assignments_class.assignment_id', 'assignments.assignmentname', 'grades.score')
        .where({'classes.id':classid})
        .innerJoin('students_class', 'classes.id', 'students_class.class_id')
        .innerJoin('students', 'students_class.student_id', 'students.id')
        .leftOuterJoin('assignments_class', 'classes.id', 'assignments_class.class_id')
        .innerJoin('assignments', 'assignments_class.assignment_id', 'assignments.id')
        .leftOuterJoin('grades', function() {
           this.on('grades.student_id', '=', 'students.id').andOn('grades.assignment_id', '=', 'assignments.id').andOn('grades.class_id', '=', 'classes.id')
         })
        .then((grades) => {
          //console.log(grades);
          let gradeData = processGrades(grades);
          let columns = getColumns(grades);
          let key = assignmentKey(grades)
          let result = {gradeData:gradeData, columns:columns, key:key}
          res.send(result)
        })
      // knex('grades')
      //   .select('*')
      //   .where({'class_id':classid})
      //   .innerJoin('assignments', 'grades.assignment_id', 'assignments.id')
      //   .innerJoin('students', 'grades.student_id', 'students.id')
      //   .then( (studentGrades) => {
      //     let gradeData = processGrades(studentGrades);
      //     let columns = getColumns(studentGrades);
      //     let key = assignmentKey(studentGrades);
      //     let result = {columns: columns, grades: gradeData, key: key};
      //
      //     res.send(result)
        //})
      .catch( (err) => {
        res.send(err)
      })
  })

  //get students for a class
  server.get('/:id/classes/:classid/students', (req, res) => {
    let classid = req.params.classid;
      knex('classes')
        .where({'classes.id':classid})
        .innerJoin('students_class', 'classes.id', 'students_class.class_id')
        .innerJoin('students', 'students_class.student_id', 'students.id')
        .orderBy('firstname', 'desc')
        .then( (roster) => {
          let rosterData = processRoster(roster)
          let columns = [{Header: 'Name', accessor: 'name'}, {Header: 'Grade', accessor: 'grade'}, {Header: 'Username', accessor: 'username'}, {Header: 'Update Password', accessor: 'password'}];
          let result = {columns:columns, rosterData:rosterData};
          res.send(result)
        })
      .catch( (err) => {
        res.send(err)
      })
  })

  //get assignments for a teacher
  server.get('/:id/assignments', (req, res) => {
    let teacherid = req.params.id;

    knex('assignments')
      .select('assignments.id', 'assignments.assignmentname', 'assignments.type', 'assignments_class.class_id', 'assignments_class.due_date', 'classes.classname')
      .where({'assignments.teacher_id': teacherid})
      .leftOuterJoin('assignments_class', 'assignments.id', 'assignments_class.assignment_id')
      .leftOuterJoin('classes', 'assignments_class.class_id', 'classes.id')
      .then( (assignments) => {
        let result = processAssignments(assignments);
        res.send(result)
      })
  //  knex('assignments')
    //  .where({'assignments.teacher_id': teacherid})
      // .innerJoin('assignments_class', 'assignments.id', 'assignments_class.assignment_id')
      // .innerJoin('classes', 'assignments_class.class_id', 'classes.id')
    //  .then( (assignments) => {
        // knex('classes')
        //   .where({'classes.teacher_id':teacherid})
        //   .then( (classes) => {
        //   })
        // let data = processAssignments(assignments)

         //console.log('will it blend',assignments);
        // assignmentsIds = assignments.map(assignment => assignment.id)
         //console.log(assignmentsIds);
        //  knex('assignments_class')
        //   .whereIn('assignment_id',assignmentsIds)
        //   .then( assignmentsWithAClass => {
        //     classIds = assignmentsWithAClass.map(record => record.class_id)
        //     knex('classes')
        //       .whereIn('id', classIds)
        //       .then( (classes) => {
        //         let results = [assignments, assignmentsWithAClass, classes]
        //         //console.log(results);
        //         let data = processAssignments(results)
        //       })
            //console.log(assignmentsWithAClass);
            //res.send(assignmentsWithAClass)

        //  })
       //})
      // .catch( (err) => {
      //   res.send(err)
      // })
  })

  //============================ ASSIGNMENT PROCESSESSING

  function processAssignments(assignments) {
    let classList = [];
    let assignmentMap = {};
    let assignmentList = [];

    assignments.forEach( (el) => {
      if (!assignmentMap[el.id]) {
        assignmentMap[el.id] = {id: el.id, name:el.assignmentname, type:el.type, classes:{}}
      }
      if (el.class_id) {
        assignmentMap[el.id].classes[el.classname] = moment(el.due_date).format('M/D/YY');
      }
      if (classList.indexOf(el.classname) === -1 && el.classname !== null) {
        classList.push(el.classname);
      }
    })

    for (let key in assignmentMap) {
      let entry = {name: assignmentMap[key].name, type:assignmentMap[key].type};
      for (let classname of classList) {
        entry[classname] = assignmentMap[key].classes[classname];
      }
      assignmentList.push(entry);
    }

    let columnNames = Object.keys(assignmentList[0])
    let columns = [];

    columnNames.forEach((el) => {
      column = {Header: el.charAt(0).toUpperCase() + el.slice(1), accessor: el}
      columns.push(column)
    })

    return {columns:columns, assignmentList:assignmentList};



    //console.log(assignments[1]);
    // let classMap = {};
    // let processedData = {};
    // let data = []
    // assignments[0].forEach( (el) => {
    //   if (!assignmentMap[el.assignment_id]) {
    //     assignmentMap[el.assignment_id] = {
    //       name: el.assignmentname,
    //       type: el.type,
    //       classes: {}
    //     }
    //   }
    //   assignmentMap[el.assignment_id].classes[el.class_id] = moment(el.due_date).format('M/D/YY');
    //
    //   classMap[el.class_id] = el.classname;
    // })
    //
    // for (let id in assignmentMap) {
    //   let entry = {
    //     name: assignmentMap[id].name,
    //     type: assignmentMap[id].type
    //   };
    //   for (let cid in classMap) {
    //     entry[classMap[cid]] = assignmentMap[id].classes[cid];
    //   }
    //   data.push(entry);
    // }
    // let columnNames = Object.keys(data[0])
    // let columns = [];
    // columnNames.forEach( (el) => {
    //   columns.push({Header: el.charAt(0).toUpperCase() + el.slice(1), accessor: el})
    // })
    // processedData = {columns, assignmentData:data}
    // return processedData;
  }

  //============================ ROSTER PROCESSESSING

  function processRoster(roster) {
    let processedData = [];
    let entry = {};
    roster.forEach( (el) => {
      entry.name = `${el.firstname} ${el.lastname}`;
      entry.grade = el.grade;
      entry.username = el.username;
      entry.password = '';
      entry.student_id = el.student_id;
      processedData.push(entry)
      entry = {};
    })
    return processedData;
  }

  //============================ GRADES PROCESSESSING

  function processGrades(grades) {
    let processedData = [];
    let entry = {};
    let key = {}
    let count = grades.length;

    grades.forEach( (el) => {
      //console.log(el);
      let fullName = `${el.firstname} ${el.lastname}`
      //console.log(fullName);

      if (!key[el.id]) {
        key[el.id] = {student_id:el.id, name: fullName, [`${el.assignmentname}`]:el.score}
      }
      else {
        key[el.id][el.assignmentname] = el.score;
      }

      //console.log(key);

      //if there is no fullname, set it
      // if (!entry.name) {
      //   entry.name = fullName
      //   entry.studentId = el.student_id;
      // }
      // if (entry.name !== fullName) {
      //   processedData.push(entry)
      //   entry = {}
      //   entry.name = fullName;
      //   entry.studentId = el.student_id;
      // }
      // entry[el.assignmentname] = el.score;
      // count -= 1;
      // //if this is the last entry push it now
      // if (count === 0) {
      //   processedData.push(entry)
      // }
    })
    processedData = Object.values(key)

    return processedData;

    //return processedData;
  }

  function getColumns(grades) {
    let columnnames = ['name']
    let columns = [];
    grades.forEach( (el) => {
      if (columnnames.indexOf(el.assignmentname) === -1) {
        columnnames.push(el.assignmentname)
      }
    })
    columnnames.forEach( (el) => {
      columns.push({Header: el.charAt(0).toUpperCase() + el.slice(1), accessor: el})
    })
    //console.log(columns);
    return columns;
  }

  function assignmentKey(grades) {
    let assignmentMap = {};
    grades.forEach( (el) => {
      if (!assignmentMap.hasOwnProperty(el.assignmentname)) {
        assignmentMap[el.assignmentname] = el.assignment_id;
      }
    })
    return assignmentMap;
  }


module.exports = server;
