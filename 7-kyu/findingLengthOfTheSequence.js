/* 
7 kyu

As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return 0.
*/

var lengthOfSequence = function (arr, n) {
  // TODO: Write some scripts here
  if (arr.length === 2) return 2;
  let numOfOccurences = arr.filter((num) => num === n).length;
  if (numOfOccurences !== 2) return 0;
  let beginningIndex = arr.indexOf(n);
  let endingIndex = arr.lastIndexOf(n);
  return endingIndex - beginningIndex + 1;
};
