/* 
7 kyu

Given a positive integer N, return the largest integer k such that 3^k < N.

For example,
largest_power(3) == 0
largest_power(4) == 1

You may assume that the input to your function is always a positive integer.
*/

function largestPower(n) {
  if (n === 1) return -1;

  let currentPower = 0;
  let currentNum = 3 ** currentPower;

  while (currentNum < n) {
    if (currentNum * 3 >= n) return currentPower;
    currentNum *= 3;
    currentPower++;
  }
}
