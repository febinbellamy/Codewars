/* 
6 kyu

In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.

More examples in test cases.

Good luck!
*/

function solve(arr) {
  //..

  const arrOfObjs = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let filteredArr = arr.filter((num) => num === currentNum);
    arrOfObjs.push({ num: currentNum, frequency: filteredArr.length });
  }

  return arrOfObjs
    .sort((a, b) => {
      if (a.frequency > b.frequency) return -1;
      if (a.frequency < b.frequency) return 1;
      if (a.num < b.num) return -1;
      if (a.num > b.num) return 1;
    })
    .map((obj) => obj.num);
}
