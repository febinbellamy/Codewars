var shortenSpeech = function (str) {  
  //Your code
  const words = str.split(" ");
  for (let j = 0; j < words.length; j++) {
    if (words[j].length >= 4) {
      let slicedWord = words[j].slice(3);
      let newWord = "";
      for(let i = 0; i < slicedWord.length; i++) {
        if (/[aeiouAEIOU]/.test(slicedWord[i])) {
          newWord+="."
          break;
        } 
        newWord += slicedWord[i];
      }
      words[j] = words[j].slice(0, 3) + newWord;
    }
  }
  return words.join(" ");
}