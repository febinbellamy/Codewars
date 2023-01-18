/* 
7 kyu

This Kata is intended as a small challenge for my students

Create a function, called compute, that accepts an integer argument, N, and returns the value of the following expression, where N is a odd positive integer given by the user

Expression : 1 +....+ 1/(N)^2

For example, when N = 9, compute() should evaluate the following: 1 + 1/(3)^2 + 1/(5)^2 + 1/(7)^2 + 1/(9)^2 == ~1.1838649533887629

Note: User input of an even number OR a number less than 3 should return 0.

compute(5); // => 1.1511111111111112
compute(9); // => 1.1838649533887629
compute(-1); // => 0
compute(8); // => 0
*/

function compute(n) {
  //code here
  if (n < 3 || n % 2 === 0) return 0;
  let sum = 1;
  let counter = 3;
  while (counter <= n) {
    sum += 1 / counter ** 2;
    counter += 2;
  }
  return sum;
}
