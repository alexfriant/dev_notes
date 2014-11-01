//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

//Create overlay
var $overlay = $('<div id="overlay"></div>');
//Create image
var $image = $("<img>");
$overlay.append($image);
//Create caption
var $caption = $("<p></p>");
$overlay.append($caption);

//Add overlay package to body
$("body").append($overlay)

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){ //event param needed 
  event.preventDefault(); //this stops the click event
  var imageLocation = $(this).attr("href");
  var imageDescription = $(this).children("img").attr("alt")
  //Update overlay with the image in the link
  $image.attr("src", imageLocation);
  
  //Get image's alt atribute and set caption
  console.log("ALT TEXT:", imageDescription);
  $caption.text(imageDescription);
  
  //Show the overlay
  $overlay.show();

});


// When overlay clicked
$overlay.click(function(){
  // Hide overlay
  $overlay.hide();
});
  