/* 
7 kyu

Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // "h e l l o   w o r l d"
*/

function spacify(str) {
  // return
  let final = "";
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    final += `${currentChar}${i !== str.length - 1 ? " " : ""}`;
  }
  return final;
}
