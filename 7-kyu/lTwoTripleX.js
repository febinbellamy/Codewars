/* 
7 kyu

Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

"abraxxxas" → true
"xoxotrololololololoxxx" → false
"softX kitty, warm kitty, xxxxx" → true
"softx kitty, warm kitty, xxxxx" → false

Note:
- capital X's do not count as an occurrence of "x".
- if there are no "x"'s then return false
*/

function tripleX(str) {
  let indexOfX = str.indexOf("x");
  return str.slice(indexOfX, indexOfX + 3) === "xxx";
}
