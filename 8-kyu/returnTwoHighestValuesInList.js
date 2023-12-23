/* 
8 kyu

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/

function twoHighest(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr[0]];
  const uniques = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (!uniques[currentNum]) {
      uniques[currentNum] = currentNum;
    }
  }
  return Object.values(uniques)
    .sort((a, b) => b - a)
    .slice(0, 2);
}
