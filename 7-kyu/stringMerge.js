/* 
7 kyu

Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"
*/

function stringMerge(string1, string2, letter) {
  // Add code here :)

  let indexOfLetterInString1 = string1.indexOf(letter);
  let indexOfLetterInString2 = string2.indexOf(letter);
  let firstPartOfString1 = string1.slice(0, indexOfLetterInString1);
  let secondPartOfString2 = string2.slice(indexOfLetterInString2 + 1);
  return `${firstPartOfString1}${letter}${secondPartOfString2}`;
}
