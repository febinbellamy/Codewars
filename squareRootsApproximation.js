/* 
7 kyu

Your job here is to implement a method, approx_root in Ruby/Python/Crystal and approxRoot in JavaScript/CoffeeScript, that takes one argument, n, and returns the approximate square root of that number, rounded to the nearest hundredth and computed in the following manner.

1) Start with n = 213 (as an example).
2) To approximate the square root of n, we will first find the greatest perfect square that is below or equal to n. (In this example, that would be 196, or 14 squared.) We will call the square root of this number (which means sqrt 196, or 14) base.
3) Then, we will take the lowest perfect square that is greater than or equal to n. (In this example, that would be 225, or 15 squared.)
4) Next, subtract 196 (greatest perfect square less than or equal to n) from n. (213 - 196 = 17) We will call this value diff_gn.
5) Find the difference between the lowest perfect square greater than or equal to n and the greatest perfect square less than or equal to n. (225 – 196 = 29) We will call this value diff_lg.
6) Your final answer is base + (diff_gn / diff_lg). In this example: 14 + (17 / 29) which is 14.59, rounded to the nearest hundredth.

Just to clarify, if the input is a perfect square itself, you should return the exact square of the input.

In case you are curious, the approximation (computed like above) for 213 rounded to four decimal places is 14.5862. The actual square root of 213 is 14.5945.

Inputs will always be positive whole numbers. If you are having trouble understanding it, let me know with a comment, or take a look at the second group of the example cases.

Some examples:
approx_root(400) #=> 20
approx_root(401) #=> 
  # smallest perfect square above 401 is 441 or 21 squared
  # greatest perfect square below 401 is 400 or 20 squared
  # difference between 441 and 400 is 41
  # difference between 401 and 400 is 1
  # answer is 20 + (1 / 41) which becomes 20.02, rounded to the nearest hundredth
  # final answer = 20.02.
  
approx_root(2) #=>
  # smallest perfect square above 2 is 4 or 2 squared
  # greatest perfect square below 2 is 1 or 1 squared
  # difference between 4 and 1 is 3
  # difference between 2 and 1 is 1
  # answer is 1 + (1 / 3), which becomes 1.33, rounded to the nearest hundredth
  # final answer = 1.33.

# Math.sqrt() isn't disabled.
*/

function approxRoot(n) {
  // if n is a perfect square, return the square
  if (Math.sqrt(n) === parseInt(Math.sqrt(n))) return Math.sqrt(n);

  // find the greatest perfect square below n
  let counter = n - 1;
  let greatestPerfectSquareBelowN;
  let base;

  while (!greatestPerfectSquareBelowN) {
    if (Math.sqrt(counter) === parseInt(Math.sqrt(counter))) {
      greatestPerfectSquareBelowN = counter;
      base = Math.sqrt(counter);
    }
    counter--;
  }

  // find the smallest perfect square above n
  let num = n + 1;
  let smallestPerfectSquareAboveN;

  while (!smallestPerfectSquareAboveN) {
    if (Math.sqrt(num) === parseInt(Math.sqrt(num))) {
      smallestPerfectSquareAboveN = num;
    }
    num++;
  }

  const differenceGN = n - greatestPerfectSquareBelowN;
  const differenceLG =
    smallestPerfectSquareAboveN - greatestPerfectSquareBelowN;
  const final = base + differenceGN / differenceLG;
  return +final.toFixed(2);
}
