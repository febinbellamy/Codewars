/* 
7 kyu

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"
*/

var isAnagram = function (test, original) {
  if (test.length !== original.length) return false;

  const freqObjTest = {};
  const freqObjOriginal = {};

  for (let i = 0; i < test.length; i++) {
    let currentCharTest = test[i].toLowerCase();
    let currentCharOriginal = original[i].toLowerCase();

    if (freqObjTest[currentCharTest]) {
      freqObjTest[currentCharTest]++;
    } else if (!freqObjTest[currentCharTest]) {
      freqObjTest[currentCharTest] = 1;
    }
    if (freqObjOriginal[currentCharOriginal]) {
      freqObjOriginal[currentCharOriginal]++;
    } else if (!freqObjOriginal[currentCharOriginal]) {
      freqObjOriginal[currentCharOriginal] = 1;
    }
  }
  for (let key in freqObjTest) {
    if (!(freqObjOriginal[key] === freqObjTest[key])) {
      return false;
    }
  }
  return true;
};
