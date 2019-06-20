// 1. Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".

let city = "Los Angelos";
if (city[0] === "N" && city[1] === "e" && city[2] === "w") {
  console.log(city);
} else if (city[0] === "L" && city[1] === "o" && city[2] === "s") {
  console.log(city);
} else {
  console.log("The city name does not begin with Los or New");
}

// 2. Write a program to calculate the sum of three elements of a given array of integers.The length of the array must be 3.
// Example
// [5, 10, 15]➞ 30

let numArr = [2, 6, 2];
let elmentsSum = 0;
for (let i = 0; i < numArr.length - 1; i++) {
  elmentsSum += numArr[i];
}
console.log(` The sum of the given array: [${numArr}] is ${elmentsSum}`);

// 3. Given two strings, firstName and lastName, return a single string in the format "last, first".
//     Examples
// "John", "Doe" ➞ "Doe, John"
// "Mary", "Green" ➞ "Green, Mary"

let firstName = "John";
let lastName = "Doe";
console.log(` " ${lastName}, ${firstName}"`);

// 4. Write a program that checks whether or not an integer is divisible by 100.
// Examples & Expected Output
// 1 ➞ false
// 1000 ➞ true
// 100 ➞ true

function hCheck(number) {
  if (number % 100 === 0) {
    console.log(true, `the number ${number} is divisible by 100`);
  } else {
    console.log(false, `the number ${number} is not divisible by 100`);
  }
}
hCheck(100);

// 5. Write a program that adds a string ending to each member in an array.
//     Examples & Expected output
//     ["clever", "meek", "hurried", "nice"], "ly"
// ➞["cleverly", "meekly", "hurriedly", "nicely"]

// ["new", "pander", "scoop"], "er"
// ➞["newer", "panderer", "scooper"]

// ["bend", "sharpen", "mean"], "ing"
// ➞["bending", "sharpening", "meaning"]

let names1 = ["clever", "meek", "hurried", "nice"];
let names2 = ["new", "pander", "scoop"];
let names3 = ["bend", "sharpen", "mean"];

function strAdding(arr, str) {
  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i].concat(str);
  }
  console.log(arr);
}

strAdding(["clever", "meek", "hurried", "nice"], "ly"); // or strAdding([names1, "ly")

// 6. Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.
//     Examples & Expected Output
// 3 ➞ "3 is odd"
// 146 ➞ "146 is even"
// 19 ➞ "19 is odd"

let eddOven = num =>
  num % 2 === 0
    ? console.log(`tne number ${num} is even`)
    : console.log(`tne number ${num} is odd`);
eddOven(101);

// 7. Make a variable with the string value of "maria jane jones".Convert each first letter to uppercase.Make sure your code works for any three names e.g. "john james smith".
let allName = "maria jane jones";
let names = "";

function namesUppercase(allName) {
  let names = allName.toLowerCase().split(" ");
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].charAt(0).toUpperCase() + names[i].substring(1);
  }
  return names.join(" ");
}

console.log(namesUppercase(allName));

// 8. You are given 2 out of 3 of the angles in a triangle in degrees.Write a program that classifies a missing angle of a triangle as either "acute", "right", or "obtuse" based on its degrees.

// An acute angle is one smaller than 90 degrees.
// A right angle is one that is exactly 90 degrees.
// An obtuse angle is one greater than 90 degrees(but smaller than 180 degrees).
// For example: 11, 20 should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

//     Examples
// 27, 59(29 + 59 = 88), (180 - 88 = 92) ➞ Then the third angle is 92degrees so it is "obtuse"
// 135, 11 ➞ The third angle is "acute"
// 45, 45 ➞ The third angle is a "right angle"

function triangleAngel(angel1, angel2) {
  angel3 = 180 - (angel1 + angel2);
  if (angel3 > 0 && angel3 < 90) {
    console.log(`Then the third angle is ${angel3} so it is "acute"`);
  } else if (angel3 === 90) {
    console.log(`Then the third angle is ${angel3} so it is "right"`);
  } else {
    console.log(`Then the third angle is ${angel3} so it is "obtuse"`);
  }
}
triangleAngel(45, 45);

// 9. Write a program that takes a string and returns the word count.The string should be a sentence.
//     Examples & Expected output
// "This is an example" ➞ 4
// "One more example for good measure" ➞ 6
// "JavaScript is fun, right?" ➞ 4

function counting(str) {
  let words = str.split(" ");
  console.log(`the word count of a sentence ${str} is ${words.length}`);
}
counting("One more example for good measure");

// 10. Write a program to multiply each value in an array by the length of the array.Return the result as shown in the examples.
//     Examples
// [2, 3, 1, 0](2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞[8, 12, 4, 0]
// [4, 1, 1]➞[12, 3, 3]
// [1, 0, 3, 3, 7, 2, 1]➞[7, 0, 21, 21, 49, 14, 7]
// [0]➞[0]

function arrMulti(arr) {
  let arrM = [];
  for (i = 0; i < arr.length; i++) {
    arrM[i] = arr[i] * arr.length;
  }
  return arrM;
}

console.log(arrMulti([2, 3, 1, 0]));
