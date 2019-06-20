
// JavaScript Test
// Complete all questions to the best of your abilities. 
//You can use google, but you cannot ask other students or teachers for help. Also, do not copy code.

// Write a program to display the city name if the string begins with "Los" or "New" otherwise return
// "The city name does not begin with Los or New".

const cityLosNew = city => city.substring(0, 3) === "Los" || city.substring(0, 3) === "New" ? city : "The city name does not begin with Los or New";
//console.log(cityLosNew("Lo Angeles"));

// done works


// Write a program to calculate the sum of three elements of a given array of integers. The length of the array must be 3.
// Example [5, 10, 15] ➞ 30

const sumThreeNum = arr => {
    if (arr.length === 3) { return arr.reduce((acc, num) => acc + num) } else { return "This array doesn't have 3 items" }
};

const numbers = [3, 10, 15];
//console.log(sumThreeNum(...numbers));

//doesn't work


// Given two strings, firstName and lastName, return a single string in the format "last, first". Examples "John", "Doe" ➞ "Doe, John" "Mary", "Green" ➞ "Green, Mary"

let firstName = "John";
let lastName = "Doe";

const fullName = (first, last) => last.concat(', ', first);
//console.log(fullName(firstName, lastName));

//done, works

// Write a program that checks whether or not an integer is divisible by 100. 
//Examples & Expected Output 1 ➞ false 1000 ➞ true 100 ➞ true

const integerDivisible = num => num % 100 === 0;
//console.log(integerDivisible(500));

//done works

// Write a program that adds a string ending to each member in an array.
// Examples & Expected output ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// ["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
// ["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"]

// const endingStr = (arr, end) => arr.forEach((item, newArr) => newArr.push(arr[item].concat(end)));
// const words = ["clever", "meek", "hurried", "nice"];
// console.log(endingStr(...words, "ly"));

//console.log(words.forEach((obj, arr) => arr.push(obj)))

//couldn't fix it. could you Benja?

//easy approach

const endingStr = (arr, end) => {
    let newarr = [];
    for (i = 0; i < arr.length; i++) { newarr.push(arr[i].concat(end)) }
    return newarr
}
const words = ["clever", "meek", "hurried", "nice"];
//console.log(endingStr(words, "ly"));


// Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.
// Examples & Expected Output 3 ➞ "3 is odd" 146 ➞ "146 is even" 19 ➞ "19 is odd"


const evenOdd = x => x % 2 === 0 ? `${x} is even` : `${x} is odd`;
//console.log(evenOdd(207));

//done, works

// Make a variable with the string value of "maria jane jones". 
//Convert each first letter to uppercase.
// Make sure your code works for any three names e.g. "john james smith".

// const capitalize = str => str.split(' ').forEach(element => element[0].toUpperCase());
// let john = "john james smith";
// console.log(capitalize(john));

const capitalize = str => {
    let arr = str.split(' ');
    let newarr = [];
    for (i = 0; i < arr.length; i++) {
        newarr.push([i].charAt(0).toUpperCase(), [i].substring[0])
    } return newarr
}

let john = "john james smith";
console.log(capitalize(john));

const items = ['item1', 'item2', 'item3'];
const copy = [];
// for (let i=0; i<items.length; i++) {
//     copy.push(items[i]);
//   }

//   // after
// items.forEach(function (item) {
//     copy.push(item.toUpperCase([0]));
// });

// console.log(copy);



// You are given 2 out of 3 of the angles in a triangle in degrees.
// Write a program that classifies a missing angle of a triangle as either "acute", "right", or "obtuse" based on its degrees.

// An acute angle is one smaller than 90 degrees. 
//A right angle is one that is exactly 90 degrees. 
// An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees). 
//For example: 11, 20 should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.
// Examples 27, 59 (29 + 59 = 88), (180 - 88 = 92) ➞ Then the third angle is 92degrees so it is "obtuse" 135, 11 ➞ The third angle is "acute" 45, 45 ➞ The third angle is a "right angle"

const angle = (a, b) => {
    if ((180 - (a + b)) > 90) {
        return "the third angle is obtuse."
    }
    else if ((180 - (a + b)) < 90) {
        return "the third angle is acute."
    }
    else { return "the third angle is right." }
};


//console.log(angle(110, 40));


// Write a program that takes a string and returns the word count. The string should be a sentence. 
//Examples & Expected output "This is an example" ➞ 4 "One more example for good measure" ➞ 6 "JavaScript is fun, right?" ➞ 4

const messure = str => typeof str === "string" ? str.split(" ").length : "This is not a string";


const example = ["This is an example"];
//console.log(messure(example));


// Write a program to multiply each value in an array by the length of the array. 
//Return the result as shown in the examples.
// Examples [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0] 
//[4, 1, 1] ➞ [12, 3, 3] [1, 0, 3, 3, 7, 2, 1] ➞ [7, 0, 21, 21, 49, 14, 7] [0] ➞ [0]

const arrNumbs = [2, 3, 1, 0].map(x => x * 4);
//console.log(arrNumbs);
