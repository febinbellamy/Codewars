/* 
6 kyu

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

- returns true  / True if every element in an array is an integer or a float with no decimals.
- returns true  / True if array is empty.
- returns false / False for every other input.
*/

function isIntArray(arr) {
  if (arr) {
    let checkForNaNAndNull = arr.filter(
      (element) => isNaN(element) || element === null
    );
    if (checkForNaNAndNull.length > 0) return false;
    let checkForIntegers = arr.every((num) => num === parseInt(num));
    return checkForIntegers;
  } else {
    return false;
  }
}
