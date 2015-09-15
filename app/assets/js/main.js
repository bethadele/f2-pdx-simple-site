$(document).ready(function() {
  $("button").on('click', function() {
    var buttonID = $(this).attr('id');

    $.get("http://localhost:3000/"+buttonID, function(response) {

      $('#show_'+buttonID).append(response+"<br>");
      });
  });
});





