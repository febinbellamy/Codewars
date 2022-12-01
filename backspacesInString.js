/* 
6 kyu

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
  if (s === "") return "";
  let skipCounter = 0;
  let finalStr = "";

  for (let i = s.length - 1; i >= 0; i--) {
    let currentChar = s[i];
    if (currentChar === "#") {
      skipCounter++;
    } else {
      if (skipCounter > 0) {
        skipCounter--;
        continue;
      } else {
        finalStr += currentChar;
      }
    }
  }
  return finalStr.split("").reverse().join("");
}
