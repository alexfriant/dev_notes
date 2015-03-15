var numberOfRolls = parseInt(prompt("How man rolls of the dice shall we make?"));
var dieSides = parseInt(prompt("Enter number of dice faces:"));
var sideCounts = [];

function initStats() {
  for (var i = 0; i < dieSides; i++) {
    sideCounts[i] = 0;
  };
};

function rollDie() {
  return Math.floor(Math.random() * dieSides) + 1;
};

function updateCounts(diceResult) {
  sideCounts[diceResult-1] += 1;
};

function getPercentages() {
  return function() {
    var sidePercentages = [];
    for (var i = 0; i < dieSides; i++) {
      sidePercentages[i] = Math.round(sideCounts[i] / numberOfRolls * 100);
    };
    return sidePercentages;
  }();
};

function rollSession() {
  initStats();
  for (var i = 0; i < numberOfRolls; i++) {
    updateCounts(rollDie());
  };
  console.log("A " + dieSides + " sided die was rolled " + numberOfRolls + " times.\nHere are the results:");
  return getPercentages();
};

var results = rollSession();
console.log(results.toString());
document.getElementById("dice").innerHTML = "A " + dieSides + " sided die was rolled " + numberOfRolls + " times.\nHere are the percentages:<br>" + results.toString();

d3.select(".chart")
  .selectAll("div")
    .data(results)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });