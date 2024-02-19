/* 
6 kyu

A string is said to be beautiful if "b" occurs in it no more times than "a"; "c" occurs in it no more times than "b"; etc.

Given a string s, check whether it is beautiful.

Example
For s = "bbbaacdafe", the output should be true;
a   b   c   d   e   f   g ...  z
|   |   |   |   |   |   |      |
3 ≥ 3 > 1 ≥ 1 ≥ 1 ≥ 1 > 0 ... ≥0
It's so beautiful ;-)

For s = "aabbb", the output should be false;
a   b   c   d ...  z
|   |   |   |      |
2 < 3 > 0 ≥ 0 ... ≥0
It's not beautiful ;-)

For s = "bbc", the output should be false.
a   b   c   d ...  z
|   |   |   |      |
0 < 2 > 1 > 0 ... ≥0
It's not beautiful ;-)

Input/Output
[input] string s A string of lowercase letters. Constraints: 3 ≤ inputString.length ≤ 50.
[output] a boolean value
*/

function isBeautifulString(s) {
  //coding and coding..
  const freqCounter = {};
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (freqCounter[currentChar]) {
      freqCounter[currentChar]++;
    } else {
      freqCounter[currentChar] = 1;
    }
  }
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let key in freqCounter) {
    let value = freqCounter[key];
    if (key === "a") continue;
    let priorLetter = alphabet[alphabet.indexOf(key) - 1];
    if (priorLetter in freqCounter) {
      if (value > freqCounter[priorLetter]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
