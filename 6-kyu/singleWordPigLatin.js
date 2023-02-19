/* 
6 kyu

Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware of the rules.

So, the goal of this kata is to wite a function that encodes a single word string to pig latin.

The rules themselves are rather easy:

- The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

- The word starts with a consonant -> move consonants from the beginning of the word to the end of the word until the first vowel, then return it plus "ay".

- The result must be lowercase, regardless of the case of the input. If the input string has any non-alpha characters, the function must return None, null, Nothing (depending on the language).

- The function must also handle simple random strings and not just English words.

- The input string has no vowels -> return the original string plus "ay".

For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants, so they are moved to the end of the string and "ay" is appended.
*/

function pigLatin(string) {
  //your code here

  const strArr = string.split("");
  const checkForNonLetters = strArr.filter((char) => /[^a-zA-Z]/.test(char));
  if (checkForNonLetters.length > 0) return null;

  const vowels = "aeiouAEIOU";
  if (vowels.includes(string[0])) return `${string.toLowerCase()}way`;

  let newStr = "";
  const firstVowel = strArr.filter((char) => vowels.includes(char))[0];
  const indexOfFirstVowel = string.indexOf(firstVowel);
  if (indexOfFirstVowel < 0) return `${string.toLowerCase()}ay`;
  newStr += `${string.slice(indexOfFirstVowel)}${string.slice(
    0,
    indexOfFirstVowel
  )}ay`;
  return newStr.toLowerCase();
}
