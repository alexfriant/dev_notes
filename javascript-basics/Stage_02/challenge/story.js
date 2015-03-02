alert("Welcome to my personal MadLibs! \nI'm going to ask you for some words :-)")

var adjective2 = prompt("Adjective:");
var noun2 = prompt("Noun:");
var verb = prompt("Verb:");
var noun1 = prompt("Noun, again:");
var adjective1 = prompt("One more adjective:");
var position = prompt("Position (Over, under, next to, etc...):");
var color = prompt("A color:");


var story = "The ";
story += adjective1 + ", ";
story += color + " ";
story += noun1 + " ";
story += verb + "ed ";
story += position + " the ";
story += adjective2 + " ";
story += noun2 + "."

alert("Okay, you're all done! Ready for your silly story?");

document.write("<h2>" + story + "</h2>");