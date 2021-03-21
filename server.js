const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();

//Allocating Application to run on the Port 3000.
const port = 3000;

//Importing Routes for todo app
const todoRouter = require("./routes/routes");

//importing the Schema for tasks
const Task = require("./models/todo");

//Parsing User Data to Json Format
app.use(bodyParser.json());

//Server running Log information
app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Defining todoRouter as default Route for App
app.use("/", todoRouter);

module.exports = app;


// //PageViews counter
// let pageViews = 0;

// // //Allowing client access to the webpage
// // app.get("/", (req, res) => {
// //   pageViews++;
// //   console.log(req.protocol, req.hostname, req.url);
// //   res.sendFile(__dirname + "./bin/todo.html");
// // });

// // app.get("/views", (req, res) => {
// //   res.send("Number of views = " + pageViews);
// // });