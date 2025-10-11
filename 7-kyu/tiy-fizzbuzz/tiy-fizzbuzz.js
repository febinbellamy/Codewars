function tiyFizzBuzz(sentence){
  const lowercaseVowels = "aeiou";
  const lowercaseConsonants = "bcdfghjklmnpqrstvwxyz";
  let result = "";
  for(let char of sentence) {
    if (lowercaseConsonants.toUpperCase().includes(char)) {
      result += "Iron";
    } else if (lowercaseVowels.toUpperCase().includes(char)) {
      result += "Iron Yard";
    } else if (lowercaseVowels.includes(char)) {
      result += "Yard";
    } else {
      result += char;
    }
  }
  return result;
}