/* 
6 kyu

In this kata you are given a string for example:

"example(unwanted thing)example"

Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:
"exampleexample"

Notes
- Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
- There can be multiple parentheses.
- The parentheses can be nested.
*/

function removeParentheses(s) {
  if (s.indexOf(")") < 0 && s.indexOf("(") < 0) return s;
  let removeChars = "()";
  let finalStr = "";
  const parens = [];

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (parens.length === 0 && !removeChars.includes(currentChar)) {
      finalStr += currentChar;
    } else if (currentChar === "(") {
      parens.push("(");
    } else if (currentChar === ")") {
      parens.pop();
    }
  }
  return finalStr;
}
