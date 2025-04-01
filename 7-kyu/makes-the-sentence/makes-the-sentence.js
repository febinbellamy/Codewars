function makesTheSentence(characterArray, sentenceString) {
  const freqCounterSentence = {};
  const freqCounterChar = {};
  for(let char of sentenceString) {
    if (/[^A-Za-z.?!]/.test(char)) continue;
    freqCounterSentence[char] = freqCounterSentence.hasOwnProperty(char) ? freqCounterSentence[char] + 1 : 1;      
  }
  for(let char of characterArray) {
    if (/[^A-Za-z.?!]/.test(char)) continue;
    freqCounterChar[char] = freqCounterChar.hasOwnProperty(char) ? freqCounterChar[char] + 1 : 1;      
  }
  for(let key in freqCounterSentence) {
    if (!(key in freqCounterChar) || freqCounterSentence[key] !== freqCounterChar[key]) {
      return false;
    }
  }
  return true;
}