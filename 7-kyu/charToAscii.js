/* 
7 kyu

Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. 

The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.
*/

function charToAscii(string) {
  //your code here

  if (!string) return null;

  const obj = {};

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (!obj[currentChar] && /[a-zA-Z]/.test(currentChar)) {
      obj[currentChar] = currentChar.charCodeAt(0);
    }
  }
  return obj;
}
