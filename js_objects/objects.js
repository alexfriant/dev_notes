//// JavaScript Objects
//
//var jim = {
//	name: "Jim", 
//	skills: ["JavaScript", "Ruby", "Dancing"],
//	"favorite color": "green",
//	greet: function (name, mood) {
//		name = name || "You";
//		mood = mood || "good";
//		
//		console.log("Hello, " + name +
//								", I am " + this.name +
//								" and I am in a " + mood + " mood!");
//	}
//};
//
//var nick = {
//	name: "Nick", 
//	greet: jim.greet
//};
//
//// jim["favorite color"] = "blue"
//// 
//// console.log(jim.name);
//// console.log(jim["favorite color"]);
//
//jim.name = "James";
//
//jim["greet"]("Alex", "happy");
//nick.greet();
//
//var jimGreet = jim.greet;
//
//jimGreet.call({name: "Amit"}, "Matt", "so-so");
//
//jim.greet.apply(nick, ["Pete","frustrated"])
//
//var args = ["Michael", "pleasant"];
//jim.greet.apply(jim, args);
//
//var nickGreet = jim.greet.apply(nick, args); // I have no idea how this works!
//// console.log(nickGreet); 


var personPrototype = {
  name: 'Anonymous',
  greet: function (name, mood) {
    name = name || "You";
    mood = mood || "good";

    console.log("Hello, " + name +
                ", I am " + this.name +
                " and I am in a " + mood + " mood!");
  },
  
  species: 'Homo Sapien'
};

//var bananas = {
//  color: 'Yellow',
//  speak: function () {
//    console.log(this.color + " BA NA NAZ!!")
//  }
//};
                                 
                                 

// Constructer function - we make this!
function Person (name) {
  this.name = name;
};

//Person.prototype = bananas;  // you can set prototypes

//alex = new Person("Alex");
//alex.speak();

Person.prototype = personPrototype;  // you can change prototypes

jim = new Person("Jim");
jim.greet();
//alex.speak(); // this came from the 1st proto, it didn't change!
//alex.greet(); // this doesn't work because it didn't exist in 1st proto which was bananas

nick = new Person("Nick");













