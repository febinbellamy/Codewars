/* 
7 kyu

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
