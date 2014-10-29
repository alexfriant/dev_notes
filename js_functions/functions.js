/* JavaScript Arguments */

// function sayHello (name, greeting) {
// 	if (typeof name === 'undefined') {
// 				return "no name provided";
// 	}	if (typeof greeting === 'undefined') {
// 				greeting = 'Hello';
// 	}
// 	console.log(greeting + " World! " + name);
// 	
// 	return name.length;
// 	
// 	console.log("End of function");
// }
// 
// console.log(sayHello("James", "Greetings"));
// 
// console.log(sayHello("Jim"));
// 
// var blank;
// console.log(sayHello(blank, "Howdy"));
// console.log(sayHello());



// Javascript Scope

// var color = 'BLACK';
// var number = 1;
// 
// function showColor () {
// 	var color = 'GREEN';
// 	var shape = 'square';
// 
// 	number = 2;
// 		
// 	console.log('showColor color', color);
//   console.log('showColor number', number);
// 	console.log('showColor shape', shape);
// }
// 
// showColor();
// 
// console.log('Global color', color);
// console.log('Global number', number);
// console.log('Global shape', shape);



// Anonymous Functions
// 
// var myFunction = function () {
// 	console.log('myFunction was called');
// 	undeclaredVariable;
// };
// 
// var callTwice = function (targetFunction) {
// 	targetFunction();
// 	targetFunction();
// }
// 
// // callTwice(myFunction());  // this evaluates myFunction before passing it - don't want this
// 
// callTwice(function() {
// 	console.log('Hello from anon function');
// 	undeclaredVariable;
// 	}
// ); // this passes the function itself - evaluation happens later

// true anon, has private scope
// (function (num, msg) {
// 	var a, b, c;
// 	//...
// 	console.log(num, "from anon function", msg);
// })(1, 'hello') //this could be () but if you need to pass variables, this is where!



// The DOM

// get DOM elements by methods of the DOM
var button = document.getElementById('action');
var input = document.getElementById('text_field');

// old way - but only one "onclick" function can be made. :-(
button.onclick = function () {
	console.log('onclick');
}

// better way - you can ad multiple events for multiple functions! :-)
button.addEventListener('click', function () {
	console.log('event listener 1');
});

button.addEventListener('click', function () {
	console.log('event listener 2');
	input.setAttribute('value', 'Hello from 2nd listener!');
});








