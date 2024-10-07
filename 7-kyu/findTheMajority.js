/* 
7 kyu

Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

Example
majority(["A", "B", "A"]) returns "A"
majority(["A", "B", "B", "A"]) returns null
*/

function majority(arr) {
  const freqCounter = {};
  for (let i = 0; i < arr.length; i++) {
    let currentElem = arr[i];
    if (currentElem in freqCounter) {
      freqCounter[currentElem]++;
    } else {
      freqCounter[currentElem] = 1;
    }
  }

  // edge case: check if there is no clear winner
  const values = Object.values(freqCounter).sort((a, b) => b - a);
  if (values[0] === values[1]) return null;

  let max = -Infinity;
  let keyWithMaxVal;
  for (let key in freqCounter) {
    let value = freqCounter[key];
    if (value > max) {
      max = value;
      keyWithMaxVal = key;
    }
  }
  return keyWithMaxVal;
}
