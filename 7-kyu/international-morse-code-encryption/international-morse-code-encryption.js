function encryption(message) {
  //CHAR_TO_MORSE preloaded to convert characters into Morse code
  const words = message.split(" ");
  let result = "";
  for(let i = 0; i < words.length; i++) {
    let word = words[i];
    for(let j = 0; j < word.length; j++) {
      let char = word[j];
      result += CHAR_TO_MORSE[char];
      if (word[j + 1]) result += " ";
    }
    if (words[i+1]) result += "   ";
  }
  return result;
}