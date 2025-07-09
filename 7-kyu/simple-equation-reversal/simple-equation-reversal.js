function solve(eq){
  const operators = "*+-/";
  let result = "";
  let temp = [];
  for(let i = eq.length - 1; i >= 0; i--) {
    let currentChar = eq[i];
    if (operators.includes(currentChar)) {
      result += temp.join('') + currentChar;
      temp.length = 0;
    } else {
      temp.unshift(currentChar);
    }
  }
  return result + temp.join('');
}