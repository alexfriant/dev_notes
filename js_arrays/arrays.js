/* JavaScript Arrays */

// var x = ['some','extra','words','here'];
// // console.log(x.length);
// 
// var y = ['a string',3,['a sub array',2,3,4],'treehouse', function(a,b){return a + b}];
// 
// var z = [];
// 
// var a = new Array(50);



// Setting Arrays 

// var my_array = ['Hello', 42, true, function (a) {return a * 2}]
// 
// var word = my_array[0];
// var answer = my_array[1];
// var doubler = my_array[3];
// console.log(doubler(10));
// 
// my_array[1] = 144;
// var new_answer = my_array[1];
// 
// my_array[4] = "A new String";
// my_array[my_array.length] = 14;



// Methods

// var my_array = [2,3,4];
// console.log(my_array.toString()); // chrome runs it so fast
// 																	// that this is necessary
// 
// my_array.push(5);
// console.log(my_array.toString());
// 
// var value = my_array.pop();
// console.log(value, my_array.toString());

// var my_array = [2,3,4];
// console.log(my_array.toString());
// 
// my_array.unshift(1);
// console.log(my_array.toString());
// 
// var value = my_array.shift();
// console.log(my_array.toString());

// var my_array = [10,33,300,32,100,0,32,44,3,4];
// console.log(my_array.toString());
// 
// //sort by ascending numbers
// my_array.sort(function (a, b) {
// 	return a - b; // same as a > b
// });
// console.log(my_array.toString());

// //sort by number length
// my_array.sort(function (a, b) {
// 	return a.toString().length > b.toString().length;
// });
// console.log(my_array.toString());

// randomize order
// my_array.sort(function (a, b) {
// 	return Math.random() - 0.5;
// });
// console.log(my_array.toString());

// reverse
// var my_array = [1,2,3,4,5];
// console.log(my_array.toString());
// 
// my_array.reverse();
// console.log(my_array.toString());



// SAFE METHODS

// var x = [1,2,3];
// var y = [4,5,6];
// var z = x.concat("hello","world",[7,8,9])
// console.log(z,x,y);

// var my_array = [0,1,2,3,4,5];
// console.log(my_array.slice(2,5));

// var words = ["these","are","some","words", function (a,b){}];
// var result = words.join(' ')
// console.log(words, result);


// Splice

var my_array = [0,1,2,3,4,5,6];
console.log(my_array.toString());

// delete my_array[2];
my_array.splice(8, 1, 'two', 'TWO', 555);
// 	.splice(index position to begin, number of positions to delete, insert n objects...)

console.log(my_array.toString());
