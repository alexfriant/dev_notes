// random number between two numbers
function getRandomNumber( lower, upper ) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
}

console.log(getRandomNumber( 100, 200 ));