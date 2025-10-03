function capitalsFirst(str){
  const upperCaseWords = [];
  const lowerCaseWords = [];
  const words = str.split(" ");
  for (let word of words) {
    let firstChar = word[0]; 
    if (/[a-z]/.test(firstChar)) {
      lowerCaseWords.push(word)
    } else if (/[A-Z]/.test(firstChar)) {
      upperCaseWords.push(word);
    }
  }
  return [...upperCaseWords, ...lowerCaseWords].join(" ");
}