/* 
8 kyu

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

function take(arr, n) {
  // Your code here
  return arr.filter((num, index) => index + 1 <= n);
}
