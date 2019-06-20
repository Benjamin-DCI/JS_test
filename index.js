//Javascript Test

//1. City begins with Los or New
const cityName = cityStr => {
  const first3Letters = cityStr.substring(0, 3);
  if (first3Letters === "Los" || first3Letters === "New") {
    return cityStr;
  } else {
    return "The city name does not begin with Los or New";
  }
};
console.log(cityName("New York"));
//New York


//2. Sum of array
const sumArr = numArr => numArr.length === 3 ? numArr.reduce((acc, cur) => acc + cur) : "Array must have exactly 3 elements";
console.log(sumArr([5, 10, 15]));
//30


//3. last, first name
let first = "John";
let last = "Doe";
let fullName = `${last}, ${first}`;
console.log(fullName);
//Doe, John


//4. Is divisible by 100
const isDivisibleBy100 = num => num % 100 === 0;
console.log(isDivisibleBy100(10));
//false


//5. Add ending to array items
const addEnding = (arr, ending) => arr.map(x => x + ending);
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
//[ 'cleverly', 'meekly', 'hurriedly', 'nicely' ]


//6. Even or Odd
const evenOrOdd = testNum => testNum % 2 === 0 ? `${testNum} is even` : `${testNum} is odd`;
console.log(evenOrOdd(22));
//22 is even


//7. First letter to uppper case
let name = "maria jane jones";
let splitName = name.split(" ");
const firstToUpper = strArr => strArr.map(eachName => eachName[0].toUpperCase() + eachName.substring(1)).join(" ");
console.log(firstToUpper(splitName));
//Maria Jane Jones
//only used join to convert back to string


//8. Triangle shapes
const triangleName = (angle1, angle2) => {
  const angle3 = 180 - angle1 - angle2;
  if (angle3 < 90 && angle3 > 0) {
    return "Acute";
  } else if (angle3 === 90) {
    return "Right";
  } else if (angle3 > 90 && angle3 < 180) {
    return "Obtuse"
  } else {
    return "Are you sure this is a triangle?"
  }
}
console.log(triangleName(45, 45));
//right


//9. Word count
const wordCount = str => str.split(" ").length;
console.log(wordCount("JavaScript is fun, right?"));
//4

//10. Multiply by length of array
const multiplyByLength = numberArray => numberArray.map(x => x * numberArray.length);
console.log(multiplyByLength([2, 3, 1, 0]));
//[ 8, 12, 4, 0 ]
