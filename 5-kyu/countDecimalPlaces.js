/* 
5 kyu

Can you write an algorithm to determine the number of decimal places of a number?

decimalPlaces(3.14); //yields 2
decimalPlaces(2.e-14); //yields 14
decimalPlaces(-3.14e-21); //yields 23
decimalPlaces(10.75); //yields 2
decimalPlaces(NaN); //yields 0
decimalPlaces(Infinity); //yields 0

Consider the decimal places to be the number of digits after the decimal separator when the number is expressed in ordinary decimal notation.
*/

function decimalPlaces(n) {
  if (n === NaN || n === Infinity) return 0;

  const strNum = n.toString();
  const indexOfDecimal = strNum.indexOf(".");
  const indexOfE = strNum.indexOf("e");
  const indexOfNegativeSign = strNum.lastIndexOf("-");

  // if no decimal and no e, return 0. example: 44444
  if (indexOfDecimal === -1 && indexOfE === -1) return 0;

  // if e but no negative sign after it, return 0. example: 3.14e21
  if (indexOfE > -1 && strNum[indexOfE + 1] !== "-") return 0;

  // if no e and there is a decimal, return the number of digits after the decimal. example: 3.14 returns 2
  if (indexOfE === -1 && indexOfDecimal > -1) {
    return strNum.slice(indexOfDecimal + 1).length;
  }

  // if e, NO decimal, and there's a negative sign after e, return the number after the negative. example 2e-14 returns 14
  if (indexOfE > -1 && indexOfDecimal === -1 && strNum[indexOfE + 1] === "-") {
    return Number(strNum.slice(indexOfE + 2));
  }

  // if e AND a decimal, and there's a negative sign after e,
  if (indexOfE > -1 && indexOfDecimal > -1 && strNum[indexOfE + 1] === "-") {
    let totalNumOfDecimalPlaces = 0;

    // check if there are numbers before the e. If so, count them as part of the total,
    if (/[0-9]/.test(strNum[indexOfDecimal + 1])) {
      totalNumOfDecimalPlaces += strNum.slice(
        indexOfDecimal + 1,
        indexOfE
      ).length;
    }

    // then grab the number after the - sign.
    const digitsAfterNegativeSign = Number(
      strNum.slice(indexOfNegativeSign + 1)
    );
    totalNumOfDecimalPlaces += digitsAfterNegativeSign;
    return totalNumOfDecimalPlaces;
  }
}
