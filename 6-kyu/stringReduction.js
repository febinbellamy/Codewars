/* 
6 kyu

In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. That should get us close to the answer. I will leave the rest to you.

For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.

More examples in the test cases.

Good luck!
*/

function solve(a, b) {
  if (b.length > a.length) return 0;
  const freqObjA = {};
  const freqObjB = {};
  for (let i = 0; i < a.length; i++) {
    let currentChar = a[i];
    if (currentChar in freqObjA) {
      freqObjA[currentChar]++;
    } else {
      freqObjA[currentChar] = 1;
    }
  }
  for (let j = 0; j < b.length; j++) {
    let currentChar = b[j];
    if (currentChar in freqObjB) {
      freqObjB[currentChar]++;
    } else {
      freqObjB[currentChar] = 1;
    }
  }
  let numOfCharsToRemove = 0;
  for (let key in freqObjA) {
    let value = freqObjA[key];
    if (key in freqObjB) {
      if (value < freqObjB[key]) return 0;
      if (value > freqObjB[key]) {
        let difference = value - freqObjB[key];
        numOfCharsToRemove += difference;
      }
    } else {
      numOfCharsToRemove += value;
    }
  }
  return numOfCharsToRemove;
}
