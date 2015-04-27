function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}
var upper = 1000000;
var numberToGuess = randomNumber(upper);
var counter = 0;
var guessing = true;
var computersGuess;

var correct = document.getElementById("correct");
var results = document.getElementById("results");

correct.innerHTML = "Number to guess: " + numberToGuess + "<br>";

while ( guessing ) {
  counter += 1;
  computersGuess = randomNumber(upper);
  if (computersGuess === numberToGuess) {
    guessing = false;
    results.innerHTML = "It took the computer " + counter + " guesses.";
  }
}
