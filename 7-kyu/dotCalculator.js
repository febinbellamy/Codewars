/* 
7 kyu

You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division

Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

function dotCalculator(equation) {
  let operator = equation
    .split("")
    .filter((char) => char !== "." && char !== " ")[0];
  if (operator === "/") operator += "/";

  let leftDots = 0;
  let rightDots = 0;
  let indexOfOperator = equation.indexOf(operator);

  for (let i = 0; i < equation.length; i++) {
    let currentChar = equation[i];
    if (currentChar === ".") {
      if (indexOfOperator > i) leftDots++;
      else if (indexOfOperator < i) rightDots++;
    }
  }

  let finalNumberOfDots;

  // add
  if (operator === "+") finalNumberOfDots = leftDots + rightDots;

  // subtract
  if (operator === "-") finalNumberOfDots = leftDots - rightDots;

  // multiply
  if (operator === "*") finalNumberOfDots = leftDots * rightDots;

  // divide
  if (operator === "//") finalNumberOfDots = Math.floor(leftDots / rightDots);

  if (finalNumberOfDots === 0) return "";

  let finalStr = "";
  let counter = 0;

  while (counter < finalNumberOfDots) {
    finalStr += ".";
    counter++;
  }
  return finalStr;
}