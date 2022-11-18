/* 
5 kyu

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
  if (parens.length === 1) return false;
  const stack = [];

  for (let i = 0; i < parens.length; i++) {
    let currentChar = parens[i];

    if (currentChar === "(") {
      stack.push(currentChar);
    }
    if (currentChar === ")") {
      if (stack.includes("(")) {
        stack.push(")");
        let indexOf = stack.indexOf("(");
        stack.pop();
        stack.splice(indexOf, 1);
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
}
