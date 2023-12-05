/* 
7 kyu

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

function capitalize(s) {
  let oddCapitalizedLetters = "";
  let evenCapitalizedLetters = "";

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (i % 2 === 0) {
      evenCapitalizedLetters += currentChar.toUpperCase();
      oddCapitalizedLetters += currentChar;
    } else if (i % 2 !== 0) {
      evenCapitalizedLetters += currentChar;
      oddCapitalizedLetters += currentChar.toUpperCase();
    }
  }
  return [evenCapitalizedLetters, oddCapitalizedLetters];
}
