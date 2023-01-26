/* 
6 kyu

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  // string of words ("a fat cat ran across the road")

  let str = "abcdefghijklmnopqrstuvwxyz";
  let scores = {};
  let sum = 0;
  let currentWord = "";

  for (let j = 0; j < x.length; j++) {
    let currentChar = x[j];

    if (str.includes(currentChar)) {
      let scoreOfChar = str.indexOf(currentChar) + 1;
      sum += scoreOfChar;
      currentWord += currentChar;
    }

    if (currentChar === " " || j === x.length - 1) {
      scores[currentWord] = sum;
      sum = 0;
      currentWord = "";
    }
  }
  const sortedObjectValues = Object.values(scores).sort((a, b) => b - a);
  const maxValue = sortedObjectValues[0];
  const foundKey = Object.keys(scores).find((key) => scores[key] === maxValue);
  return foundKey;
}
