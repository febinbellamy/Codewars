/* 
7 kyu

In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:
solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"

More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!
*/

function solve(str) {
  //..

  const strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].split("").reverse().join("");
  }

  const reversedLetters = strArr.reverse().join("");

  let finalStr = "";
  let reversedLetterIndex = 0;

  for (let j = 0; j < str.length; j++) {
    let currentChar = str[j];

    if (currentChar === " ") {
      finalStr += " ";
    } else {
      finalStr += reversedLetters[reversedLetterIndex];
      reversedLetterIndex++;
    }
  }
  return finalStr;
}
