//Problem: We need a simple way to look at a user's badge count and Javascript points
//Solution: Use Node.js to connect to Treehouse's API by adding ".json" to the end of any profile URL
var profile = require("./profile.js");
var users = ["chalkers", "joykesten2"];
var arguments = process.argv.slice(2);

profile.get("alexfriant"); //single profile
users.forEach(profile.get); //multiple profiles
arguments.forEach(profile.get);  //profile as a arguments
