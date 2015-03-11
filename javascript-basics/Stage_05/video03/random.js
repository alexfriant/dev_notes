function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1; 
  return randomNumber;
}

console.log(getRandomNumber());
alert(getRandomNumber());

document.getElementById("output").innerHTML = getRandomNumber();
