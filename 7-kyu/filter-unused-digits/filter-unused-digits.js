function unusedDigits(...args) {
  const digitsSeen = {"0": false, "1": false, "2": false, "3": false, "4": false, "5": false, "6": false, "7": false, "8": false, "9": false};
  const digits = args.join("");
  for(let i = 0; i < digits.length; i++) {
    let currentDigit = digits[i];
    digitsSeen[currentDigit] = true;
  }
  let missingDigits = "";
  for(let digit in digitsSeen) {
    if (!digitsSeen[digit]) {
      missingDigits += digit;
    }
  }
  return missingDigits;
}