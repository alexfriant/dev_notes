/*
Quiz program. I designed the program so that you can add as many questions you want without having to change the output messages.

We weren't supposed to use functions in this program.
*/

// Quiz questions
var historical = prompt("What year did the Japanese attack Pearl Harbor?");

var astronomy = prompt("What's the fourth planet from the Sun?");

var presidents = prompt("What's the last name of the U.S. President who served after President Carter?");

var chemistry = prompt("How many Hydrogen atoms are in a water molecule?");

var scifi = prompt("What was William Gibson's famous cyberpunk novel from the year 1984?");

// Set scores
var answersRight = 0;
var answersWrong = 0;

// Check answers and accumulate scores
if ( historical == "1941" || historical === "'41" || historical.toLowerCase === "ninteen forty one") {
  answersRight += 1;
} else {
  answersWrong += 1;
  console.log("You: " + historical + "\n" + "Correct: 1941");
}

if ( astronomy.toLowerCase() === "mars") {
  answersRight += 1;
} else {
  answersWrong += 1;
  console.log("You: " + astronomy + "\n" + "Correct: Mars");
}

if ( presidents.toLowerCase() === "reagan" || presidents.toLowerCase() === "president reagan") {
  answersRight += 1;
} else {
  answersWrong += 1;
  console.log("You: " + presidents + "\n" + "Correct: Reagan");
}
  
if ( chemistry == "2" || chemistry.toLowerCase() == "two") {
  answersRight += 1;
} else {
  answersWrong += 1;
  console.log("You: " + chemistry + "\n" + "Correct: 2 or two");
}
  
if ( scifi.toLowerCase() === "neuromancer") {
  answersRight += 1;
} else {
  answersWrong += 1;
  console.log("You: " + scifi + "\n" + "Correct: Neuromancer");
}

// Categorize crown levels
var crownLevel = "";
if ( answersWrong === 0 ) {
  crownLevel = "GOLD";
} else if ( answersRight / answersWrong >= 0.6 ) {
  crownLevel = "SILVER";
} else if ( answersRight / answersWrong >= 0.2 ) {
  crownLevel = "BRONZE";
} else {
  crownLevel = "DUNCE";
}

// Set total number of points for quiz
var totalPoints = answersRight + answersWrong;

// Tell player their score and crown level
alert("You got " + answersRight + " out of " + totalPoints + " correct.\nYour Crown Level is: " + crownLevel);