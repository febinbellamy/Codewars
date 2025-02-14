function sayMeOperations(str) {
  const arrOfChars = str.split(" ");
  const operations = [];
  for(let i = 2; i < arrOfChars.length; i++) {  
    let firstNum = +arrOfChars[i - 2];
    let secondNum = +arrOfChars[i - 1];
    let currentNum = +arrOfChars[i];
    if (firstNum + secondNum === currentNum) {
      operations.push("addition");
    } else if (firstNum - secondNum === currentNum) {
      operations.push("subtraction");
    } else if (firstNum * secondNum === currentNum) {
      operations.push("multiplication");
    } else if (parseInt(firstNum / secondNum) === currentNum) {
      operations.push("division");
    } 
  }
  return operations.join(", ");
}