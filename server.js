const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

//Importing Routes for todo app
const todoRouter = require('./routes/routes');

//Allocating Application to run on the Port 3000.
const port = 3000;

//importing the Schema for tasks
const Task = require('./models/todo');

//Parsing User Data to Json Format
app.use(bodyParser.json());

//Connecting the MongoDB Database
mongoose.connect('mongodb://localhost:27017/soal-db',{
    useNewParser: true,
    useUnifiedTopology: true,
    userCreateIndex: true
})
.then(() => {
    console.log("MongoDB CONNECTED");
}).catch((error) => {
    console.log(error);
});

//Server running Log information
app.listen(port,() => {
    console.log(`Server is listening at ${port}`);
}) 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Defining todoRouter as default Route for App
app.use('/', todoRouter);

module.exports = app;


