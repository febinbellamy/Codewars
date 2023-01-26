/* 
7 kyu

Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)
*/

function multi(arr) {
  return arr.reduce((a, c) => a * c, 1);
}
function add(arr) {
  return arr.reduce((a, c) => a + c, 0);
}
function reverse(str) {
  return str.split("").reverse().join("");
}
