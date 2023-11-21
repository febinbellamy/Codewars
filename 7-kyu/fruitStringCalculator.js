/* 
7 kyu

You are given a string of words and numbers. Extract the expression including:
1. the operator: either addition ("gains") or subtraction ("loses")
2. the two numbers that we are operating on

Return the result of the calculation.

Notes:
- "loses" and "gains" are the only two words describing operators
- No fruit debts nor bitten apples = The numbers are integers and no negatives

Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40

Should be a nice little kata for you :)
*/

function calculate(string) {
  // Add your code here

  const wordsArr = string.split(" ");

  let num;

  for (let i = 1; i < wordsArr.length; i++) {
    let currentWord = +wordsArr[i];
    let prevWord = wordsArr[i - 1];

    if (!Number.isNaN(currentWord) && prevWord === "has") {
      num = +currentWord;
    } else if (!Number.isNaN(currentWord) && prevWord !== "has") {
      if (prevWord === "gains") {
        num += currentWord;
      } else {
        num -= currentWord;
      }
    }
  }
  return num;
}
