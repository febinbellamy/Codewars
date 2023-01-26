/* 
7 kyu

Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"
*/

function freqSeq(str, sep) {
  const freqCounter = {};

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (freqCounter[currentChar]) {
      freqCounter[currentChar]++;
    } else {
      freqCounter[currentChar] = 1;
    }
  }
  let finalStr = "";
  for (let j = 0; j < str.length; j++) {
    let char = str[j];
    finalStr += `${freqCounter[char]}${
      str.length === 1 || j === str.length - 1 ? "" : sep
    }`;
  }

  return finalStr;
}
