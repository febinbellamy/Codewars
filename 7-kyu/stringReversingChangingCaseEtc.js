/* 
7 kyu

Given 2 string parameters, show a concatenation of:

- the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
- a separator in between both strings: @@@
- the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 

** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**
*/

function reverseAndMirror(s1, s2) {
  let newS2 = s2
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .reverse()
    .join("");
  let s1InvertedCaseArr = s1
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    );
  let newS1 =
    [...s1InvertedCaseArr].reverse().join("") + s1InvertedCaseArr.join("");
  return `${newS2}@@@${newS1}`;
}
