/* 
6 kyu

You are given an input string.

For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it.

Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"

There might be some non-ascii characters in the string.

Take note of performance
*/

function numericals(s) {
  const frequencyObj = {};
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    if (frequencyObj[currentChar]) {
      frequencyObj[currentChar]++;
      newStr += frequencyObj[currentChar];
    } else {
      frequencyObj[currentChar] = 1;
      newStr += 1;
    }
  }
  return newStr;
}
