/* 
6 kyu

Given a string, remove any characters that are unique from the string.

Example:
input: "abccdefee"
output: "cceee"
*/

function onlyDuplicates(str) {
  // your code here
  const freqCounter = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in freqCounter) {
      freqCounter[str[i]]++;
    } else {
      freqCounter[str[i]] = 1;
    }
  }
  let result = "";
  for (let j = 0; j < str.length; j++) {
    if (freqCounter[str[j]] > 1) {
      result += str[j];
    }
  }
  return result;
}
