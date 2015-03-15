function getRandomNumber( upperBound ) {
  var randomNumber = Math.floor( Math.random() * upperBound ) + 1; 
  return randomNumber;
}

//console.log(getRandomNumber( 100 ));


function getArea(width, length, unit) {
  var area = (width * length).toFixed(1);
  return area  + " sq " + unit;
}

console.log("Area: ", getArea(7, 23.5, "ft"));