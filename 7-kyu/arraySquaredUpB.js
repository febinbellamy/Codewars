/* 
7 kyu

This is a question from codingbat

Given an integer n greater than or equal to 0, create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
n<=1000.
*/

function squareUp(n) {
  const result = [];
  const firstNum = [];
  for (let i = 0; i < n; i++) {
    i === n - 1 ? firstNum.push(1) : firstNum.push(0);
  }
  result.push(...firstNum);
  let index = firstNum.length - 1;
  let num = 2;
  while (index >= 0) {
    if (firstNum[index] === 0) {
      firstNum[index] = num;
      result.push(...firstNum);
      num++;
    }
    index--;
  }
  return result;
}
