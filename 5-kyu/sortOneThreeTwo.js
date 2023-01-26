/* 
5 kyu

Hey You! Sort these integers for me ... By name ... Do it now !

Input
- Range is 0-999
- There may be duplicates
- The array may be empty

Example
- Input: 1, 2, 3, 4
- Equivalent names: "one", "two", "three", "four"
- Sorted by name: "four", "one", "three", "two"
- Output: 4, 1, 3, 2

Notes
- Don't pack words together:
- e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
- e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"
- Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
- e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
- e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"
*/

function sortByName(ary) {
  if (ary.length === 0) return [];

  const obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
  };

  const finalArr = [];

  const strArr = ary.map((num) => String(num));

  for (let i = 0; i < strArr.length; i++) {
    let currentNumber = strArr[i];

    if (currentNumber.length === 1) {
      finalArr.push({ finalStr: obj[currentNumber], number: [currentNumber] });
    } else if (currentNumber.length === 2) {
      if (obj[currentNumber]) {
        finalArr.push({
          finalStr: obj[currentNumber],
          number: [currentNumber],
        });
      } else {
        let tensDigit = currentNumber[0];
        let onesDigit = currentNumber[1];

        let finalStr = `${obj[tensDigit + "0"]} ${obj[onesDigit]}`;
        finalArr.push({ finalStr: finalStr, number: [currentNumber] });
      }
    } else if (currentNumber.length === 3) {
      let hundredsDigit = currentNumber[0];
      let tensDigit = currentNumber[1];
      let onesDigit = currentNumber[2];
      let numHundred = `${obj[hundredsDigit]} ${obj[100]}`;
      let tensAndOnes;

      if (tensDigit === "0") {
        if (onesDigit === "0") {
          tensAndOnes = "";
        } else {
          tensAndOnes = `${obj[onesDigit]}`;
        }
      } else if (tensDigit !== "0") {
        if (obj[tensDigit + onesDigit]) {
          tensAndOnes = `${obj[tensDigit + onesDigit]}`;
        } else if (obj[tensDigit + "0"]) {
          tensAndOnes = `${obj[tensDigit + "0"]} ${
            onesDigit === "0" ? "" : obj[onesDigit]
          }`;
        }
      }

      let finalStr = `${numHundred} ${tensAndOnes}`;
      finalArr.push({ finalStr: finalStr, number: [currentNumber] });
    }
  }

  const sortedArr = finalArr.sort((a, b) =>
    a.finalStr.localeCompare(b.finalStr)
  );

  const arr = [];

  for (let numberObj of sortedArr) {
    arr.push(+numberObj["number"]);
  }

  return arr;
}
