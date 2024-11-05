/* 
7 kyu

Compare two strings by comparing the sum of their values (ASCII character code).
- For comparing treat all letters as UpperCase
- null/NULL/Nil/None should be treated as empty strings
- If the string contains other characters than letters, treat the whole string as it would be empty

Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

function compare(s1, s2) {
  function calculateSumOfChars(str) {
    let sumOfStr = 0;
    if (str === null) {
      return 0;
    }
    for (let i = 0; i < str.length; i++) {
      let currentChar = str[i].toUpperCase();
      if (/[^A-Z]/.test(currentChar)) {
        return 0;
      }
      sumOfStr += currentChar.charCodeAt(0);
    }
    return sumOfStr;
  }
  return calculateSumOfChars(s1) === calculateSumOfChars(s2);
}
