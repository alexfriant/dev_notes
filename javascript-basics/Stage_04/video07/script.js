/*
The Random Number Guessing Game Generates a number between 1 and 6
and gives a player two attempt to guess the number and gives a hint.
If the player inputs anything other than a number, they lose automatically.
*/

// assume the player doesn't guess correctly
var correctGuess = false;

// generate random number from 1 to 6
var randomNumber = Math.floor(Math.random() * 6 ) + 1;

// have the user guess a number
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/* 
check to see if they guessed right
if they guessed wrong, tell them and include a hint, and give them one more chance
*/
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
  if (parseInt(guessMore) === randomNumber) {
      correctGuess = true;
  }
} else if ( parseInt(guess) > randomNumber ) {
   var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
  if (parseInt(guessLess) === randomNumber) {
      correctGuess = true;
  }
}

// let them know if they got the answer right or wrong
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}