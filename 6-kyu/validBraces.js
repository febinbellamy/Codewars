/* 
6 kyu

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

function validBraces(braces) {
  //TODO

  const valid = ["()", "{}", "[]"];
  const stack = [];
  let index = 0;
  while (index < braces.length) {
    let currentChar = braces[index];
    if (currentChar === "(" || currentChar === "[" || currentChar === "{") {
      stack.push(currentChar);
    } else {
      if (valid.includes(stack[stack.length - 1] + currentChar)) {
        stack.pop();
      } else {
        return false;
      }
    }
    index++;
  }
  return stack.length === 0 ? true : false;
}
