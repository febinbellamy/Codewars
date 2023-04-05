/* 
7 kyu

This cipher doesn't exist, I just created it by myself. It can't actually be used, as there isn't a way to decode it. It's a hash. Multiple sentences may also have the same result.

How this cipher works
It looks at the letter, and sees it's index in the alphabet, the alphabet being a-z, if you didn't know. If it is odd, it is replaced with 1, if it's even, its replaced with 0. Note that the index should start from 0. Also, if the character isn't a letter, it remains the same.

Example
encode("Hello World!"); // => "10110 00111!"

This is because H's index is 7, which is odd, so it is replaced by 1, and so on.

Have fun (en)coding!
*/

function encode(plaintext) {
  //finish the function

  let newStr = "";

  for (let i = 0; i < plaintext.length; i++) {
    let currentChar = plaintext[i];
    if (/[a-zA-Z]/.test(currentChar)) {
      let indexOfLetter = currentChar.toLowerCase().charCodeAt(0) - 97;
      newStr += indexOfLetter % 2 === 0 ? "0" : "1";
    } else {
      newStr += currentChar;
    }
  }

  return newStr;
}
