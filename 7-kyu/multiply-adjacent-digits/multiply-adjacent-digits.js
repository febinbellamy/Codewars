function digitMultiplication(expr) {
  let total = 1;
  const finalProblem = [];
  for(let i = 0; i < expr.length; i++) {
    let currChar = expr[i];
    if ("-+".includes(currChar)) {
      finalProblem.push(total, currChar);
      total = 1;
    } else {
      total *= +currChar;
    }
  }
  finalProblem.push(total)
​
  let result = finalProblem[0];
  for(let j = 1; j < finalProblem.length; j++) {
    if (finalProblem[j] === "-") {
      result -= finalProblem[j + 1];
    } else if (finalProblem[j] === "+") {
       result += finalProblem[j + 1];
    }
  }
  return result;
}