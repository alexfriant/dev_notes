var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin *
                    minsPerHour *
                    hoursPerDay;
document.write(
  "There are " +
  secondsPerDay +
  " seconds in a day.<br>"
);

var yearsAlive = 43;
var secondsPerYear =  secondsPerDay *
                      daysPerWeek *
                      weeksPerYear;
var secondsAlive = yearsAlive * secondsPerYear;
document.write(
  "I've been alive for more than " +
  secondsAlive +
  " seconds.<br>"
);

var oneBillionSecondYear = 1000000000 / secondsPerYear;
/* this next line rounds the year to one decimal place */
oneBillionSecondYear = +oneBillionSecondYear.toFixed(2);

document.write(
  "We pass 1 billion seconds at " +
  oneBillionSecondYear +
  " years of age."
);