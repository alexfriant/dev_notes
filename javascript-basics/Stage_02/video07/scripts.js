/*var passphrase = 'Open Sesame';
console.log(passphrase.length);
console.log(passphrase.toLowerCase());
console.log(passphrase);
console.log(passphrase.toUpperCase());*/

var stringToShout = prompt("What should I shout?");
var shout = "<h1>" + stringToShout.toUpperCase() + "!!!</h1>";
document.write(shout);