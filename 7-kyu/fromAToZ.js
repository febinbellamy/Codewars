/* 
7 kyu

Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
Note that if the range is given in capital letters, return the string in capitals also!

Examples
"a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
"h-o" ➞ "hijklmno"
"Q-Z" ➞ "QRSTUVWXYZ"
"J-J" ➞ "J"

Notes
– A hyphen will separate the two letters in the string.
– You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second letter will not be before the first alphabetically).
*/

function gimmeTheLetters(sp) {
  const startingLetter = sp[0];
  const endingLetter = sp[2];
  let finalStr = "";
  let currentASCII = startingLetter.charCodeAt(0);
  while (currentASCII <= endingLetter.charCodeAt(0)) {
    finalStr += String.fromCharCode(currentASCII);
    currentASCII++;
  }
  return finalStr;
}
