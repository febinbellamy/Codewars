/* 
Beta

Given a string, return the letter that appears most frequently. If multiple letters appear with the maximum frequency, return the letter that appears earliest in the alphabet. If the string has no letters, return null. Treat letters as case-sensitive.

  reLetter('I have been looking to your mother!') // 'o'
  reLetter('%^&*()!') // null
  reLetter('Don’t put too much pressure on yourself to pick the best conversational topic ever, at first. ') // 't'
  reLetter('. You don’t have to reinvent the wheel here;') // 'e'
  reLetter('') // null

*/

const reLetter = (str) => {
  const freqObj = {};

  for (let char of str) {
    if (/[a-zA-Z]/.test(char))
      freqObj[char] ? freqObj[char]++ : (freqObj[char] = 1);
  }

  if (Object.keys(freqObj).length === 0) return null;

  const sortedVals = Object.values(freqObj).sort((a, b) => b - a);
  const maxValue = sortedVals[0];

  if (sortedVals[1] !== maxValue) {
    return Object.keys(freqObj).find((key) => freqObj[key] === maxValue);
  }

  const filteredKeys = Object.keys(freqObj)
    .filter((key) => freqObj[key] === maxValue)
    .sort((a, b) => {
      return ("" + a.attr).localeCompare(b.attr);
    });
  return filteredKeys[0];
};
