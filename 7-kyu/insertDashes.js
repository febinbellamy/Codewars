/* 
7 kyu

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
  //code me

  const strNum = num.toString();

  let finalStr = "";

  for (let i = 0; i < strNum.length; i++) {
    let currentDigit = +strNum[i];
    if (currentDigit % 2 !== 0 && strNum[i + 1] && +strNum[i + 1] % 2 !== 0) {
      finalStr += `${currentDigit}-`;
    } else {
      finalStr += currentDigit;
    }
  }
  return finalStr;
}
