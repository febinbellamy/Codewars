/* 
6 kyu

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

*/

function reverse(str) {
  const arrayOfWords = str.trim().split(" ");
  for (let i = 0; i < arrayOfWords.length; i++) {
    let currentWord = arrayOfWords[i];

    if (i % 2 !== 0) {
      const reversedStr = currentWord.split("").reverse().join("");
      arrayOfWords[i] = reversedStr;
    }
  }
  return arrayOfWords.join(" ");
}
