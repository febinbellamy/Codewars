/* 
7 kyu

The Collatz Conjecture states that for any positive natural number n, this process:
- if n is even, divide it by 2
- if n is odd, multiply it by 3 and add 1
- repeat
will eventually reach n = 1.

For example, if n = 20, the resulting sequence will be:

[ 20, 10, 5, 16, 8, 4, 2, 1 ]
Write a program that will output the length of the Collatz Conjecture for any given n.
In the example above, the output would be 8.

For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture
*/

function collatz(n) {
  //your code here

  let result = n;
  let counter = 1;

  while (result !== 1) {
    if (result % 2 === 0) {
      result = result / 2;
    } else {
      result = result * 3 + 1;
    }
    counter++;
  }
  return counter;
}
