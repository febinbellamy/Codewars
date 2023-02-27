/* 
6 kyu

Write a function tripledouble(num1,num2) which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s
tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/

function tripledouble(num1, num2) {
  //code me

  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  const straightTriples = [];
  let pointer1 = 0;
  let pointer2 = 1;
  let pointer3 = 2;

  while (pointer3 < strNum1.length) {
    let firstNum = strNum1[pointer1];
    let secondNum = strNum1[pointer2];
    let thirdNum = strNum1[pointer3];
    if (
      firstNum === secondNum &&
      secondNum === thirdNum &&
      firstNum === thirdNum
    ) {
      straightTriples.push(`${firstNum}${secondNum}`);
    }
    pointer1++;
    pointer2++;
    pointer3++;
  }

  if (straightTriples.length === 0) return 0;
  for (let i = 0; i < straightTriples.length; i++) {
    let currentDouble = straightTriples[i];
    let indexOfDouble = strNum2.indexOf(currentDouble);
    if (indexOfDouble > -1) {
      let slicedStr = strNum2.slice(indexOfDouble, indexOfDouble + 2);
      if (slicedStr === currentDouble) return 1;
    }
  }
  return 0;
}
