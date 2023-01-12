/* 
6 kyu

Create a function that takes a string as a parameter and does the following, in this order:

- Replaces every letter with the letter following it in the alphabet (see note below)
- Makes any vowels capital
- Makes any consonants lower case

Note:
- the alphabet should wrap around, so Z becomes A
- in this kata, y isn't considered as a vowel.

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

function changer(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const consonants = "bcdfghjklmnpqrstvwxyz";

  const strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    let indexOfNextLetter = alphabet.indexOf(strArr[i].toLowerCase()) + 1;
    if (indexOfNextLetter === 0) continue;
    if (indexOfNextLetter === 26) indexOfNextLetter = 0;
    strArr[i] = `${
      consonants.includes(alphabet[indexOfNextLetter])
        ? alphabet[indexOfNextLetter].toLowerCase()
        : alphabet[indexOfNextLetter].toUpperCase()
    }`;
  }
  return strArr.join("");
}
