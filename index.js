// 1. Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".

const beginWith = (cityName, str) => cityName.indexOf(str) === 0 ? `${cityName} begin with ${str}.` : `${cityName} does NOT begin with ${str}.`;
console.log(beginWith("Sao Paulo", "Sao"));

// 2. Write a program to calculate the sum of three elements of a given array of integers. The length of the array must be 3.  
// Example
// [5, 10, 15] ➞ 30

const sumArray = arr => arr.reduce((acc, cur) => acc + cur, 0);
let numbers = [5, 10, 15];
console.log(sumArray(numbers));

// 3. Given two strings, firstName and lastName, return a single string in the format "last, first".
// Examples
// "John", "Doe" ➞ "Doe, John"
// "Mary", "Green" ➞ "Green, Mary"

let str1 = "John",
    str2 = "Doe";
const fullName = (firstName, lastName) => `${lastName}, ${firstName} `;
console.log(fullName(str1, str2));

// 4. Write a program that checks whether or not an integer is divisible by 100.
// Examples & Expected Output
// 1 ➞ false
// 1000 ➞ true
// 100 ➞ true

const divisibleBy100 = num => num % 100 === 0;
console.log(divisibleBy100(1));
console.log(divisibleBy100(100));

// 5. Write a program that adds a string ending to each member in an array.
// Examples & Expected output
// ["clever", "meek", "hurried", "nice"], "ly"
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]

// ["new", "pander", "scoop"], "er"
// ➞ ["newer", "panderer", "scooper"]

// ["bend", "sharpen", "mean"], "ing"
// ➞ ["bending", "sharpening", "meaning"]

let words = ["bend", "sharpen", "mean"];
const addString = (arr, str) => arr.map(el => el.concat(str));
console.log(addString(words, "ing"));

/*
6. Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.
Examples & Expected Output
3 ➞ "3 is odd"
146 ➞ "146 is even"
19 ➞ "19 is odd" */

const checkNumber = num => num % 2 === 0 ? `${num} is even` : `${num} is odd`;
console.log(checkNumber(10));
console.log(checkNumber(21));

/* 
7. Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith". */

let name1 = "maria jane jones";
let name2 = "john james smith";
const capitalize = str => str.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
console.log(capitalize(name1));
console.log(capitalize(name2));

/*
8. You are given 2 out of 3 of the angles in a triangle in degrees. Write a program that classifies a missing angle of a triangle as either "acute", "right", or "obtuse" based on its degrees.

An acute angle is one smaller than 90 degrees.
A right angle is one that is exactly 90 degrees.
An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).
For example: 11, 20 should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

Examples
27, 59 (29 + 59 = 88), (180 - 88 = 92) ➞ Then the third angle is 92degrees so it is "obtuse" 
135, 11 ➞ The third angle is "acute"
45, 45 ➞ The third angle is a "right angle" */

const angleType = (ang1, ang2) => {
    let ang3 = 180 - (ang1 + ang2);
    if (ang3 > 0 && ang3 < 90) {
        return "The third angle is acute.";
    } else if (ang3 === 90) {
        return "The third angle is a right angle.";
    } else if (ang3 > 90 && ang3 < 180) {
        return "The third angle is obtuse.";
    }
};
console.log(angleType(27, 59));
console.log(angleType(135, 11));
console.log(angleType(45, 45));

/* 9. Write a program that takes a string and returns the word count. The string should be a sentence.
Examples & Expected output
"This is an example" ➞ 4
"One more example for good measure" ➞ 6
"JavaScript is fun, right?" ➞ 4 */

const wordsCount = sentence => sentence.split(" ").length;
console.log(wordsCount("One more example for good measure"));
console.log(wordsCount("JavaScript is fun, right?"));


/* 10. Write a program to multiply each value in an array by the length of the array. Return the result as shown in the examples.
Examples
[2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0] 
[4, 1, 1] ➞ [12, 3, 3]
[1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
[0] ➞ [0]
 */

const multiply = arr => arr.map(el => el * arr.length);
console.log(multiply([4, 1, 1]));
console.log(multiply([1, 0, 3, 3, 7, 2, 1]));
