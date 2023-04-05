/* 
7 kyu

This is a follow up from my kata Insert Dashes.

Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and asterisk ('*') between each even numbers in num

For example:
insertDashII(454793) --> 4547-9-3
insertDashII(1012356895) --> 10123-56*89-5

Zero shouldn't be considered even or odd.
*/

function insertDashII(num) {
  //code me

  let strNum = num.toString();
  let finalStr = "";

  for (let i = 0; i < strNum.length; i++) {
    let currentNum = +strNum[i];

    if (currentNum === 0 || +strNum[i + 1] === 0) {
      finalStr += currentNum;
    } else if (
      currentNum % 2 === 0 &&
      +strNum[i + 1] &&
      +strNum[i + 1] % 2 === 0
    ) {
      finalStr += `${currentNum}*`;
    } else if (
      currentNum % 2 !== 0 &&
      +strNum[i + 1] &&
      +strNum[i + 1] % 2 !== 0
    ) {
      finalStr += `${currentNum}-`;
    } else {
      finalStr += `${currentNum}`;
    }
  }
  return finalStr;
}
