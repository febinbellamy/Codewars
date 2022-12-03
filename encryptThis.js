/* 
6 kyu

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

1) Your message is a string containing space separated words.

2) You need to encrypt each word in the message using the following rules:
- The first letter must be converted to its ASCII code.
- The second letter must be switched with the last letter

3) Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function (text) {
  const arrayOfWords = text.split(" ");
  const finalArr = [];

  for (let i = 0; i < arrayOfWords.length; i++) {
    let currentWord = arrayOfWords[i];
    let ASCII = currentWord.charCodeAt(0);
    let charsOfCurrentWord = currentWord.split("");
    let letters = charsOfCurrentWord.filter((char) => /^[a-zA-Z]+$/.test(char));

    if (letters.length >= 2) {
      let secondLetter = letters[1];
      let finalLetter = letters[letters.length - 1];

      let indexOfSecondLetter = 1;
      let indexOfFinalLetter = charsOfCurrentWord.length - 1;
      charsOfCurrentWord[indexOfSecondLetter] = finalLetter;
      charsOfCurrentWord[indexOfFinalLetter] = secondLetter;
    }

    if (arrayOfWords.length === 1 && charsOfCurrentWord.length === 1)
      return String(ASCII);

    charsOfCurrentWord[0] = ASCII;

    finalArr.push(charsOfCurrentWord.join(""));
  }
  return finalArr.join(" ");
};
