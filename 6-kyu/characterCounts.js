/* 
6 kyu

The object is to count the number of occurances of a specified character (or set of characters) in a string.

Instructions
Complete the placeholder function characterCount.
- it should return the number of times a single character appears in the string, or
- if multiple characters are specified (either by providing an array or string of length 2 or more), it should return an array of character counts
- see the unit tests provided for a more comprehensive definition

NOTE: The tests assume that if no arguments are provided to the function (i.e. ''.characterCount()), then the result is undefined.
*/

/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */
String.prototype.characterCount = function (charsToCount) {
  // your solution

  if (!this || !charsToCount) return undefined;

  const freqCounter = {};
  for (let i = 0; i < this.length; i++) {
    let currentChar = this[i];
    if (currentChar in freqCounter) {
      freqCounter[currentChar]++;
    } else {
      freqCounter[currentChar] = 1;
    }
  }
  const result = [];
  for (let j = 0; j < charsToCount.length; j++) {
    if (!freqCounter[charsToCount[j]]) {
      result.push(0);
    } else {
      result.push(freqCounter[charsToCount[j]]);
    }
  }
  if (result.length === 1) return result[0];
  return result;
};
