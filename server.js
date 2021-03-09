const express = require('express');
const mongoose = require('monggoose');
const app = require();
const bodyParser = require('body-parser');
const port = 3000;

//importing the Schema for tasks
const Task = require('.model/todo');

//Pending Routes
app.use(bodyParser.json());

//Connecting the MOngoDB Database
mongoose.connect('mongodb://localhost:27017/soal-db',{
    useNewParser: true,
    useUnifiedTopology: true,
    userCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
});
app.listen(port,() => {
    console.log(`Server is listening at ${port}`);
})

