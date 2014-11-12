//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls li").click(function() {
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color here
  color = $(this).css("background-color")
});


//When New Color button is pressed
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


//When Add Color button is pressed
  //Append the color to the controls ul
  //Select the new color just added

//With mouse button pressed inside canvas
  //Draw colors on the canvas
