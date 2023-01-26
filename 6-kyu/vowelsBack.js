/* 
6 kyu

You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

Exceptions:
If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters.
*/

function vowelBack(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const vowels = "aeiou";

  let newStr = "";
  let mainIndex = 0;

  while (mainIndex < s.length) {
    let currentChar = s[mainIndex];

    if (currentChar === "c" || currentChar === "o") {
      let indexOfNewChar = alphabet.indexOf(currentChar) - 1;
      newStr += alphabet[indexOfNewChar];
    } else if (currentChar === "d" || currentChar === "e") {
      newStr += "a";
    } else if (vowels.indexOf(currentChar) < 0) {
      let indexOfCurrentChar = alphabet.indexOf(currentChar);
      let counter = 0;
      let index = indexOfCurrentChar;

      while (counter < 9) {
        index++;
        if (index === alphabet.length) {
          index = 0;
        }
        counter++;
      }
      let newLetter = alphabet[index];

      if (
        newLetter === "c" ||
        newLetter === "o" ||
        newLetter === "d" ||
        newLetter === "e"
      ) {
        newStr += currentChar;
      } else {
        newStr += newLetter;
      }
    } else if (vowels.indexOf(currentChar) >= 0) {
      let indexOfCurrentChar = alphabet.indexOf(currentChar);
      let counter = 0;
      let index = indexOfCurrentChar;

      while (counter < 5) {
        index--;
        if (index === -1) {
          index = 25;
        }
        counter++;
      }
      let newLetter = alphabet[index];

      if (
        newLetter === "c" ||
        newLetter === "o" ||
        newLetter === "d" ||
        newLetter === "e"
      ) {
        newStr += currentChar;
      } else {
        newStr += newLetter;
      }
    }
    mainIndex++;
  }
  return newStr;
}
