function decode  (code, n) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const strNum = String(n);
  const result = [];
  let index = 0;
  let count = 0;
  while(count < code.length) {
    let currentDigit = +strNum[index];
    let currentNum = code[count];
    let newValue = currentNum - currentDigit;
    let letter = alphabet[newValue > 26 ? (newValue - 26) - 1 : newValue - 1];
    result.push(letter)
    index = index === strNum.length - 1 ? 0 : index + 1;
    count++;
  }
  return result.join("");
}
​