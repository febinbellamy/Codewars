/* 
6 kyu

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.

For this kata, single digit numbers will NOT be considered numerical palindromes.

Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.

palindrome(8) => 11
palindrome(281) => 282 
palindrome(1029) => 1001
palindrome(1221) => 1221
palindrome("1221") => "Not valid"
*/

function palindrome(num) {
  //Code goes here

  if (typeof num !== "number" || num !== parseInt(num) || num < 0)
    return "Not valid";

  let currentNum = num;
  let palindrome = false;
  let closestLargerThanNum;
  let strNum;

  while (!palindrome) {
    strNum = currentNum.toString();

    if (strNum.length >= 2 && strNum.split("").reverse().join("") === strNum) {
      closestLargerThanNum = currentNum;
      palindrome = true;
    }
    currentNum++;
  }

  let currentNum2 = num;
  let closestSmallerThanNum;
  let strNum2;

  while (currentNum2 > 0) {
    strNum2 = currentNum2.toString();

    if (
      strNum2.length >= 2 &&
      strNum2.split("").reverse().join("") === strNum2
    ) {
      closestSmallerThanNum = currentNum2;
      break;
    }
    currentNum2--;
  }

  if (!closestSmallerThanNum) return closestLargerThanNum;

  const absValueSmaller = Math.abs(closestSmallerThanNum - num);
  const absValueLarger = Math.abs(closestLargerThanNum - num);

  if (absValueLarger <= absValueSmaller) {
    return closestLargerThanNum;
  } else {
    return closestSmallerThanNum;
  }
}
