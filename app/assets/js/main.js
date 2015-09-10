//
// Example 1: getElementsByTagName()
//
// Vanilla JS Task:
//        Using JavaScript, add a descriptive page title.
var titleTags = document.getElementsByTagName("title");
var pageTitle = titleTags[0]
pageTitle.text = "Foundations 2 Javascript  |  Class Summary";

//
// Example 2: getElementById()
//
// Vanilla JS Task:
//       Use getElementById to add a style attribute to the <ul>
//       that removes the bullets to the left of the images.
//
// Resources:
// https://developer.mozilla.org/en-US/docs/Web/API/Element.setAttribute
// https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
//
var picBullets = getElementById("lab-images");
picBullets.style.cssText = ("list-style-type: none;")

// Alternate:
// picsUl.setAttribute("style", "list-style-type: none;");

//
// Example 3: querySelectorAll()
//
// Vanilla JS Task:
//       Make the images all have a maximum width of 200px.
//
var imgTags = document.querySelectorAll("ul img");
for(var i = 0; i < imgTags.length; i++) {
  imgTags[i].setAttribute("style", "max-wdith: 200px");
}

//
// Example 4: querySelector() + createElement() + appendChild()
//
// Vanilla JS Task:
//       Find another picture to illustrate one of the labs.
//       Use JavaScript to add a new <li> element in your existing <ul>.
//       Then add a new <img> element to the <li> and specify its src.
//       You can use the URL of the image you found as the src,
//       or you can download the new image to your assets/img folder.
//
// You’ll need: document.createElement() and element.appendChild()
//
var ulTag = document.getElementsByTagName( "ul" );
var newLi = document.createElement( "li" );
var newImg = document.createElement( "img" );
newImg.setAttribute( "src", "http://www.foodsafetynews.com/files/2012/11/blob_406x250.jpg" );
newLi.appendChild(newImg);
ulTag.appendChild(newLi);

//
// Example 5: window.addEventListener("load")
//
// Vanilla JS Task:
//        Open an alert dialog on page load to welcome the user to the page.
//
function welcomeUser () {
  alert("Welcome to Foundations 2!");
}
window.addEventListener("load", welcomeUser);
//
// Example 6: Handling the resize event
//
//            resize = An event on the window object.
//            Signifies the user changed the viewing dimensions.
//            Use it to implement "responsive design": adjust layout, styling, and element visibility.
//
// Vanilla JS Task:
//        Make the images half the window width each time the resize event triggers.
//
// You’ll need: window.innerWidth and window.innerHeight
//
window.addEventListener("resize", function() {
  var imgTags = document.getElementsByTagName("lab-images");
  var imgWidth = window.innerWidth / 2;
  var imgHeight = imgWidth * 0.8;
  var perviousDimensions;

  for ( var i = 0; i < imgTags.length; i++) {
    previousDimensions = imgTags[i].getAttribute("style");
    var newDimensions = previousDimensions + " height:" + imgHeight + "px;width:" + imgWidth + "px;";
    imgTags[i].setAttribute("style", newDimensions)
  }
});

//
// jQuery Task:
//        Repeat the previous task, this time using jQuery.
//
// You'll need: $(window).on()
//              $(window).width()
//              $(element).height(desiredHeight)
$(window).on('resize', function() {
  var $windowWidth = $(window).width();
  $('#lab-images').find( 'img' ).width($windowWidth / 2);
  $('#lab-images').find( 'img' ).height($windowWidth * 0.6);
});

//
// Example 7: Handling a click event
//
//            click = An event on a DOM element.
//            Signifies the user clicked that element with a mouse or trackpad.
//            Use it to interact with the user: open a menu,respond to a button-click, etc.
//
// Vanilla JS Task:
//        Every time an image is clicked, move it to the end of the <ul>.
//
// You’ll need: event.target.parentNode
//              element.remove()
//              element.appendChild()
//
var imgTags = document.getElementsByTagName('img');
var labsUl = document.getElementsByTagName("ul")[1];

for(var i = 0; i < imgTags.length; i++) {
  imgTags[i].addEventListener("click", function (evt){
    var liToMove = event.target.parentNode;

    liToMove.remove();

    labsUl.appendChild(liToMove);
  });
}
//
// jQuery Task:
//        Repeat the previous task, this time using jQuery.
$("img").on('click',function() {
  var imgToRemove = $(this);
  $(this).remove()
  $("#lab-images").append(imgToRemove);

});
//
// jQuery Task:
//       Hide all the lab images on page load.
//       When a button is clicked, show the corresponding list item (and only that list item)
//
$(document).ready(function () {
  $('#lab-images li').hide();

  $('#buttons button').click(function (evt) {
    evt.preventDefault();

    var labClass = $(this).data('lab');

  $('#lab-images li').hide();
  $('.' + labClass).show();
  });
});


var course = new Object();
  course.level = 201;
  course.name = "F2 Javascript";
  course.lectures = [{ topic:"Lecture 1: Javascipt Basics"},
  { topic:"Lecture 2: Intro to Node"},
  { topic:"Lecture 3: Array Methods, Functions & Scope"},
  { topic:"Lecture 4: OOP in JS & Classes/Inheritance"},
  { topic:"Lecture 5: JS in the browser & Intro to jQuery"},
  { topic:"Lecture 6: Building a server & Using Ajax"},
  { topic:"Lecture 7: Build & Deploy an App"},
  { topic:"Lecture 8: Functional Programming with Iodash"}];

  course.labs = [
    { topic:"Lab 1: Assertions About Zoo Animals"),
    { topic:"Lab 1: Translating Meerkats"),
    { topic:"Lab 1: Random Favorite Animal"),
    { topic:"Lab 1: Hungry Lion"),
    { topic:"Lab 2: Blob Consumption Rate"),
    { topic:"Lab 2: Sorting Arrays"),
    { topic:"Lab 2: Universal Translator")
  ];

