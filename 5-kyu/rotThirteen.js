/* 
5 kyu

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let finalStr = "";

  for (let i = 0; i < message.length; i++) {
    let currentLetter = message[i];

    if (!/^[a-zA-Z]+$/.test(currentLetter)) {
      finalStr += currentLetter;
      continue;
    }

    let indexOfCurrentLetter = alphabet.indexOf(currentLetter.toLowerCase());
    console.log("indexOfCurrentLetter", indexOfCurrentLetter);

    let counter = 0;
    let index = indexOfCurrentLetter;

    while (counter !== 14) {
      index++;
      counter++;
      if (index >= 26) index = 0;
    }

    if (!alphabet[index - 1]) {
      if (currentLetter.toUpperCase() === currentLetter) {
        finalStr += "Z";
      } else {
        finalStr += "z";
      }
      continue;
    }
    currentLetter === currentLetter.toUpperCase()
      ? (finalStr += alphabet[index - 1].toUpperCase())
      : (finalStr += alphabet[index - 1]);
  }
  return finalStr;
}
