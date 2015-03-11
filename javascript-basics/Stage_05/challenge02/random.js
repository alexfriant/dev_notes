/* Difference between catching an error and throwing an error */

function getRandomNumber( lower, upper ) {
  if (isNaN(lower) || isNaN(upper)) {
    throw new Error( "I can't compute between " + lower + " and " + upper );
  } else {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
  }
}

try {
  console.log( getRandomNumber( 'nine', 24 ) );
} catch(myError) {
  console.log(myError.message)
}

console.log( getRandomNumber( 1, 100 ) );
console.log( getRandomNumber( 200, 'five hundred' ) );
console.log( getRandomNumber( 1000, 20000 ) );
console.log( getRandomNumber( 50, 100 ) );

