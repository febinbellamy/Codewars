/* 
6 kyu

Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true

Arguments consist of only lowercase letters.
*/

function isAlt(word) {
  // happy codinggg

  const consonants = "bcdfghjklmnpqrstvwxyz";
  for (let i = 0; i < word.length - 1; i++) {
    let currentChar = word[i].toLowerCase();
    let nextChar = word[i + 1].toLowerCase();

    // if currentChar is a vowel and the next letter is a consonant, or vice versa, continue. Otherwise return false;
    if (
      (/[aeiou]/.test(currentChar) && consonants.includes(nextChar)) ||
      (consonants.includes(currentChar) && /[aeiou]/.test(nextChar))
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
