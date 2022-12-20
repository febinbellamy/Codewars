/* 
7 kyu

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
  // Go for it
  const arrOfWords = str.split(" ");

  for (let i = 0; i < arrOfWords.length; i++) {
    let currentWord = arrOfWords[i];

    let reversedWord = currentWord.split("").reverse().join("");
    arrOfWords[i] = reversedWord;
  }
  return arrOfWords.join(" ");
}
