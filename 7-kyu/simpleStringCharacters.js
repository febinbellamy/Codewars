/* 
7 kyu

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

More examples in the test cases. Good luck!
*/

function solve(s) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let numberCount = 0;
  let specialCharsCount = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (/^[A-Z]*$/.test(char)) {
      uppercaseCount++;
    } else if (/^[a-z]*$/.test(char)) {
      lowercaseCount++;
    } else if (!isNaN(+char)) {
      numberCount++;
    } else {
      specialCharsCount++;
    }
  }
  return [uppercaseCount, lowercaseCount, numberCount, specialCharsCount];
}
