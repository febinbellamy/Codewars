/* 
6 kyu

Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
    - the array can't be empty
    - only non-negative, single digit integers are allowed

Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays:
[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays
[1, -9] is invalid because -9 is not a non-negative integer
[1, 2, 33] is invalid because 33 is not a single-digit integer

*/

function upArray(arr) {
  if (arr.length === 0) return null;
  let doubleDigits = arr.filter((num) => String(num).length > 1);
  if (doubleDigits.length > 0) return null;

  const negVals = arr.filter((num) => num < 0);
  if (negVals.length > 0) return null;

  let num = BigInt(arr.join(""));
  const newNum = (num + BigInt(1)).toString();

  if (arr.length > newNum.length) {
    let concatNums = 0 + newNum;
    return concatNums.split("").map((num) => +num);
  } else {
    let finalNum = newNum.split("").map((num) => +num);
    return finalNum;
  }
}
