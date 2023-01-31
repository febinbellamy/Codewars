/* 
7 kyu

Bob is a lazy man. He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:
"hel2!lo" --> 6
"wicked .. !" --> 6
"!?..A" --> 1
*/

function countLettersAndDigits(input) {
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    let currentChar = input[i];
    if (/^[a-z0-9]+$/i.test(currentChar)) {
      counter++;
    }
  }
  return counter;
}
