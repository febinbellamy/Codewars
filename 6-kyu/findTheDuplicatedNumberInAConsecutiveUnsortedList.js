/* 
6 kyu

Spin-off of this kata (https://www.codewars.com/kata/558dd9a1b3f79dc88e000001), here you will have to figure out an efficient strategy to solve the problem of finding the sole duplicate number among an unsorted array/list of numbers starting from 1 up to n.

Hints: a solution in linear time can be found; using the most intuitive ones to search for duplicates that can run in O(n²) time won't work.
*/

var findDup = function (arr) {
  //your code here

  const numsCounter = {};

  for (let i = 0; i < arr.length; i++) {
    let currentElem = arr[i];
    if (numsCounter[currentElem]) {
      numsCounter[currentElem]++;
    } else {
      numsCounter[currentElem] = 1;
    }
  }

  for (let key in numsCounter) {
    if (numsCounter[key] > 1) return +key;
  }
};
