/* 

7 kyu

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

*/

function factorial(n) {
  // Calculate the factorial here

  // edge cases:
  if (12 < n || n < 0) {
    throw new RangeError("The argument must not be below 0 or above 12.");
  }
  if (n === 0) return 1;
  if (n === 1 || n === 2) return n;

  // recursive solution
  let result = n * factorial(n - 1);
  return result;
}
