/* 
6 kyu

You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

function averageString(str) {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const numsArr = str.split(" ");
  let sum = 0;

  for (let i = 0; i < numsArr.length; i++) {
    let currentNum = numsArr[i];
    if (typeof numbers[currentNum] !== "undefined") {
      sum += numbers[currentNum];
    } else {
      return "n/a";
    }
  }
  const average = Math.floor(sum / numsArr.length);
  return Object.keys(numbers).find((key) => numbers[key] === average);
}
