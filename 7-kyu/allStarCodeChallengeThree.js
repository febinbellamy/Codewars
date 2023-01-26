/* 
7 kyu

This Kata is intended as a small challenge for my students

Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""
*/

var removeVowels = function (str) {
  //code here
  const vowels = "aeiou";
  return str
    .split("")
    .filter((char) => vowels.indexOf(char) < 0)
    .join("");
};
