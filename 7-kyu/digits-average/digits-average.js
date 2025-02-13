function digitsAverage(input) {
  // your code here
  let currentStrNum = String(input);
  while (currentStrNum.length > 1) {
    let newStrNum = "";
    let index = 0;
    while (index + 1 < currentStrNum.length) {
      let currentDigit = currentStrNum[index];
      let nextDigit = currentStrNum[index + 1];
      let average = Math.ceil((+currentDigit + +nextDigit)/2);
      newStrNum += average;
      index++;
    }
    currentStrNum = newStrNum;
  }
  return +currentStrNum;
}