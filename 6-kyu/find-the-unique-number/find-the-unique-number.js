function findUnique(numbers) {
    // Return the unique number
  const freqCounter = {};
  for(let num of numbers) {
    freqCounter[num] = freqCounter.hasOwnProperty(num) ? freqCounter[num] + 1 : 1;
  }
  for(let num in freqCounter) {
    if (freqCounter[num] === 1) return +num;
  }
}
​