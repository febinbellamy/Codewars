/* 
8 kyu

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
  // your code here

  if (!input || input.length === 0) return [];

  let positiveCounter = 0;
  let sumOfNegativeNums = 0;

  for (let num of input) {
    if (num > 0) positiveCounter++;
    if (num < 0) sumOfNegativeNums += num;
  }
  return [positiveCounter, sumOfNegativeNums];
}
