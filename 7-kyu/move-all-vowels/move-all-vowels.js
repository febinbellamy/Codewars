function moveVowel(input) {
  let consonants = "";
  let vowels = "";
  for(let letter of input) {
    if (/[aeiouAEIOU]/.test(letter)) {
      vowels += letter; 
    } else {
      consonants += letter;
    }
  }
  return consonants + vowels;
}