// 1. Write a program to display the city name if the string begins with "Los" or "New" otherwise
// return "The city name does not begin with Los or New".

let cities = [
  "New York",
  "New Jersey",
  "Los Angeles",
  "Boston",
  "San Francisco"
];
const filterCity = cities.filter(cities => {
  return !cities.includes("New") && !cities.includes("Los");
});
console.log("Task number 1");
console.log(`The city name does not begin with "Los" or "New":${filterCity}`);

//2. Write a program to calculate the sum of three elements of a given array of integers. The length of the array must be 3.
//Example
//[5, 10, 15] ➞ 30
const sumArr = [5, 10, 15];
console.log("Task number 2");
if (sumArr.length > 3) {
  console.log("Array length must be 3!");
} else {
  console.log(sumArr.reduce((a, b) => a + b, 0));
}

/*3. Given two strings, firstName and lastName, return a single string in the format "last, first".
Examples
"John", "Doe" ➞ "Doe, John"
"Mary", "Green" ➞ "Green, Mary" */
let firstName = "John";
let lastName = "Doe";
console.log("Task number 3");
console.log(`${lastName}, ${firstName}`);

/*4. Write a program that checks whether or not an integer is divisible by 100.
Examples & Expected Output
1 ➞ false
1000 ➞ true
100 ➞ true */
let myInt = 100;
console.log("Task number 4");
if (myInt % 100 === 0) {
  console.log(true);
} else {
  console.log(false);
}

/* 5. Write a program that adds a string ending to each member in an array.
Examples & Expected output
["clever", "meek", "hurried", "nice"], "ly"
➞ ["cleverly", "meekly", "hurriedly", "nicely"]

["new", "pander", "scoop"], "er"
➞ ["newer", "panderer", "scooper"]

["bend", "sharpen", "mean"], "ing"
➞ ["bending", "sharpening", "meaning"]*/

const arrayLy = ["clever", "meek", "hurried", "nice"];
for (let i = 0; i < arrayLy.length; i++) {
  arrayLy[i] = arrayLy[i] + "ly";
}
console.log("Task number 5");
console.log(arrayLy);

/*6. Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.
Examples & Expected Output
3 ➞ "3 is odd"
146 ➞ "146 is even"
19 ➞ "19 is odd" */

let n = 42;
console.log("Task number 6");
if (n % 2 === 0) {
  console.log(`${n} is even`);
} else {
  console.log(`${n} is odd or not a number`);
}

/*7. Make a variable with the string value of "maria jane jones". 
Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith".*/
let nameThree = "john james smith";
let nameNew = nameThree
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log("Task number 7");
console.log(nameNew);

/*8. You are given 2 out of 3 of the angles in a triangle in degrees.
 Write a program that classifies a missing angle of a triangle as either "acute", "right", 
 or "obtuse" based on its degrees. */
function missingAngle(angle1, angle2) {
  let a = 180 - angle1 - angle2;
  if (a < 90) {
    return "triangle is acute";
  }
  if (a > 90) {
    return "triangle is obtuse";
  } else {
    return "triangle is right";
  }
}
console.log("Task number 8");
console.log(missingAngle(45, 45));

/*9. Write a program that takes a string and returns the word count. The string should be a sentence.
Examples & Expected output
"This is an example" ➞ 4
"One more example for good measure" ➞ 6
"JavaScript is fun, right?" ➞ 4 */
let sentence = "One more example for good measure";
let wordCount = sentence.split(" ").length;
console.log("Task number 9");
console.log(wordCount);

/*10. Write a program to multiply each value in an array by the length of the array. Return the result as shown in the examples.
Examples
[2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0] 
[4, 1, 1] ➞ [12, 3, 3]
[1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
[0] ➞ [0] */
var multiNumbers = [2, 3, 1, 0];
for (var j = 0; j < multiNumbers.length; j++) {
  multiNumbers[j] = multiNumbers[j] * multiNumbers.length;
}
console.log("Task number 10");
console.log(multiNumbers);
