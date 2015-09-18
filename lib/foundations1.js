module.exports = function( searchText, lucky ) {
  var course = {
    level: 101,
    name: "Foundations 1: JavaScript/HTML Basics",
    lectures: [
      { "topic": "Intro, Basics 1",
        "notes": [ "HTML HEAD  /HEAD BODY /BODY  /HTML",
                   "Math.floor(Math.random()*4) = random number"
                 ] },
      { "topic": "Lecture 2 - HTML",
        "notes": [ "Input fields Radiobuttons Checkboxes Scrollable list Drop-down lists",
                   "input text - need to give input box a name to call it later - end with /input",
                   "input checkbox",
                   "input submit - when you click button it will send it to server",
                   "input reset - resets the page",
                   "input button - does not do anything unless you assign something for it to do can be used for a submit button"
                 ] },
      { "topic": "CSS Borders and Padding",
        "notes": [ "Padding if you don’t want text to be right on border, moves border away from element",
                   "Borders width adds to the px dimensions of the element",
                   "Margins are an invisible outside parameter that seperates elements from one another"
                 ] },
      { "topic": "Javascript Array Methods",
        "notes": [ "split() join() push() pop()",
                   "split will split a string at whatever u give such as ',' or ' ' and places each split item in an array join() is the opposite",
                   "pop() will take last item of array and return it no longer in that array push() adds item"
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

