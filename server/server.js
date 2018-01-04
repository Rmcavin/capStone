//bring in dependencies
const express = require('express');
const server = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 8000;

//set up middleware
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(methodOverride('_method'));
server.use(express.static(path.join(__dirname, '/../react-ui/', 'build')));
server.set('view engine', 'html');

//routes
server.get('/', (req, res) => {
  res.sendFile('../react-ui/build/index.html')
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
