module.exports = function( searchText, lucky ) {
  var course = {
    level: 201,
    name: "Foundations 2: JavaScript",
    lectures: [
      { "topic": "Intro, Basics 1",
        "notes": [ "The primitive data types are Boolean, Null, Undefined, Number, and String.",
                   "Parameters become variables inside their function.",
                   "A method is a function that is also the value of an object property."
                 ] },
      { "topic": "Basics 2",
        "notes": [ "Logical operators return the result of the last expression evaluated.",
                   "Loops execute the same instructions multiple times.",
                   "An infinite loop is a loop that never satisfies its exit condition."
                 ] },
      { "topic": "Array Methods, Functions, Scope",
        "notes": [ "join() takes a delimiter, returns a string.",
                   "Generally useful code is often packaged up as a collection of functions and data in libraries.",
                   "JavaScript is function-scoped."
                 ] },
      { "topic": "Object Oriented Programming",
        "notes": [ "OOP notes insert here ",
                   "OOP notes here "
                 ] },
      { "topic": "JavaScript in the Browser",
        "notes": [ "Javascript in the Browser notes insert here ",
                   "JS and the Browser notes "
                 ] },
      { "topic": "Node.js and Express",
        "notes": [ " Node.js and Express Notes insert here ",
                   "Node.js notes "
                 ] },
      { "topic": "Workshop",
        "notes": [ " Workshop notes go here ",
                   "Workshop notes "
                 ] },
      { "topic": "lodash",
        "notes": [ " IODASH has some very useful functions ._",
                   "IODash notes. "
                 ] }
    ]
  };

  var findPhrase = function( phrase ) {
    var results = {
      lectures: [],
      labs: []
    };

    var splitPhrase = phrase.split( "," );
    var notes = [];

    notes = searchCourseSection( "lectures", phrase );

    if ( splitPhrase.length > 1) {
      for ( var x = 0; x < splitPhrase.length; x++ ) {
        var splitNotes = searchCourseSection( "lectures", splitPhrase[ x ] );

        notes.push( splitNotes );
      }
    }

    results =  { notes: notes };

    return results;
  };

  var searchCourseSection = function( section, phrase ) {
    var results = [],
        noteLc = "";

    for ( var i = 0; i < course[ section ].length; i++ ) {
      if ( course[ section ][ i ].notes && course[ section ][ i ].notes.constructor === Array ) {
        for ( var j = 0; j < course[ section ][ i ].notes.length; j++ ) {
          noteLc = course[ section ][ i ].notes[ j ].toLowerCase();
          if ( noteLc.indexOf( phrase.toLowerCase() ) >= 0 ) {
            var resultsObj = {
              note: course[ section ][ i ].notes[ j ],
              section: section,
              topic: course[ section ][ i ].topic
            };

            results.push( resultsObj.note );
          }
        }
      }
    }

    return results;
  };

  if ( lucky === "true" ) {
    var lectureRandom = Math.floor( Math.random() * course.lectures.length );
    var resultAnswer = { notes: [ course.lectures[ lectureRandom ].notes[ Math.floor( Math.random() * course.lectures[ lectureRandom ].notes.length ) ] ] };

    return resultAnswer;
  }

  return findPhrase( searchText );

};

