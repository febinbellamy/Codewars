/* 
6 kyu

I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example: nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/

function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence

  const arrOfNums = [];
  arrOfNums.push(0, 1);

  if (n === 1) return arrOfNums[0];
  if (n === 2) return arrOfNums[1];

  let counter = 2;
  let newNum;

  while (counter < n) {
    newNum = arrOfNums[arrOfNums.length - 1] + arrOfNums[arrOfNums.length - 2];
    arrOfNums.push(newNum);
    counter++;
  }
  return arrOfNums[arrOfNums.length - 1];
}
