/* 
6 kyu

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
  let newStr = "";

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let nextChar = string[i + 1];

    newStr += currentChar;

    if (nextChar && nextChar === nextChar.toUpperCase()) {
      newStr += " ";
    }
  }
  return newStr;
}
