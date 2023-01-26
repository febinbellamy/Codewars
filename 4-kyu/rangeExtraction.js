/* 
4 kyu

A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/

function solution(list) {
  console.log("list", list);

  let tempArr = [];
  let finalArr = [];

  for (let i = 0; i < list.length; i++) {
    let currentNum = list[i];
    let nextNum = list[i + 1];

    if (i === 0) {
      if (typeof nextNum !== "undefined" && currentNum === nextNum - 1) {
        tempArr.push(currentNum);
        console.log("tempArr", tempArr);
      } else {
        finalArr.push(currentNum);
      }
      continue;
    }

    if (tempArr[tempArr.length - 1] === currentNum - 1) {
      tempArr.push(currentNum);
      console.log("tempArr", tempArr);
    } else {
      if (tempArr.length >= 3) {
        console.log("tempArr >= 3", tempArr);
        let str = `${tempArr[0]}-${tempArr[tempArr.length - 1]}`;
        finalArr.push(str);
        tempArr = [];

        if (typeof nextNum !== "undefined" && currentNum === nextNum - 1) {
          tempArr.push(currentNum);
        } else {
          finalArr.push(currentNum);
        }
      } else if (tempArr.length < 3) {
        finalArr.push(...tempArr);
        tempArr = [];

        if (typeof nextNum !== "undefined" && currentNum === nextNum - 1) {
          tempArr.push(currentNum);
        } else {
          finalArr.push(currentNum);
        }
      }
    }

    if (i === list.length - 1) {
      if (tempArr.length >= 3) {
        console.log("tempArr >= 3", tempArr);
        let str = `${tempArr[0]}-${tempArr[tempArr.length - 1]}`;
        console.log("str", str);
        finalArr.push(str);
        tempArr = [];
      } else {
        finalArr.push(...tempArr);
      }
    }
  }
  return finalArr.join(",");
}
