/* 
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't: 
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

*/

function narcissistic(value) {
  // Code me to return true or false

  let numAsAString = String(value);
  let length = numAsAString.length;

  let sum = 0;

  for (let i = 0; i < numAsAString.length; i++) {
    let currentNum = Number(numAsAString[i]);
    sum += currentNum ** length;
  }

  return sum === value ? true : false;

  //Psuedo code:
  // turn the value into a string.
  // Grab the length of string
  // Multiply each character of the string by the length, then add all of the nums up.
  // if the sum is equal to original value passed in, return true. Else, return false.
}
