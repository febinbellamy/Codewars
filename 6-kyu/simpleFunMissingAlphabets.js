/* 
6 kyu

Given string s, which contains only letters from a to z in lowercase.

A set of alphabet is given by abcdefghijklmnopqrstuvwxyz.

2 sets of alphabets mean 2 or more alphabets.

Your task is to find the missing letter(s). You may need to output them by the order a-z. It is possible that there is more than one missing letter from more than one set of alphabet.

If the string contains all of the letters in the alphabet, return an empty string ""

Example
For s='abcdefghijklmnopqrstuvwxy'
The result should be 'z'

For s='aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy'
The result should be 'zz'

For s='abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy'
The result should be 'ayzz'

For s='codewars'
The result should be 'bfghijklmnpqtuvxyz'

Input/Output
- [input] string s

Given string(s) contains one or more set of alphabets in lowercase.
- [output] a string

Find the letters contained in each alphabet but not in the string(s). Output them by the order a-z. If missing alphabet is repeated, please repeat them like "bbccdd", not "bcdbcd"
*/

function missingAlphabets(s) {
  //coding and coding..

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const frequencyObj = {};

  for (let i = 0; i < alphabet.length; i++) {
    let currentLetter = alphabet[i];
    let numberOfCurrentLetters = s
      .split("")
      .filter((char) => char === currentLetter).length;
    frequencyObj[currentLetter] = numberOfCurrentLetters;
  }

  const keys = Object.keys(frequencyObj);
  const values = Object.values(frequencyObj);
  const maxValue = Math.max(...values);
  let finalStr = "";
  let index = 0;

  while (index < keys.length) {
    let currentKey = keys[index];
    let currentValue = values[index];

    if (maxValue > currentValue) {
      let difference = maxValue - currentValue;
      let counter = 0;
      while (counter < difference) {
        finalStr += currentKey;
        counter++;
      }
    }
    index++;
  }
  return finalStr;
}
