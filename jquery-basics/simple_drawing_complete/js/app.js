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
})


//When New Color button is pressed
  //Show color select

//When the color sliders are moved
  //Update the color span 

//When Add Color button is pressed
  //Append the color to the controls ul
  //Select the new color just added

//With mouse button pressed inside canvas
  //Draw colors on the canvas
