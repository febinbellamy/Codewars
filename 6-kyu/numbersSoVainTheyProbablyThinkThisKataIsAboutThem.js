/* 
6 kyu

Well, those numbers were right and we're going to feed their ego.

Write a function, isNarcissistic, that takes in any amount of numbers and returns true if all the numbers are narcissistic. Return false for invalid arguments (numbers passed in as strings are ok).

For more information about narcissistic numbers (and believe me, they love it when you read about them) follow this link: https://en.wikipedia.org/wiki/Narcissistic_number
*/

const checkIfValIsNarcissistic = (val) => {
  if (Number.isNaN(+val) || val === "") return false;
  // a number that is the sum of its own digits, with each digit being raised to the power of the number of digits.
  const digits = String(val).split("");
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let currentDigit = +digits[i];
    sum += currentDigit ** digits.length;
  }
  return +val === sum;
};

const isNarcissistic = (...args) => {
  return args.every((value) => checkIfValIsNarcissistic(value));
};
