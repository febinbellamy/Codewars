/* 
7 kyu

Given an array of integers, and a target integer, return the largest integer from the array that is less than or equal to the target.

If there is no number that is less than or equal to the target number then return undefined.

The array of integers may be empty, but will always be an array.
*/

function priceIsRight(numbers, target) {
  const filteredNums = numbers.filter((num) => num <= target);
  if (!filteredNums) return undefined;
  filteredNums.sort((a, b) => b - a);
  return filteredNums[0];
}
