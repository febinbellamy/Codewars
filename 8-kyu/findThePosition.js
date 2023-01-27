/* 
8 kyu

When provided with a letter, return its position in the alphabet.

Input :: "a"
Ouput :: "Position of alphabet: 1"
*/

function position(letter) {
  //Write your own Code!
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}
