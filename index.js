// # JavaScript Test

// ## Complete all questions to the best of your abilities. You can use google, but you cannot ask other students or teachers for help. Also, do not copy code.

// 1. Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".

// let city = "Los Angeles";
function begin(city) {
  if (city.startsWith("Los" || "New")) {
    return city;
  } else {
    return "The city name does not begin with Los or New";
  }
}
console.log(begin("Angeles"));

// 2. Write a program to calculate the sum of three elements of a given array of integers. The length of the array must be 3.
// Example
// [5, 10, 15] ➞ 30

let arr = [5, 10, 15];
let sum = 0;
for (var i in arr) {
  sum += arr[i];
}
console.log(sum);

// 3. Given two strings, firstName and lastName, return a single string in the format "last, first".
// Examples
// "John", "Doe" ➞ "Doe, John"
// "Mary", "Green" ➞ "Green, Mary"

const firstName = "";
const lastName = "";
function concatName(firstName, lastName) {
  console.log(`${lastName}, ${firstName}`);
}
concatName("John", "Snow");

// 4. Write a program that checks whether or not an integer is divisible by 100.
// Examples & Expected Output
// 1 ➞ false
// 1000 ➞ true
// 100 ➞ true

let a = 100;

if (a % 100 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// 5. Write a program that adds a string ending to each member in an array.
// Examples & Expected output
// ["clever", "meek", "hurried", "nice"], "ly"
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]

// ["new", "pander", "scoop"], "er"
// ➞ ["newer", "panderer", "scooper"]

// ["bend", "sharpen", "mean"], "ing"
// ➞ ["bending", "sharpening", "meaning"]
let str = ["new", "pander", "scoop"];
let addToStringEnding = str.map(str => {
  return `${str}er`;
});

console.log(addToStringEnding);

// 6. Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.
// Examples & Expected Output
// 3 ➞ "3 is odd"
// 146 ➞ "146 is even"
// 19 ➞ "19 is odd"

let num = 3;

if (num % 2 === 0) {
  console.log("a is even");
} else {
  console.log("a is odd");
}

// 7. Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith".

function upperCase(str) {
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

console.log(upperCase("maria jane jones"));

// 8. You are given 2 out of 3 of the angles in a triangle in degrees. Write a program that classifies a missing angle of a triangle as either "acute", "right", or "obtuse" based on its degrees.

// An acute angle is one smaller than 90 degrees.
// A right angle is one that is exactly 90 degrees.
// An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).
// For example: 11, 20 should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

// Examples
// 27, 59 (29 + 59 = 88), (180 - 88 = 92) ➞ Then the third angle is 92degrees so it is "obtuse"
// 135, 11 ➞ The third angle is "acute"
// 45, 45 ➞ The third angle is a "right angle"

let firstAngle = 27;
let secondAngle = 59;

if (180 - (firstAngle + secondAngle) < 90) {
  console.log("The third angle is acute");
} else if (180 - (firstAngle + secondAngle) == 90) {
  console.log("The third angle is a right angle");
} else if (180 - (firstAngle + secondAngle) > 90) {
  console.log("The third angle is an obtuse angle");
}

// 9. Write a program that takes a string and returns the word count. The string should be a sentence.
// Examples & Expected output
// "This is an example" ➞ 4
// "One more example for good measure" ➞ 6
// "JavaScript is fun, right?" ➞ 4

// let sentence = "Count my words";
// let arrayOfWords = sentence.split(" ");
// console.log(arrayOfWords.length);

// 10. Write a program to multiply each value in an array by the length of the array. Return the result as shown in the examples.
// Examples
// [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0]
// [4, 1, 1] ➞ [12, 3, 3]
// [1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
// [0] ➞ [0]

let numbers = [4, 1, 1];
numbers.map(number => console.log(number * numbers.length));
