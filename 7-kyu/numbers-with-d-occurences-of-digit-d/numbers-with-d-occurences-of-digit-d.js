function isDd(n) {
  // your code here
  const freqCounter = {};
  const strNum = String(n);
  for(let char of strNum) {
    if (/[^0-9]/.test(char)) continue;
    if (freqCounter.hasOwnProperty(char)) {
      freqCounter[char]++;
    } else {
      freqCounter[char] = 1;
    }
  }
  for(let key in freqCounter) {
    if (+key === freqCounter[key]) return true;
  }
  return false;
}