function twins(myArray){
  // your code
  const freqCounter = {};
  for(let num of myArray) {
    if (num in freqCounter) {
      freqCounter[num]++;
    } else {
      freqCounter[num] = 1;
    }
  }
  for (let key in freqCounter) {
    if (freqCounter[key] !== 2) return false;
  }
  
  return true;
}