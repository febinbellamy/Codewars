function getIssuer(number) {
  const strNum = String(number);
  const firstTwoDigits = +strNum.slice(0, 2);
  const firstFourDigits = +strNum.slice(0, 4);
  const options = [51, 52, 53, 54, 55];
​
  // check for AMEX
  if (firstTwoDigits === 34 || firstTwoDigits == 37 && strNum.length === 15) {
    return "AMEX"
  }
  
  // check for Discover
  if (firstFourDigits === 6011 && strNum.length === 16) {
    return "Discover"
  }
  
  // check for Mastercard
  if (strNum.length === 16 && options.includes(firstTwoDigits)) {
    return "Mastercard"
  }
  
  // check for VISA
  if (strNum[0] === "4" && (strNum.length === 13 || strNum.length === 16)) {
    return "VISA"
  }
  
  return "Unknown";
}