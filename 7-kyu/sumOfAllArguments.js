/* 
7 kyu

Write a function that finds the sum of all its arguments.

eg:
sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
*/

function sum(...args) {
  // return the sum of all arguments given.
  return args.reduce((a, c) => a + c, 0);
}
