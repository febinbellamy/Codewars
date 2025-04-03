const transform = (s) => {
  const freqCounter = {};
  for(let char of s) {
    if (freqCounter.hasOwnProperty(char)) {
      freqCounter[char]++;
    } else {
      freqCounter[char] = 1;
    }
  }
  let result = "";
  for(let c of s) {
    if (result.indexOf(c) >= 0) continue;
    result += c;
    if (freqCounter[c] > 1) result += freqCounter[c];
  }
  return result;
}