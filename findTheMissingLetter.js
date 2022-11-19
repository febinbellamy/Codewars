/* 
6 kyu

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)
*/

function findMissingLetter(array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < array.length; i++) {
    let currentElem = array[i];
    let indexOfCurrentElem = alphabet.indexOf(currentElem);
    if (
      array[i + 1] &&
      alphabet.indexOf(array[i + 1]) !== indexOfCurrentElem + 1
    ) {
      return alphabet[indexOfCurrentElem + 1];
    }
  }
}
