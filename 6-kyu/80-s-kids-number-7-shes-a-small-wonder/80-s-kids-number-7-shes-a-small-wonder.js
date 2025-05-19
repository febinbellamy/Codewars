function Robot() {
  this.wordsLearned = {"thank": true, "you": true, "for": true, "teaching": true, "me": true, "i": true, "already": true, "know": true, "the": true, "word": true, "do": true, "not": true, "understand": true, "input": true};
}
​
Robot.prototype.learnWord = function(word) {
  const containsOnlyAlphaChars = word.split('').filter((char) => /[a-zA-Z]/.test(char)).length === word.length;
  if (!word || !containsOnlyAlphaChars) return `I do not understand the input` 
  const lowerCasedWord = word.toLowerCase()
  if (this.wordsLearned.hasOwnProperty(lowerCasedWord)) {
    return `I already know the word ${word}`
  } else {
    this.wordsLearned[lowerCasedWord] = true;
    return `Thank you for teaching me ${word}`
  }
}