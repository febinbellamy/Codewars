/* 
7 kyu

Given an array of integers.

Return a number that is the sum of
- The product of all the non-negative numbers
- The sum of all the negative numbers

Edge cases
- If there are no non-negative numbers, assume the product of them to be 1.
- Similarly, if there are no negative numbers, assume the sum of them to be 0.
- If the array is null, result should be 0.

For example:
mathEngine([1, 2, 3, -4, -5]) // should return -3
*/

function mathEngine(arr) {
  // Your code here
  if (!arr) return 0;
  let productOfNonNegativeNums = 1;
  let sumOfNegativeNums = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum < 0) {
      sumOfNegativeNums += currentNum;
    } else if (currentNum >= 0) {
      productOfNonNegativeNums *= currentNum;
    }
  }
  return productOfNonNegativeNums + sumOfNegativeNums;
}
