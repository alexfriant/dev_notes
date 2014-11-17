//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items
$(".controls").on("click", "li", function() {
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color here
  color = $(this).css("background-color")
});


//When "New Color" button is pressed
$("#revealColorSelect").click(function() {
  //Update color swatch
  changeColor();
  //Show or hide color select
  $("#colorSelect").toggle();
});

//return an RGB formatted color value from the sliders
function slidersRGB(){
  //get the slider bars values
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  
  //return the color variable
  return("rgb(" + r + "," + g + "," + b + ")"); 
};

//Update the color span function
function changeColor() {  
  //set the span color
  $("#newColor").css("background-color", slidersRGB());
};

//When the color sliders are moved change the color of the sample color swatch
$("input[type=range]").change(changeColor);


//When "Add Color" button is pressed
$("#addNewColor").click(function() {
  //Append the color to the controls ul
  var $newColor = $("<li></li>");
  //Select the new color just added
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  $newColor.click();
});


//With mouse button pressed inside canvas
$canvas.mousedown(function(e) {
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e) {
  if(mouseDown) {
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = color;
  context.stroke();
  lastEvent = e;
  };
}).mouseup(function(){
  mouseDown = false;
});

  //Draw colors on the canvas
