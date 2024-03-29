/* 
6 kyu

In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
*/

function reverseVowels(str) {
  const vowels = "aeiou";

  const strArr = str.split("");
  const vowelsInStr = strArr
    .filter((char) => vowels.includes(char.toLowerCase()))
    .reverse();

  let index = 0;
  let indexOfVowelsArr = 0;

  while (index < strArr.length) {
    let currentChar = strArr[index];
    let currentVowel = vowelsInStr[indexOfVowelsArr];

    if (vowels.includes(currentChar.toLowerCase())) {
      strArr[index] = currentVowel;
      indexOfVowelsArr++;
    }
    index++;
  }
  return strArr.join("");
}
