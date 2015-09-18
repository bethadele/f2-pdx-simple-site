var express = require( "express" );
var app = express();
var port = process.env.PORT || 3000;

var bodyparser = require( "body-parser" );

app.use( bodyparser.json() );
app.use( bodyparser.urlencoded({ extended: true }));

app.use(express.static( __dirname + "/app/" ));

var f2search = require( "./lib/f2search" );
var f1search = require( "./lib/foundations1" );

app.post( "/foundation2", function( req, res ) {
  var searchResults = f2search( req.body.searchText, req.body.lucky );

  res.json( searchResults );
});

app.post( "/foundations1", function( req, res ) {
  var searchResults = f1search( req.body.searchText, req.body.lucky );

  res.json( searchResults );
});

app.get( "/labs", function( req, res ) {
  res.json( course.labs );
});

app.get( "/course_name", function( req, res ) {
  res.json( course.name );
});

app.get( "/", function( req, res ) {
  res.sendFile();
});

app.listen(port, function() {
  console.log( "server started on port " + port );
});
