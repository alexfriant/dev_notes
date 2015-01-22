var errorout = require("./errorout");
var http = require("http");

//Print out Profile message
function printMessage(username, badgeCount, JavaScriptPoints) {
  if (badgeCount === 0 || badgeCount > 1) {
    plural = "s";
  } else {
    plural = "";
  };
  var message = "SUMMARY: " + username + " has " + badgeCount + " total badge" + plural + " and " + JavaScriptPoints + " points in Javascript";
  console.log(message);
}

function get(username){
  var profileURL = "http://teamtreehouse.com/" + username + ".json";
  //Connect to the API URL (http://teamtreehouse.com/username.json)
  var request = http.get(profileURL, function(response) {
    var body = "";
    //Read the data
    response.on('data', function(chunk){
      body += chunk;
    });
    response.on('end', function() {
      if(response.statusCode === 200) {
        try {
          //Parse the data
          var profile = JSON.parse(body);
          //Print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
          
          //if you want to create a numbered list out the names of each badge, do this:
          /*for (i in profile.badges) {
            console.log(i+1 + ". " + profile.badges[i].name);
          };*/
          
          } catch(error) {
            //Parse error
            error(error);
          };
      } else {
        //Status Code Error
        errorout.print({message: "There is no such profile for username '" + username + "'."});
      };
    });
  });
  
  //Connection Error 
  request.on("error", errorout.print);
  
  console.log("RETRIEVING: " + profileURL);
    
};

module.exports.get = get; //specify the get function as available in this module