/* 
5 kyu

Scientists working internationally use metric units almost exclusively. Unless that is, they wish to crash multimillion dollars worth of equipment on Mars.

Your task is to write a simple function that takes a number of meters, and outputs it using metric prefixes.

In practice, meters are only measured in "mm" (thousandths of a meter), "cm" (hundredths of a meter), "m" (meters) and "km" (kilometers, or clicks for the US military).

For this exercise we just want units bigger than a meter, from meters up to yottameters, excluding decameters and hectometers.

All values passed in will be positive integers. e.g.

meters(5);
// returns "5m"

meters(51500);
// returns "51.5km"

meters(5000000);
// returns "5Mm"

See http://en.wikipedia.org/wiki/SI_prefix for a full list of prefixes
*/

function meters(x) {
  let num = String(x);

  if (String(x).includes("e+")) {
    let indexOfE = String(x).indexOf("e");
    let indexOfPlus = String(x).indexOf("+");
    let wholeNum = String(x).slice(0, indexOfE);
    let numberOfZeroes = String(x).slice(indexOfPlus + 1);
    let newStrNum = "";

    for (let j = 0; j < numberOfZeroes; j++) {
      if (j === 0) {
        newStrNum += wholeNum;
        newStrNum += "0";
      } else {
        newStrNum += "0";
      }
    }
    num = newStrNum;
  }

  const arrayOfDigits = num.split("");
  let mainNum = "";

  for (let i = 0; i < arrayOfDigits.length; i++) {
    let currentDigit = arrayOfDigits[i];
    let nextDigit = arrayOfDigits[i + 1];

    if (
      (currentDigit !== "0" && nextDigit === "0" && mainNum) ||
      mainNum.length === 3
    ) {
      mainNum += ".";
      mainNum += currentDigit;
    } else if (currentDigit !== "0") {
      mainNum += currentDigit;
    }
  }

  if (arrayOfDigits.length <= 3) return `${mainNum}m`;
  if (arrayOfDigits.length <= 6) return `${mainNum}km`;
  if (arrayOfDigits.length <= 9) return `${mainNum}Mm`;
  if (arrayOfDigits.length <= 12) return `${mainNum}Gm`;
  if (arrayOfDigits.length <= 15) return `${mainNum}Tm`;
  if (arrayOfDigits.length <= 18) return `${mainNum}Pm`;
  if (arrayOfDigits.length <= 21) return `${mainNum}Em`;
  if (arrayOfDigits.length <= 24) return `${mainNum}Zm`;
  if (arrayOfDigits.length <= 27) return `${mainNum}Ym`;
}
