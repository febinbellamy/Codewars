/* 
5 kyu

Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number
*/

var numberToPrice = function (number) {
  if (typeof number !== "number") return "NaN";

  let strNum = String(number);
  let newStr = "";
  const indexOfDecimal = strNum.indexOf(".");
  let cents;
  let wholeNum;
  let counter = 0;
  let finalArr = [];

  if (indexOfDecimal > -1) {
    cents = strNum.slice(indexOfDecimal, indexOfDecimal + 3);
    if (cents.length === 2) {
      cents += "0";
    }
    wholeNum = strNum.slice(0, indexOfDecimal);
  } else {
    cents = ".00";
    wholeNum = strNum.slice(0);
  }

  for (let i = wholeNum.length - 1; i >= 0; i--) {
    finalArr.unshift(wholeNum[i]);
    counter++;

    if (counter % 3 === 0 && /^\d$/.test(wholeNum[i - 1])) {
      finalArr.unshift(",");
    }
  }

  const splitCents = cents.split("");
  return [...finalArr, ...splitCents].join("");
};
