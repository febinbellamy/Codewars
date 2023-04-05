/* 
7 kyu

This cipher involves taking each character of a string and multiplying their char codes by 6.

For example, `Hello World!` would become `ưɞʈʈʚÀȊʚʬʈɘÆ`.

You must write two functions:
`encode` to encode a given string,
`decode` to decode a given string.
*/

function encode(str) {
  // Encode //

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let newCharCode = currentChar.charCodeAt(0) * 6;
    newStr += String.fromCharCode(newCharCode);
  }
  return newStr;
}

function decode(str) {
  // Decode //

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let newCharCode = currentChar.charCodeAt(0) / 6;
    newStr += String.fromCharCode(newCharCode);
  }
  return newStr;
}
