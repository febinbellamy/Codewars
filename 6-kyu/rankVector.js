/* 
6 kyu

Given an array (or list) of scores, return the array of ranks for each value in the array. The largest value has rank 1, the second largest value has rank 2, and so on. Ties should be handled by assigning the same rank to all tied values. For example:

ranks([9,3,6,10]) = [2,4,3,1]
and
ranks([3,3,3,3,3,5,1]) = [2,2,2,2,2,1,7]

because there is one 1st place value, a five-way tie for 2nd place, and one in 7th place.
*/

function ranks(a) {
  if (a.length === 0) return a;

  const sortedArr = [...a].sort((b, a) => a - b);
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
  for (let j = 0; j < a.length; j++) {
    let currentElem = a[j];
    let indexOfElem = sortedArr.indexOf(currentElem);
    finalArr.push(ranks[indexOfElem]);
  }
  return finalArr;
}
