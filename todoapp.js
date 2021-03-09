const express = require('express');
const http = require('http');
const path = require('path');

const servername = '127.0.0.1';
const port = 3000;

//MongoDB Driver & Mongoskin a better alternative to MongoDB Driver
var db = mongoskin.db('mongodb://localhost:27017/todo?auto_reconnect', {safe:true});
var mongoskin = require('mongoskin');

//Application & Middleware
var app = express();
app.use(function(req, res, next) {
    req.db = {};

// request for task Collection
req.db.tasks = db.collection('tasks');
next();
})

//Routes 

var routes = require('./routes');
var tasks = require('./routes/tasks');



// NodeJS Server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, servername, () => {
  console.log(`Server running at http://${servername}:${port}/`);
});