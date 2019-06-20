//JavaScript Test
/*Complete all questions to the best of your abilities. You can use google, but you cannot ask other students or teachers for help. Also, do not copy code.

1.Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".*/
// let arr = ["Los Angeles", "New York", "New Haven", "Detroit"];
// function cities(str) {
//   if (
//     str.length >= 3 &&
//     (str.substring(0, 3) === "Los" || str.substring(0, 3) === "New")
//   ) {
//     console.log("1: ", str);
//     str;
//   } else {
//     console.log("1: ", "The city name does not begin with Los or New");
//   }
// }
function cityName(str) {
  if (
    str.length >= 3 &&
    (str.substring(0, 3) == "Los" || str.substring(0, 3) == "New")
  ) {
    return str;
  }
  return "";
}
console.log(cityName("New York"));
console.log(cityName("Los Angeles"));
console.log(cityName("London"));

/*2. Write a program to calculate the sum of three elements of a given array of integers. 
  The length of the array must be 3.
  Example [5, 10, 15] ➞ 30*/
function sum(nums) {
  return nums[0] + nums[1] + nums[2];
}
console.log("2: ", sum([5, 10, 15]));

/*4.Given two strings, firstName and lastName, return a single string in the format "last, first". Examples "John", "Doe" ➞ "Doe, John" "Mary", "Green" ➞ "Green, Mary"*/
let firstName = "John ";
let lastName = "Doe";
let fullName = firstName + lastName;
console.log("4: ", fullName);

/*5. Write a program that adds a string ending to each member in an array. Examples & Expected output ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]*/
// let arr = ["clever", "meek", "hurried", "nice"];
const addToWord = (arr, str) => {
  let result = "";
  for (i = 0; i < arr.length; i++) {
    result = arr[i];
    result += str;
  }
  return result;
};
console.log("5: ", addToWord(["clever", "meek", "hurried", "nice"], "ly"));
/*["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
  
  ["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"]*/

/*6. Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers. Examples & Expected Output 3 ➞ "3 is odd" 146 ➞ "146 is even" 19 ➞ "19 is odd"*/
function evenOdd(number) {
  let reminder = number % 2;
  if (reminder === 0) {
    console.log("even");
  } else if (reminder === Math.round(reminder)) {
    console.log("odd");
  } else {
    console.log("invalid");
  }
}
evenOdd(0);

/*7. Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. */
let str1 = "john james smith";
function toUpperCase(str1) {
  let array1 = str1.split(" ");
  let newArray1 = [];
  for (var x = 0; x < array1.length; x++) {
    newArray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newArray1.join(" ");
}
console.log("7:", toUpperCase(str1));

/*8. You are given 2 out of 3 of the angles in a triangle in degrees. 
  Write a program that classifies a missing angle of a triangle as either "acute", "right", or "obtuse" based on its degrees.
  An acute angle is one smaller than 90 degrees. 
  A right angle is one that is exactly 90 degrees. 
  An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees). 
  For example: 
  11, 20 should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.
  -> Examples 
  27, 59 (29 + 59 = 88), (180 - 88 = 92) ➞ Then the third angle is 92degrees so it is "obtuse" 135, 
  11 ➞ The third angle is "acute" 45, 45 ➞ The third angle is a "right angle"
  
  9./*Write a program that takes a string and returns the word count. The string should be a sentence. Examples & Expected output "This is an example" ➞ 4 "One more example for good measure" ➞ 6 "JavaScript is fun, right?" ➞ 4*/

/*10.Write a program to multiply each value in an array by the length of the array. 
  Return the result as shown in the examples. 
  Examples [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), 
  (0 * 4) ➞ [8, 12, 4, 0] [4, 1, 1] ➞ [12, 3, 3] [1, 0, 3, 3, 7, 2, 1] ➞ [7, 0, 21, 21, 49, 14, 7] [0] ➞ [0]*/
const numbers = [1, 2, 3, 4];
let times4 = [];
numbers.forEach(function(number) {
  times4.push(number * 4);
});
console.log("10: ", times4);
