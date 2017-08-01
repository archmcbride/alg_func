//PROBLEM #1
// 1. Write a function which takes an array of numbers and returns the mode of that array.
// [2, 4, 4, 4, 6, 6, 1] - > 4
// [0, 0, 0, 10] -> 0
// [1] -> 1

//create an objest to store the key of each occurance of each number, then count the occurances
    // var testArray = [2, 4, 4, 4, 6, 6, 1] 

    // var findTheMode = function(numbers) {
    //     var keepTrack = {}
    //     for (var i = 0; i < numbers.length; i++) {
    //         if( !(numbers[i] in keepTrack) ) {
    //             keepTrack[numbers[i]] = 1
    //         }
    //         else {
    //             keepTrack[numbers[i]]++
    //         }
    //         console.log(keepTrack[numbers[i]])
    //     }
    //     var biggestNum = 0
    //     var biggestKey = ''
    //     for (var key in keepTrack) {
    //         if (keepTrack[key]> biggestNum ) {
    //             biggestNum = keepTrack[key]
    //             biggestKey = key
    //         }
    //     }
    //     return biggestKey
    // }


    // console.log(findTheMode(testArray))


//PROBLEM #2 
// Write a funciton which, given a year as a number, returns whether that number is a leap year.

// 2000 -> true
// 1900 -> false
// 2016 -> true


// var leapYear=function (year)
// {
//   return ((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0);
// }
//     console.log(leapYear(1900))

//PROBLEM #3
// Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1

    // var testArray = [1,2,5]
    // var firstMissingInt = function (numbers) {
    //     for (var i = 1; true; i++) {
    //         if (numbers.indexOf(i) === -1 ) {
    //             return i 
    //         }
    //     }
    // }
    // console.log(firstMissingInt(testArray))

//PROBLEM #4 Write a function which takes an array of integers and returns an array with any duplicate integers removed.
// [1,1,2,3,1,2,3] -> [1,2,3]
// [1,4,4,4,2,2,4,4,4] -> [1,4,2]


// var arr = [1,4,4,4,2,2,4,4,4]

// var newArr= new Set(arr);


// console.log(newArr)

// //PROBLEM #5   Write function that translates a text to Pig Latin, and another that translates back. 
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".

// "The quick brown fox" -> "Hetay uickqay rownbay oxfay".

// (source: https://adriann.github.io/programming_problems.html)

var engToPigLatin = "The quick brown fox"
//lowercase
var lowerCase = (engToPigLatin.toLowerCase())
    //console.log(lowerCase)  
//split array into a string    
var str = lowerCase.split(" ")
    //console.log(str)

    //MAKE LOOP: move first letter to end of word, add 'ay' to each word
//move first letter to end of word
var resultArr = function (){
	var resultArr = [];
	var input;
	var firstLetter;
	var endOfWord;
	var result;

	for (var i = 0; i < str.length; i++) {
		
		input = str[i];
		firstLetter = input.slice(0,1);
		endOfWord = input.slice(1);
		//console.log(firstLetter)
		//console.log(endOfWord)
		result = (endOfWord + firstLetter + "ay");	
		//console.log(result)
		resultArr.push(result)
	}
	var finalResults = resultArr.join(" ");
 	console.log(finalResults)
}
 resultArr(engToPigLatin)
 
	























// PROBLEM #7 Write a function which takes in an array of numbers and a max cutoff value, 
// and returns a new array with elements limited by the cutoff value.
// [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]

// var maxCutoff = function (array, maximum) {
//     for (var i = 0; i < array.length; i++) {
//         if(array[i]>maximum )
//         array[i] = maximum
//     }
//     return array
// }
// console.log(maxCutoff([1,5,7,3,1,5,7], 3));

// //PROBLEM #8 Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.

// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)   

// var randomNumbers = function () {
//     var returnArray = [];
//     for (var i = 0; i<10; i++) {
//         var random = Math.floor((Math.random()*100));
//         if (returnArray.indexOf(random) != -1) {
//             continue;
//         } else {
//             returnArray.push(random);
//         }
        
//     } return returnArray;
// };
//  console.log(randomNumbers());


// //PROBLEM #9 Write a function which takes two sorted lists and merges them into a new 
//sorted list.

// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// [], [] -> []
// [], [-2, 2] -> [-2, -1, 0, 1, 2]

// (Source: https://adriann.github.io/programming_problems.html)

    // var arr1 = [1,2,5,6,9];
    // var arr2 = [3,4,5,10];

    // var arr3 = arr1.concat(arr2);
    // console.log(arr3)

    // arr3.sort(function(numberA, numberB) {
    //     if(numberA>numberB) {
    //         return 1
    //         }
    //     else if (numberA<numberB) {
    //                 return -1
    //             }
    //     else if (numberA===numberB) {
    //                 return 0
    //             }

    // })
    // console.log(arr3)






//PROBLEMS 10, 11, 12 - BONUS QUESTIONS
// 10. Write a function which, given an array, determines the subarray with the largest sum.

// [1, 1, 1, -1] -> [1, 1, 1]
// [1, 5, -4, 3, 2, -3] -> [1, 5, -4, 3, 2]
// [2, 2, -10, 5, -10, 2, 2] -> [5]
// [1, 3, -4, 5, 7, 9] -> [5, 7, 9] OR [1, 3, -4, 5, 7, 9]
    
   





//PROBLEM 11 - **********STILL TO BE DONE*************
//One way of encoding a message is called a "square code". Given a message like:

// //"Have a nice day!"

// We determine an appropriate size of a square or rectangle to contain this message without spaces like so:

// have
// anic
// eday
// !

// We then read the square in columns, which gives us our encoded message:

// hae! and via ecy

// Write two functions, called encodeSquare and decodeSquare. encodeSquare should be able to encrypt any arbitrary string, 
//and decodeSquare should be able to unencrypt any arbitrary encoded string. The unencrypted string will have no spaces, and that's ok.

// (source: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html, with edits)


// var input = "Have a nice day!"

// var square = function ()   {
    
//     //console.log(root)

//     inputAsArray = input.split (' ')
//     inputAsArray.forEach(function(arr) {
//         arr = arr.split(' ')
//         console.log(arr)
//     })
//     var root = Math.sqrt(inputAsArray.length)
//     if (root === Math.floor(root)) {
//         root++
//     }
//     var output = [
//         for (var i = 0; i < root; i++) {
//             output.push([])
//         }

//     for (var i = 0; i < output.length; i++) {
//         for (var k = 0; k < 4; k++) {
//             output[i].push(inputAsArray.shift())

//         }
//     }
//     //console.log(output)
    
//     for (var i = 0; i < output.length; i++) {
//         output[i] = output[i].join('')
//     }

//     return output.join('\n')
//     } 
//     var result = (square(inputString))




// var unsquare = 









