/* 
6 kyu

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For this kata, single digit numbers will not be considered numerical palindromes.

For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.

Note: Palindromes should be found without permutating num.

palindrome(5) => false
palindrome(1221) => true
palindrome(141221001) => true
palindrome(1215) => true 
palindrome(1294) => false 
palindrome("109982") => "Not valid"
*/

function palindrome(num) {
  //Code goes here

  let strNum = num.toString();
  if (typeof num !== "number" || num < 0 || num !== parseInt(num))
    return "Not valid";
  if (strNum.length === 1) return false;
  if (strNum.length === 2) return strNum[1] + strNum[0] === strNum;

  let palindrome = false;
  let pointer1 = 0;
  let pointer2 = 1;
  let pointer3 = 2;

  while (pointer2 < strNum.length) {
    let twoDigits = strNum.slice(pointer1, pointer3);
    if (twoDigits === twoDigits.split("").reverse().join("")) return true;
    if (pointer3 < strNum.length) {
      let threeDigits = strNum.slice(pointer1, pointer3 + 1);
      if (threeDigits === threeDigits.split("").reverse().join("")) return true;
    }
    pointer1++;
    pointer2++;
    pointer3++;
  }
  return palindrome;
}
