const freqSeq = (str, sep) => {
  
  const freqCounter = {};
  
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    
    if (freqCounter[currentChar]) {
      freqCounter[currentChar]++;
    } else {
      freqCounter[currentChar] = 1;
    }
  }
  let finalStr = "";
  for (let j = 0; j < str.length; j++) {
    let char = str[j];
    finalStr += `${freqCounter[char]}${str.length === 1 || j === str.length - 1 ? "" : sep}`
  }
  
  return finalStr;
}