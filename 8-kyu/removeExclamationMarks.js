/* 

8 kyu

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

function removeExclamationMarks(s) {
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (currentChar === "!") {
      continue;
    } else {
      newStr += currentChar;
    }
  }
  return newStr;
}
