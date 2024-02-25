/*
7 kyu

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
  let ascendingCount = 0;
  let descendingCount = 0;

  for (let i = 0; i < array.length - 1; i++) {
    let currentNum = array[i];
    let nextNum = array[i + 1];
    if (nextNum > currentNum) {
      ascendingCount++;
    } else if (nextNum < currentNum) {
      descendingCount++;
    }
  }

  if (ascendingCount > 0 && descendingCount === 0) {
    return "yes, ascending";
  } else if (descendingCount > 0 && ascendingCount === 0) {
    return "yes, descending";
  } else {
    return "no";
  }
}
