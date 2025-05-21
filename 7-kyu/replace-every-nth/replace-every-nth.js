function replaceNth(text, n, oldValue, newValue) {  
  if (n <= 0) return text;
  let frequencyCounter = 1;
  let result = "";
  for(let i = 0; i < text.length; i++) {
    let currentChar = text[i];
    if (currentChar === oldValue) {
      if (frequencyCounter % n === 0) {
        result += newValue;
      } else {
        result += currentChar;
      } 
      frequencyCounter++;
    } else {
      result += currentChar;
    }
  }
  return result;
}