/* 
6 kyu

Write a function that returns the greatest common factor of an array of positive integers. Your return value should be a number, you will only receive positive integers.

greatestCommonFactor([46, 14, 20, 88]); // --> 2
*/

function greatestCommonFactor(array) {
  // your code here

  function generateFactors(num) {
    const factorsOfNum = [];
    for (let i = 1; i <= num; i++) if (num % i === 0) factorsOfNum.push(i);
    return factorsOfNum;
  }

  const factors = [];
  let index = 0;
  while (index < array.length) {
    let currentNum = array[index];
    factors.push(...generateFactors(currentNum));
    index++;
  }

  const freqObj = {};
  for (let j = 0; j < factors.length; j++) {
    let currentNum = factors[j];
    if (freqObj[currentNum]) freqObj[currentNum]++;
    else freqObj[currentNum] = 1;
  }

  const filteredAndSortedKeys = Object.keys(freqObj)
    .filter((key) => freqObj[key] === array.length)
    .map((char) => +char)
    .sort((a, b) => b - a);
  return filteredAndSortedKeys[0];
}
