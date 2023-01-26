/* 
6 kyu 

Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

function permuteAPalindrome(input) {
  const inputArr = input.split("");
  const frequencyObj = {};

  // edge case
  if (inputArr.reverse().join("") === input) return true;

  for (let element of inputArr) {
    if (frequencyObj[element]) {
      frequencyObj[element]++;
    } else {
      frequencyObj[element] = 1;
    }
  }

  let oddFreq = 0;

  for (let key in frequencyObj) {
    if (frequencyObj[key] % 2 !== 0) {
      oddFreq++;
    }
  }

  return oddFreq >= 2 ? false : true;
}
