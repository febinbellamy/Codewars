/* 
7 kyu

Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.

  wThe booleans should always start with false becase there is no digit before the first one.

Examples
73312        => [false, false, true, false, true]
2026         => [false, true, false, true]
635          => [false, false, false]

*** Remember 0 is evenly divisible by all integers but not the other way around ***
*/

function divisibleByLast(n) {
  // TODO
  const result = [false];
  const strNum = String(n);
  for (let i = 1; i < strNum.length; i++) {
    let currentDigit = strNum[i];
    let prevDigit = strNum[i - 1];
    currentDigit % prevDigit === 0 ? result.push(true) : result.push(false);
  }
  return result;
}
