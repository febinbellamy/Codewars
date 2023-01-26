/* 
8 kyu

Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
  // your code here
  return x.toLowerCase().split("").reverse().join("") === x.toLowerCase();
}
