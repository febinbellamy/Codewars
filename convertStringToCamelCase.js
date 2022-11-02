/* 
6 kyu

Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

*/

function toCamelCase(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let prevChar = str[i - 1];

    if (char === "-" || char === "_") continue;

    if (prevChar === "-" || prevChar === "_") {
      newStr += char.toUpperCase();
    } else {
      newStr += char;
    }
  }
  return newStr;
}
