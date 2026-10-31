function guessMyNumber(guess, number = '123-451-2345') {
  // Your code here
  let result = "";
  for(let char of number) {
    result += guess.includes(char) || char === "-" ? char : "#";
  }
  return result;
}