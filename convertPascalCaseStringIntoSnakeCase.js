/* 
5 kyu

Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/

function toUnderscore(string) {
  if (string === "") return string;
  if (typeof string === "number") return string.toString();
  if (string === null) return "null";

  let finalStr = "";

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];

    if (/^\d$/.test(currentChar)) {
      finalStr += currentChar;
      continue;
    }
    if (currentChar === currentChar.toUpperCase() && i !== 0) {
      finalStr += "_";
      finalStr += currentChar.toLowerCase();
    } else {
      finalStr += currentChar.toLowerCase();
    }
  }

  return finalStr;
}
