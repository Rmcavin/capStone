//bring in dependencies
const express = require('express');
const server = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 8000;

//bring in route modules
let teachers = require('./routes/teachers');
let students = require('./routes/students');
let grades = require('./routes/grades')

//set up middleware
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(methodOverride('_method'));
server.set('view engine', 'html');

//allow CORS

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes middleware
server.use('/teachers', teachers)
server.use('/students', students)
server.use('/grades', grades)

// serve react build
server.use(express.static(path.join(__dirname, '/../', 'build')));
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../','/build/home.html'))
})

//error catcher
server.use(function (err, req, res, next) {
  if (err) {
    res.status(500).send('Something broke: ' + err)
  }
})

//server listen
server.listen(PORT)

module.exports = server;
