//You'll need a forecast.io apikey, so register for a free account
//Bend, Oregon coords: 44.0744, -121.2574
var https = require("https");
var http = require("http");

var weatherURL = "https://api.forecast.io/forecast/APIKEY/44.0744,-121.2574" //make sure to swap in your APIKEY

//Round the temperature to a specified decimal place
function roundedToPrecision(number, precision){
  var rounder = Math.pow(10, precision);
  return (Math.round(number * rounder) / rounder).toFixed(precision);
}

//Print out weather
function printWeather(summary, temperature) {
  var report = summary + ". Temperature of " + temperature + "\xB0F";
  console.log(report);
}

//Get weather forecast from forecast.io
var request = https.get(weatherURL, function(response) {
    var body = "";
    //Read the data
    response.on('data', function(chunk){
      body += chunk;
    });
    response.on('end', function() {
      if(response.statusCode === 200) {
        try {
          //Parse the data
          var weather = JSON.parse(body);
          //Print the data
          printWeather(weather.currently.summary, roundedToPrecision(weather.currently.temperature, 1));
          } catch(error) {
            //Parse error
            errorout.print(error);
          };
      } else {
        //Status Code Error
        errorout.print({message: "Sorry, but there was some sort of problem: " + response.statusCode + "(" +  http.STATUS_CODES[response.statusCode] + ")"});
      };
    });
  });