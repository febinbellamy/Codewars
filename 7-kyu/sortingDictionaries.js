/* 
7 kyu

Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

The list must be sorted by the value and be sorted largest to smallest.

Examples
sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]
*/

function sortDict(dict) {
  // ...
  const keys = Object.keys(dict);
  const values = Object.values(dict);

  const finalArr = [];

  for (let i = 0; i < keys.length; i++) {
    if (!Number.isNaN(Number(keys[i]))) {
      keys[i] = Number(keys[i]);
    }

    if (!Number.isNaN(Number(values[i]))) {
      values[i] = Number(values[i]);
    }

    finalArr.push([keys[i], values[i]]);
  }

  finalArr.sort((a, b) => b[1] - a[1]);
  return finalArr;
}
