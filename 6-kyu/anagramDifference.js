/* 
6 kyu

Given two words, how many letters do you have to remove from them to make them anagrams?

Example
- First word : c od e w ar s (4 letters removed)
- Second word : ha c k er r a nk (6 letters removed)
- Result : 10

Hints
- A word is an anagram of another word if they have the same letters (usually in a different order).
- Do not worry about case. All inputs will be lowercase.
- When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference
*/

function anagramDifference(w1, w2) {
  const frequencyObjW1 = {};
  for (let i = 0; i < w1.length; i++) {
    let currentLetter = w1[i];
    if (frequencyObjW1[currentLetter]) frequencyObjW1[currentLetter]++;
    else frequencyObjW1[currentLetter] = 1;
  }

  const frequencyObjW2 = {};
  for (let j = 0; j < w2.length; j++) {
    let currentLetter = w2[j];
    if (frequencyObjW2[currentLetter]) frequencyObjW2[currentLetter]++;
    else frequencyObjW2[currentLetter] = 1;
  }

  let numOfLettersToRemove = 0;

  for (let key in frequencyObjW1) {
    if (frequencyObjW2[key]) {
      if (frequencyObjW1[key] > frequencyObjW2[key]) {
        let difference = frequencyObjW1[key] - frequencyObjW2[key];
        numOfLettersToRemove += difference;
      }
    } else {
      numOfLettersToRemove += frequencyObjW1[key];
    }
  }

  for (let key in frequencyObjW2) {
    if (frequencyObjW1[key]) {
      if (frequencyObjW2[key] > frequencyObjW1[key]) {
        let difference = frequencyObjW2[key] - frequencyObjW1[key];
        numOfLettersToRemove += difference;
      }
    } else {
      numOfLettersToRemove += frequencyObjW2[key];
    }
  }
  return numOfLettersToRemove;
}
