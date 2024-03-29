/* 
6 kyu

Ore Numbers (also called Harmonic Divisor Numbers) are numbers for which the harmonic mean of all their divisors (including the number itself) equals an integer.

For example, 6 is an Ore Number because its harmonic mean is exactly 2:

H(6) = 4 / (1/1 + 1/2 + 1/3 + 1/6) = 2

Your task is to complete the function returns true if the given number is an Ore Number and false otherwise.

You can assume all inputs will be valid positive integers.

Hint: The harmonic mean is the total number of divisors divided by the sum of their reciprocals.
*/

function isOre(n) {
  // ...

  let currentNum = 1;
  let sum = 0;
  let countDivisors = 0;

  while (currentNum <= n) {
    if (n % currentNum === 0) {
      sum += 1 / currentNum;
      countDivisors++;
    }
    currentNum++;
  }

  let mean = countDivisors / sum;
  let strMean = mean.toString();
  if (strMean.includes(".00")) mean = parseInt(mean);

  return mean === parseInt(mean) ? true : false;
}
