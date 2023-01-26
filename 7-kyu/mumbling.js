/* 
7 kyu

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  // your code

  let index = 0;
  let newStr = "";

  while (index < s.length) {
    let currentChar = s[index];

    let lowerCaseLetters = "";
    let counter = 0;
    while (counter < index) {
      lowerCaseLetters += currentChar.toLowerCase();
      counter++;
    }
    newStr += `${currentChar.toUpperCase()}${lowerCaseLetters}${
      index !== s.length - 1 ? "-" : ""
    }`;
    index++;
  }

  return newStr;
}
