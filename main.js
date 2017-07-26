console.log("Welcome to Node")


//var greeting = function () {
//	console.log('Hello!')

//}

// var calculateArea = function ( width, height ) {
// 	var area = width * height
// 	return area
// }

// console.log(calculateArea(3,6))



//Yogi bear
// var bear = {
// 	furColor: 'black',
// 	name: 'Yogi',
// 	eat: function(food) {
// 		console.log('${bear.name} is eating ${food}')
// 	}
// }
// console.log(bear)

//call the function
//bear.eat()


//multiple return statements
// var pickFromAHat = function() {
// 	var randomNumber = Math.random() 
// 	if (randomNumber < .2) {return 'red'}
// 	if (randomNumber < .6) {return 'green'}
// 	if (randomNumber > .6) {return 'blue'}
// 	console.log("How did we get here?")
// }

// console.log(pickFromAHat())
// console.log(pickFromAHat())
// console.log(pickFromAHat())
// console.log(pickFromAHat())



//more arguments than 
// var logEmAll = function() {
// 	//the arguments object has a reference to all the arguments pass into the function, even if they don't match named parameters
// 	//'arguments is like an array. it has numbered indeces, but can't use pop or push
// 	console.log(arguents)
// }
// console.log('hello', '1', 12, 2)

//#1
// var tripleFive=function() {
// 	for (var i = 0; i < 3; i++) {
// 		console.log('Five!')
// 	}
// }
// tripleFive()

// #2 Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
//    - lastLetter('hello') should return 'o'
//    - lastLetter('island') should return 'd'

// var lastLetter= function (word) {
// 	var calc = word[word.length-1];
// 	return calc;
// }

// console.log(lastLetter("Katie")) //lastLetter is being called with word:katie, all will be console.logged


//other option is to define the variables and call those
// var Hello = lastLetter("Hello")
// var island = lastLetter("inland")

//#3 Write a function called 'square' which takes a single argument which is a number, and returns number * number.
//   - square(3) should return 9
//   - square(5) should return 25

// var square = function(digit) {
// 	var calc = digit*digit;
// 	return calc; 
// }
// console.log(square(5))

//#4 Write a function called 'negate' which takes a single number argument and returns the negative of that number.
    // - negate(5) should return -5
    // - negate(-8) should return 8
//  var negate = function(digit) {
//  	var calc =digit*(-1);
//  	return calc;
//  }
// console.log(negate(12))

//*********DID NOT FINISH******#5 Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
    // - toArray(1, 4, 5) should return [1, 4, 5]
    // - toArray(8, 9, 10) should return [8, 9, 10]

// var toArray = function(digit) {
// 	var array = [];
// 	arr.push("digit");
// }


//#5Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter 
//is 'A' and false otherwise.
    // - startsWithA('aardvark') should return true
    // - startsWithA('bear') should return false

    // var startsWithA = function(word){
    // 	if ("a"===word[0]) {
    // 		return true
    // 	} else {
    // 		return false
    // 	}
    // }
    // console.log(startsWithA("ant"))




