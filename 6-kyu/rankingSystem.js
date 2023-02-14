/* 
6 kyu

You are given an array of unique numbers. The numbers represent points. The higher the number the higher the points. In the array [1,3,2] 3 is the highest point value so it gets 1st place. 2 is the second highest so it gets second place. 1 is the 3rd highest so it gets 3rd place.

Your task is to return an array giving each number its rank in the array.

input // [1,3,2]
output // [3,1,2]

rankings([1,2,3,4,5]) // [5,4,3,2,1]
rankings([3,4,1,2,5])//  [3,2,5,4,1]
rankings([10,20,40,50,30]) //  [5, 4, 2, 1, 3]
rankings([1, 10]) //   [2, 1]
rankings([22, 33, 18, 9, 110, 4, 1, 88, 6, 50]) // [5, 4, 6, 7, 1, 9, 10, 2, 8, 3]
*/

function rankings(arr) {
  if (arr.length === 0) return arr;

  const sortedArr = [...arr].sort((b, a) => a - b);
  const ranks = [];

  for (let i = 0; i < sortedArr.length; i++) {
    let currentNum = sortedArr[i];
    let prevNum = sortedArr[i - 1];

    if (i === 0) {
      ranks.push(i + 1);
      continue;
    }
    if (typeof prevNum !== "undefined" && prevNum === currentNum) {
      ranks.push(ranks[ranks.length - 1]);
    } else if (typeof prevNum !== "undefined" && prevNum !== currentNum) {
      ranks.push(i + 1);
    }
  }

  const finalArr = [];
  for (let j = 0; j < arr.length; j++) {
    let currentElem = arr[j];
    let indexOfElem = sortedArr.indexOf(currentElem);
    finalArr.push(ranks[indexOfElem]);
  }
  return finalArr;
}
