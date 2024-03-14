/* 
7 kyu

Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'

Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/

function addLetters(...letters) {
  // your code here
  if (letters.length === 0) return "z";

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let sum = 0;

  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    sum += alphabet.indexOf(currentLetter) + 1;
  }
  if (sum <= 26) return alphabet[sum - 1];

  let newSum = sum % 26;
  return alphabet[newSum - 1];
}
