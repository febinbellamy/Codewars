/* 
5 kyu

Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240
The input string always has more than five digits.

Adapted from Project Euler.
*/

function greatestProduct(input) {
  const inputArr = String(input)
    .split("")
    .map((str) => +str);
  const arrayOfProducts = [];

  for (let i = 0; i < inputArr.length - 4; i++) {
    let fiveConsecutiveDigits = inputArr.slice(i, i + 5);
    let product = fiveConsecutiveDigits.reduce((a, c) => a * c);
    arrayOfProducts.push(product);
  }
  return Math.max(...arrayOfProducts);
}
