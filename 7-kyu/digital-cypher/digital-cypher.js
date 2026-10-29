function encode(code,  n) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const strNum = String(n);
  const result = [];
  let index = 0;
  let count = 0;
  while(count < code.length) {
    let currentDigit = +strNum[index];
    let currentLetter = code[count];
    let newValue = (alphabet.indexOf(currentLetter) + 1) + currentDigit;
    result.push(newValue)
    index = index === strNum.length - 1 ? 0 : index + 1;
    count++;
  }
  return result;
}