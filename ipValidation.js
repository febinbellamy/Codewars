/* 
6 kyu

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
    1.2.3.4
    123.45.67.89
    Invalid input examples:
    1.2.3
    1.2.3.4.5
    123.456.78.90
    123.045.067.089

Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

function isValidIP(str) {
  const checkForPeriods = str.split("").filter((char) => char === ".");
  if (checkForPeriods.length !== 3) return false;

  const strNums = "0123456789.";
  const checkForOnlyNumbersAndPeriods = str
    .split("")
    .filter((char) => strNums.includes(char));
  if (checkForOnlyNumbersAndPeriods.length !== str.length) return false;

  const strArr = str.split(".");
  if (strArr.includes("") || strArr.includes(".")) return false;

  for (let i = 0; i < strArr.length; i++) {
    let currentNumber = strArr[i];

    if (+currentNumber >= 0 && +currentNumber <= 255) {
      if (currentNumber[0] === "0" && currentNumber.length > 1) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
