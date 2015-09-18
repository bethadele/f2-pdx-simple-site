$(function() {

  $( "#search" ).on( "submit", function( e ) {
    e.preventDefault();

    var searchParam = $( "input[name=searchText]" ).val();
    var lucky = $( "input[name=lucky]" ).is( ":checked" );
    var data = { searchText: searchParam, lucky: lucky };
    var url = checkCourse();

    console.log( data ); // This will be a sanity check to see that we"re getting the data
    $.post( url, data, function( response ) {
      console.log( response );
      var lectures,
          output = "";

      if ( response.notes.length <= 0 ) {
        alert( "Sorry there were no matches found" );
      }

      if ( response.notes && response.notes.constructor === Array ) {
        for ( var i = 0; i < response.notes.length; i++ ) {
          output += "<li>" + response.notes[ i ] + "</li>";
        }
      }

      output = "<ul>" + output + "</ul>";

      $( "#search-results" ).html( output );
    });
  });

// This will show all the notes from selected Lecture

$( "#lectures" ).on( "click", function( e ) {
    e.preventDefault();
    var url = checkCourse();
    var searchParam = "";
    var lucky = $( "input[name=lucky]" ).is( ":checked" );
    var data = { searchText: searchParam, lucky: lucky };

    $.post( url, data, function( response ) {
      console.log( response );
      var lectures,
          output = "";

      if ( response.notes.length <= 0 ) {
        alert( "Sorry there were no matches found" );
      }

      if ( response.notes && response.notes.constructor === Array ) {
        for ( var i = 0; i < response.notes.length; i++ ) {
          output += "<li>" + response.notes[ i ] + "</li>";
        }
      }

      output = "<ul>" + output + "</ul>";

      $("#search-results").html(output);

    });
  });
});

// Checks which course is selected

var checkCourse = function() {
  var select = document.getElementById( "selectClass" );
  var url = ( "http://localhost:3000/" + select.value );

  return url;
};
