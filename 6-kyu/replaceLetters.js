/* 
6 kyu

In input string word(1 word):
- replace the vowel with the nearest left consonant.
- replace the consonant with the nearest right vowel.

P.S. To complete this task imagine the alphabet is a circle (connect the first and last element of the array in the mind). For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

For example:
'codewars' => 'enedazuu'
'cat' => 'ezu'
'abcdtuvwxyz' => 'zeeeutaaaaa'

It is preloaded:
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
const vowels = ['a','e','i','o','u'];

P.S. You work with lowercase letters only.
*/

function replaceLetters(word) {
  // good luck

  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const consonants = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const vowels = ["a", "e", "i", "o", "u"];

  let newStr = "";
  let index = 0;

  while (index < word.length) {
    let currentLetter = word[index];
    let indexOfLetter = alphabet.indexOf(currentLetter);

    if (consonants.includes(currentLetter)) {
      // replace the consonant with the nearest right vowel.

      while (indexOfLetter < alphabet.length) {
        if (indexOfLetter === alphabet.length - 1) {
          indexOfLetter = 0;
        }
        let currentChar = alphabet[indexOfLetter];
        if (vowels.includes(currentChar)) {
          newStr += currentChar;
          break;
        }
        indexOfLetter++;
      }
    } else if (vowels.includes(currentLetter)) {
      while (indexOfLetter >= 0) {
        if (indexOfLetter === 0) {
          indexOfLetter = alphabet.length - 1;
        }
        let currentChar = alphabet[indexOfLetter];
        if (consonants.includes(currentChar)) {
          newStr += currentChar;
          break;
        }
        indexOfLetter--;
      }
    }
    index++;
  }

  return newStr;
}
