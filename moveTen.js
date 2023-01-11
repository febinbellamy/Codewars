/* 
7 kyu

Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

function moveTen(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    let indexOfCC = alphabet.indexOf(currentChar);

    if (indexOfCC <= 15) {
      newStr += alphabet[indexOfCC + 10];
    } else {
      let counter = 0;

      while (counter < 10) {
        indexOfCC++;
        if (indexOfCC > 25) {
          indexOfCC = 0;
        }
        counter++;
      }
      newStr += alphabet[indexOfCC];
    }
  }
  return newStr;
}
