// # JavaScript Test

// ## Complete all questions to the best of your abilities. You can use google, but you cannot ask other students or teachers for help. Also, do not copy code.

// 1. Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".

const cities = ["New York", "Miami", "Paris", "Amsterdam", "Los Angeles"];

const firstLetters = cities =>
  cities.filter(city => city.includes("Los") || city.includes("New"));

console.log("1: ", firstLetters(cities));

// 2. Write a program to calculate the sum of three elements of a given array of integers. The length of the array must be 3.
// Example
// [5, 10, 15] ➞ 30

let array = [9, 2, 3];

const sumOf = array => {
  let sum = (a, b, c) => a + b + c;
  return sum(...array);
};

console.log("2: ", sumOf(array));

// 3. Given two strings, firstName and lastName, return a single string in the format "last, first".
// Examples
// "John", "Doe" ➞ "Doe, John"
// "Mary", "Green" ➞ "Green, Mary"

let firstName = "John";
let lastName = "Doe";

console.log(`3: ${lastName}, ${firstName}`);

// 4. Write a program that checks whether or not an integer is divisible by 100.
// Examples & Expected Output
// 1 ➞ false
// 1000 ➞ true
// 100 ➞ true

let int = 100;

const div100 = int % 100 === 0 ? true : false;
console.log("4: ", div100);

// 5. Write a program that adds a string ending to each member in an array.
// Examples & Expected output
// ["clever", "meek", "hurried", "nice"], "ly"
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]

// ["new", "pander", "scoop"], "er"
// ➞ ["newer", "panderer", "scooper"]

// ["bend", "sharpen", "mean"], "ing"
// ➞ ["bending", "sharpening", "meaning"]

let array2 = ["clever", "meek", "hurried", "nice"];
const add = array2 => {
  let adChar = "ly";
  let arr = [];
  for (let i = 0; i < array2.length; i++) {
    arr.push((array2[i] += adChar));
  }
  return arr;
};

console.log("5: ", add(array2));

// 6. Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.
// Examples & Expected Output
// 3 ➞ "3 is odd"
// 146 ➞ "146 is even"
// 19 ➞ "19 is odd"

let int2 = 146;

const evenOdd = int2 % 2 === 0 ? `${int2} is even` : `${int2} is odd`;
console.log("6: ", evenOdd);

// 7. Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith".

let name = "maria jane jones";

const upper = name => {
  let spli = name.split(" ");
  str1 = spli[0].charAt(0).toUpperCase() + spli[0].slice(1);
  str2 = spli[1].charAt(0).toUpperCase() + spli[1].slice(1);
  str3 = spli[2].charAt(0).toUpperCase() + spli[2].slice(1);
  return `${str1} ${str2} ${str3}`;
};
console.log("7: ", upper(name));

// 8. You are given 2 out of 3 of the angles in a triangle in degrees. Write a program that classifies a missing angle of a triangle as either "acute", "right", or "obtuse" based on its degrees.

// An acute angle is one smaller than 90 degrees.
// A right angle is one that is exactly 90 degrees.
// An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).
// For example: 11, 20 should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

const thirdTriangle = (a, b) => {
  let angle = 180 - (a + b);
  if (angle < 90) {
    return "actue";
  } else if (angle > 90) {
    return "obtese";
  } else if (angle === 90) {
    return "right angle";
  }
};

console.log("8: ", thirdTriangle(45, 45));

// Examples
// 27, 59 (29 + 59 = 88), (180 - 88 = 92) ➞ Then the third angle is 92degrees so it is "obtuse"
// 135, 11 ➞ The third angle is "acute"
// 45, 45 ➞ The third angle is a "right angle"

// 9. Write a program that takes a string and returns the word count. The string should be a sentence.
// Examples & Expected output
// "This is an example" ➞ 4
// "One more example for good measure" ➞ 6
// "JavaScript is fun, right?" ➞ 4

let sentence = "JavaScript is fun, right?";

const wordCount = sentence => {
  let spli2 = sentence.split(" ");
  let count = spli2.length;
  return count;
};
console.log("9: ", wordCount(sentence));

// 10. Write a program to multiply each value in an array by the length of the array. Return the result as shown in the examples.
// Examples
// [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0]
// [4, 1, 1] ➞ [12, 3, 3]
// [1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
// [0] ➞ [0]

let array3 = [2, 3, 1, 0];
const multi = array3 => {
  let arr = 0;
  for (let i = 0; i < array3.length; i++) {
    arr += array3[i] * array3.length;
  }
  return arr;
};
console.log("10: ", multi(array3));
