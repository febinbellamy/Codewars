function smallWordHelper(sentence){
  const words = sentence.split(" ");
  const result = [];
  for(let word of words) {
    if (word.length <= 3) {
      result.push(word.toUpperCase())
    } else {
      let wordWithoutVowels = word.split("").filter((char) => /[^aeiouAEIOU]/.test(char)).join("");
      result.push(wordWithoutVowels)
    }
  }
  return result.join(' ');
}