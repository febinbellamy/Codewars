/* 
6 kyu

The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

- A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
- The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
*/

function abbreviate(string) {
  // ...

  let finalStr = "";
  let index = 0;
  let tempWord = "";

  while (index < string.length) {
    let currentChar = string[index];
    if (/[^a-zA-Z]/.test(currentChar)) {
      if (tempWord.length >= 4) {
        let finalWord = `${tempWord[0]}${tempWord.length - 2}${
          tempWord[tempWord.length - 1]
        }`;
        finalStr += finalWord;
      } else if (tempWord.length >= 1) {
        finalStr += tempWord;
      }
      tempWord = "";
      finalStr += currentChar;
    } else {
      tempWord += currentChar;
    }

    if (index === string.length - 1) {
      if (tempWord.length >= 4) {
        let finalWord = `${tempWord[0]}${tempWord.length - 2}${
          tempWord[tempWord.length - 1]
        }`;
        finalStr += finalWord;
      } else if (tempWord.length >= 1) {
        finalStr += tempWord;
      }
    }
    index++;
  }
  return finalStr;
}
