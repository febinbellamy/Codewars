/* 
7 kyu

In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];

getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]2
*/

function getLargerNumbers(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    let currentElemA = a[i];
    let currentElemB = b[i];
    let largerNum = currentElemA >= currentElemB ? currentElemA : currentElemB;
    result.push(largerNum);
  }
  return result;
}
