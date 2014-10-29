/* JavaScript Numbers */

// Whole Numbers Part 1
/* var a = 11,
		b = -123;
		
var c = 1.5,
		d = 123.456789;
		
var e = 0.1,
		f = 0.2;
		
var result = e * f;

// Part 2

var g = 1.23E16;

var h = 010; // 0 leading numbers are octals (base 8)
						 // but only if all numbers are < 8

// ff 00 00 hexidecimal
var i = 0xff; // 255
console.log(i);
*/
/* Parsing Numbers from Strings */
/*
var j = parseInt("012", 8);
var k = parseInt("010111", 2);
var l = parseInt("There are 23 people", 10);
console.log(isNaN(l));

var m = parseFloat("0123.456 is a strange number");
*/
/* Operators */
/*
var o = 1 + 2;
var p = 10 - 7.3;
var q = 3 * 4.2; // note the crazy result
var r = 15 / 10;
var s = 15 % 13; //modulo
var t = (1 + 2) * (3 / 4); // order of operations
*/

/* Comparisons */

console.log(1 !== 3);

if (1 < 2) {
	console.log("Yes");
} else {
	console.log("No");
}

var u = Math.round(Math.random() * 10);
console.log(u);
var v = Math.round(9.5);
console.log(v);
var w = Math.floor(9.5);
console.log(w);
var x = Math.ceil(9.1);
console.log(x);

var y = Math.pow(2, 5);
console.log(y);
var z = Math.sqrt(4);
console.log(z);
var pi = Math.PI;
console.log(pi);

// look at "Math" in the console to explore!