var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var course = {
  level: 201,
  name: "F2 Javascript",
  lectures: [
  { topic:"Lecture 1: Javascipt Basics"},
  { topic:"Lecture 2: Intro to Node"},
  { topic:"Lecture 3: Array Methods, Functions & Scope"},
  { topic:"Lecture 4: OOP in JS & Classes/Inheritance"},
  { topic:"Lecture 5: JS in the browser & Intro to jQuery"},
  { topic:"Lecture 6: Building a server & Using Ajax"},
  { topic:"Lecture 7: Build & Deploy an App"},
  { topic:"Lecture 8: Functional Programming with Iodash"}],


  labs: [
    { topic:"Lab 1: Assertions About Zoo Animals"},
    { topic:"Lab 1: Translating Meerkats"},
    { topic:"Lab 1: Random Favorite Animal"},
    { topic:"Lab 1: Hungry Lion"},
    { topic:"Lab 2: Blob Consumption Rate"},
    { topic:"Lab 2: Sorting Arrays"},
    { topic:"Lab 2: Universal Translator"}]

  };

app.listen(port, function() {
  console.log('server started on port ' + port);
});

app.get("/", function(req, res) {
  var randomIndex = Math.floor(Math.random() * course.lectures.length);
  res.json(course.lectures[randomIndex.topic]);

});
