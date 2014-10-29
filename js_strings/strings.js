/* JavaScript Strings */
/*
var name = "Jim";
console.log(name);

var name2 = 'Jim';
console.log(name2);

var statement = "This is Jim's string";
console.log(statement);

var statement2 = 'He said "This is awesome"';
console.log(statement2);
*/

/* Escape Characters */
/*
var statement3 = 'He said \"This is Jim\'s string\"';
console.log(statement3);

var path = "c:\\myfolder\\myfile.txt";
console.log(path);

var multiline = "This is line 1\n" + 
								"This is line 2\n" + 
								"\tThis is line 3";
console.log(multiline);
*/

/* Concatenation */
/*
var part1 = "Hello ";
var part2 = "World!";
var whole = part1 + part2;
console.log(whole + "!!!!!");
*/
/* Methods: Part 1*/
/*
var length = whole.length;
console.log(whole, length);

var index = whole.indexOf("World");
console.log('Looking for "World" inside of "' +
						whole +
						'" = ', index);

var index2 = whole.indexOf("world");
console.log('Looking for "world" inside of "' +
						whole +
						'" = ', index2);
						
if (whole.indexOf("W") !== -1) {
	console.log("W exists in string")
} else {
	console.log("W does not exist");
}

console.log(whole.charAt(1));
*/
/* Methods: Part 2 */
/*
var start = 6;
var length = 5;
var world = whole.substr(start, length);
console.log(world);

console.log(whole.toLowerCase(), whole);
console.log(whole.toUpperCase(), whole);
*/
/* Comparing Strings */

var first = "Hello";
var second = "hello";

// 3 equals signs means "strictly equal to"
// 2 equals signs means "change type of operand if 
//   it allows the to be equal
if (first.toLowerCase() === second.toLowerCase()) {
	console.log("The strings are equal");
} else {
	console.log("The strings are different");
}

// < > <= >=

function compare(a, b) {
	console.log(a + " <= " + b, a <= b);
}

compare('a', 'b');
compare('a', 'A');
compare('apples', 'oranges');
compare('apples', 'appler');
compare('app', 'apples');
compare('hello', 'hello');








