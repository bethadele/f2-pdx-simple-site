var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app"));


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

app.get("/lectures", function(req, res) {
  var randomIndex = Math.floor(Math.random() * course.lectures.length);
  res.json(course.lectures[randomIndex].topic);

});

app.get("/labs", function(req, res) {
  var randomIndex = Math.floor(Math.random() * course.labs.length);
  res.json(course.labs[randomIndex].topic);
});







var jokes = [
 { setup: "What's the difference between a guitar and a fish?",
 punchline: "You can't tuna fish." },
 { setup: "What do you get when you cross a cow and a duck?",
 punchline: "Milk and quackers." },
 { setup: "How many tickles does it take to make an octupus laugh?",
 punchline: "Ten Tickles" }
];

app.get("/joke", function(req, res) {
 var randomIndex = Math.floor(Math.random() * jokes.length);
 res.json(jokes[randomIndex]);
});


