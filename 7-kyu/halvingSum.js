/* 
7 kyu

Given a positive integer n, calculate the following sum:
n + n/2 + n/4 + n/8 + ...

All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

function halvingSum(n) {
  let sum = n;
  let num = n;
  let divisor = 2;

  while (num !== 1) {
    num = Math.floor(n / divisor);
    sum += num;
    divisor *= 2;
  }
  return sum;
}
