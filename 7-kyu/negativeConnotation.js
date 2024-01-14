/* 
7 kyu

You will be given a string with sets of characters, (i.e. words), seperated by between one and four spaces (inclusive).

Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

"A big brown fox caught a bad rabbit" => True/true
"Xylophones can obtain Xenon." => False/false
*/

function connotation(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const wordsNoSpaces = str.split(" ");
  let positiveWordsCounter = 0;
  let negativeWordsCounter = 0;
  for (let i = 0; i < wordsNoSpaces.length; i++) {
    if (wordsNoSpaces[i] === "") continue;
    let currentFirstLetter = wordsNoSpaces[i][0].toLowerCase();
    let indexOfChar = alphabet.indexOf(currentFirstLetter);
    if (indexOfChar <= 12 && indexOfChar !== -1) {
      positiveWordsCounter++;
    } else if (indexOfChar > 12) {
      negativeWordsCounter++;
    }
  }
  return positiveWordsCounter >= negativeWordsCounter ? true : false;
}
