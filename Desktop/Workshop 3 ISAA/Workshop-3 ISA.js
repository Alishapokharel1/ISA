/* Workshop-3 */
/* Alisha Pokharel - 2329299 */
/* Question - 1 */
//Write a function that takes the base and height of a triangle and return its area.

function triangleArea(base, height) {
  return (base * height) / 2;
}
let base = 3;
let height = 2;
let area = triangleArea(base, height);
console.log(area); // Output: 3

/* Question - 2 */
// Write a function that returns the string "something" joined with a space " " and the given argument a.

function joinWithSpace(a) {
  return "something " + a;
}
console.log(joinWithSpace("else")); // Output: "something else"


/* Question - 3 */
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored,
// find the final points for the team and return that value.

function points(twoPointers, threePointers) {
  return 2 * twoPointers + 3 * threePointers;
}
console.log(points(2, 3)); // Output: 13
console.log(points(10, 6)); // Output: 38
console.log(points(50, 20)); // Output: 140 



/* Question - 4 */
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false

function lessThan100(num1, num2) {
  return (num1 + num2) < 100;
}
console.log(lessThan100(50, 50)); // Output: true
console.log(lessThan100(75, 30)); // Output: false
console.log(lessThan100(1, 98)); // Output: true



/* Question - 5 */
// Create a function that takes a number as an argument. Add up all the numbers from 1 to
// the number you passed to the function. For example, if the input is 4 then your function
// should return 10 because 1 + 2 + 3 + 4 = 10

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUp(5)); // Output: 15
console.log(addUp(7)); // Output: 28
console.log(addUp(100)); // Output: 5050


/* Question - 6 */
// Create a function that determines whether a number is Oddish or Evenish. A number is
// Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its
// digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 =
// 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

function oddishOrEvenish(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum % 2 === 0 ? "Evenish" : "Oddish";
}
console.log(oddishOrEvenish(123)); // Output: "Oddish"
console.log(oddishOrEvenish(246)); // Output: "Evenish"
console.log(oddishOrEvenish(12345)); // Output: "Oddish"


/* Question - 7 */
// Create a function that returns true if there's at least one prime number in the given
// range (n1 to n2 (inclusive)), false otherwise.

function shiftToLeft(a, b) {
  return a * Math.pow(2, b);
  }
  
  console.log(shiftToLeft(2, 4)); // Output: 32
  console.log(shiftToLeft(7, 3)); // Output: 56
  console.log(shiftToLeft(-12, 2)); // Output: -48
  console.log(shiftToLeft(-3, 5)); // Output: -96
  console.log(shiftToLeft(9, 4)); // Output: 144
  console.log(shiftToLeft(20, 5)); // Output: 640


/* Question - 8 */
// Write a function that mimics (withoutthe use of <<)the left shift operator and returns
// the resultfrom the two given integers.

// Create a function that returns a base-2 (binary) representation of a base-10 (decimal)
// string number. To convertis simple: ((2) means base-2 and (10) means base-10)
// 010101001(2) = 1 + 8 + 32 + 128.
// Going from rightto left,the value ofthe most right bitis 1, now from that every bitto the
// left will be x2. The values of an 8 bit binary number are (256, 128, 64, 32, 16, 8, 4, 2, 1).

function binary(decimal) {
  if (decimal === 0) {
    return "0";
  }
  let binary = "";
  let value = 256;
  while (value >= 1) {
    if (decimal >= value) {
      binary += "1";
      decimal -= value;
    } else {
      binary += "0";
    }
    value /= 2;
  }
  return binary;
}

console.log(binary(16)); // Output: "10000"
console.log(binary(27)); // Output: "11011"
console.log(binary(128)); // Output: "10000000"
