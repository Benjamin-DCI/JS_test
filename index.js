// 1. Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".

let cityName = "Los Angeles";
if (
    cityName.slice(0, 3).includes("Los") ||
    cityName.slice(0, 3).includes("New")
) {
    console.log(cityName);
} else {
    console.log("The city name does not begin with Los or New");
}

// 2. Write a program to calculate the sum of three elements of a given array of integers. The length of the array must be 3.
// Example
// [5, 10, 15] ➞ 30

const array = [10, 20, 30];
console.log(array.reduce((a, b) => a + b));

// 3. Given two strings, firstName and lastName, return a single string in the format "last, first".
// Examples
// "John", "Doe" ➞ "Doe, John"
// "Mary", "Green" ➞ "Green, Mary"

const firstName = "Richard";
const lastName = "Tepfenhart";
const completeName = `${lastName}, ${firstName}`;
console.log(completeName);

// 4. Write a program that checks whether or not an integer is divisible by 100.
// Examples & Expected Output
// 1 ➞ false
// 1000 ➞ true
// 100 ➞ true

let int = 100;
console.log(int % 100 === 0 && int !== 0);

// 5. Write a program that adds a string ending to each member in an array.
// Examples & Expected output
// ["clever", "meek", "hurried", "nice"], "ly"
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]

// ["new", "pander", "scoop"], "er"
// ➞ ["newer", "panderer", "scooper"]

// ["bend", "sharpen", "mean"], "ing"
// ➞ ["bending", "sharpening", "meaning"]

const array2 = ["clever", "meek", "hurried", "nice"];
for (let i = 0; i <= array2.length - 1; i++) {
    array2[i] = array2[i] + "ly";
}
console.log(array2);

// 6. Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.
// Examples & Expected Output
// 3 ➞ "3 is odd"
// 146 ➞ "146 is even"
// 19 ➞ "19 is odd"

let num = 23;
console.log(num % 2 ? "odd" : "even");

// 7. Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith".

let string = "maria jane jones";
const array3 = string.split(" ");
for (let i = 0; i <= array3.length - 1; i++) {
    array3[i] =
        array3[i].charAt(0).toUpperCase() +
        array3[i].slice(1, array3[i].length);
}
console.log(array3);

// 8. You are given 2 out of 3 of the angles in a triangle in degrees. Write a program that classifies a missing angle of a triangle as either "acute", "right", or "obtuse" based on its degrees.

const degree1 = 90;
const degree2 = 45;
if (degree1 === 90 || degree2 === 90) {
    console.log("Right");
} else if (degree1 < 90 && degree2 < 90) {
    console.log("Acute");
} else if (degree1 > 90 || degree2 > 90) {
    console.log("Obtuse");
}

// An acute angle is one smaller than 90 degrees.
// A right angle is one that is exactly 90 degrees.
// An obtuse angle is one greater than 90 degrees (but smaller than 180 degrees).
// For example: 11, 20 should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

// Examples
// 27, 59 (29 + 59 = 88), (180 - 88 = 92) ➞ Then the third angle is 92degrees so it is "obtuse"
// 135, 11 ➞ The third angle is "acute"
// 45, 45 ➞ The third angle is a "right angle"

// 9. Write a program that takes a string and returns the word count. The string should be a sentence.
// Examples & Expected output
// "This is an example" ➞ 4
// "One more example for good measure" ➞ 6
// "JavaScript is fun, right?" ➞ 4

const sentence = "This is my example sentence";
const array4 = sentence.split(" ");
console.log(array4.length);

// 10. Write a program to multiply each value in an array by the length of the array. Return the result as shown in the examples.
// Examples
// [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0]
// [4, 1, 1] ➞ [12, 3, 3]
// [1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
// [0] ➞ [0]

const array5 = [2, 3, 4, 5];
array5.forEach(function(element) {
    console.log(element * array5.length);
});
