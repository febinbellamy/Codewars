/* 
7 kyu

Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

catchSignChange(arr) == 2;
*/

const catchSignChange = (arr) => {
  let countSignChanges = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let nextNum = arr[i + 1];

    if ((currentNum >= 0 && nextNum < 0) || (currentNum < 0 && nextNum >= 0)) {
      countSignChanges++;
    }
  }
  return countSignChanges;
};
