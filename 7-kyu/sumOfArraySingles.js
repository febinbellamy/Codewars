/* 
7 kyu

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!
*/

function repeats(arr) {
  //..
  const frequencyObj = {};
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum in frequencyObj) {
      frequencyObj[currentNum]++;
    } else {
      frequencyObj[currentNum] = 1;
    }
  }

  let sum = 0;
  for (let key in frequencyObj) {
    let value = frequencyObj[key];
    if (value === 1) {
      sum += Number(key);
    }
  }
  return sum;
}
