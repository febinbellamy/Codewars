/* 
7 kyu

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
  let finalStr = "";

  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];
    if (currentLetter.toLowerCase() === currentLetter) {
      finalStr += currentLetter.toUpperCase();
    } else if (currentLetter.toUpperCase() === currentLetter) {
      finalStr += currentLetter.toLowerCase();
    }
  }
  return finalStr;
}
