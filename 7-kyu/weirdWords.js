/* 
7 kyu

Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

Notes:
- Spaces and special characters should remain the same.
- Capital letters should transfer in the same way but remain capitilized.

Examples
"Hello"               -->  "Ifmmp"
"What is your name?"  -->  "Xibu jt zpvs obnf?"
"zoo"                 -->  "app"
"zzZAaa"              -->  "aaABbb"
*/

function nextLetter(str) {
  // go for it
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (/[a-zA-Z]/.test(currentChar)) {
      if (currentChar.toUpperCase() === currentChar) {
        newStr +=
          currentChar === "Z"
            ? "A"
            : String.fromCharCode(currentChar.toUpperCase().charCodeAt(0) + 1);
      } else {
        newStr +=
          currentChar === "z"
            ? "a"
            : String.fromCharCode(currentChar.charCodeAt(0) + 1);
      }
    } else {
      newStr += currentChar;
    }
  }
  return newStr;
}
