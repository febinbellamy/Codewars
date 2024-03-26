/* 
7 kyu

Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

function reverseNumber(n) {
  let strNum = String(n);
  let reversedNumArr = strNum.split("").reverse();
  if (reversedNumArr[0] === "0") {
    let currentNum = reversedNumArr[0];
    while (currentNum !== "0") {
      currentNum = reversedNumArr[0];
      reversedNumArr.shift();
    }
  }
  if (reversedNumArr[reversedNumArr.length - 1] === "-") {
    let negativeSign = reversedNumArr.pop();
    reversedNumArr.unshift(negativeSign);
  }
  return +reversedNumArr.join("");
}
