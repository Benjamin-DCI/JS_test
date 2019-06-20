// // Write a program to calculate the sum of three elements of a given array of integers. The length of the array must be 3.
// Example
// [5, 10, 15] ➞ 30
function sum_three(nums) {
  return nums[0] + nums[1] + nums[2];
}
//console.log(sum_three([5, 10, 15]));

//const firstName = "John"
// const lastName = "Doe"
function concatName(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}
concatName("John", "Doe");
concatName("First", "Last");
concatName("A", "B");

//console.log(concatName);

//checks whether or not an integer is divisible by 100. Examples & Expected Output 1 ➞ false 1000 ➞ true 100 ➞ true

//Write a program that adds a string ending to each member in an array. Examples & Expected output ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
const arr = ["clever", "meek", "hurried"];
const str = "er";

const addEnding = (arr, str) => {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    result[i] = arr[i] + str;
  }
  return result;
};
//console.log(addEnding(arr, str))
//Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers. Examples & Expected Output 3 ➞ "3 is odd" 146 ➞ "146 is even" 19 ➞ "19 is odd"

let eddOven = num => num % 2 === 0;
// console.log(`tne number ${num} is even`)
//console.log(`tne number ${num} is odd`);
eddOven(101);

//Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith".
let allName = "maria jane jones";
let names = "";

function namesUppercase(allName) {
  let names = allName.toLowerCase().split(" ");
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].charAt(0).toUpperCase() + names[i].substring(1);
  }
  return names.join(" ");
}

//You are given 2 out of 3 of the angles in a triangle in degrees. Write a program that classifies a missing angle of a triangle as either "acute", "right", or "obtuse" based on its degrees.
// function triangleAngel(angel1, angel2) {
//   angel3 = 180 - (angel1 + angel2);
//   if (angel3 > 0 && angel3 < 90) {
//     console.log(`Then the third angle is ${angel3} so it is "acute"`);
//   } else if (angel3 === 90) {
//     console.log(`Then the third angle is ${angel3} so it is "right"`);
//   } else {
//     console.log(`Then the third angle is ${angel3} so it is "obtuse"`);
//   }
//  }
//  triangleAngel(45, 45);

//9. Write a program that takes a string and returns the word count.The string should be a sentence.
// function counting(str) {
//   let words = str.split(" ");
//   console.log(`the word count of a sentence ${str} is ${words.length}`);
//  }
//  counting("One more example for good measure");

//Write a program to multiply each value in an array by the length of the array.Return the result as shown in the examples.
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
