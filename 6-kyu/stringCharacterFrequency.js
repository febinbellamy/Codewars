/* 
6 kyu

In this Kata, we are going to determine if the count of each of the characters in a string can be equal if we remove a single character from that string.

For example:
solve('abba') = false -- if we remove any character, the count of each character will not be equal.
solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
solve('wwwf') = true -- if we remove f, the remaining letters have same count.

More examples in the test cases. Empty string is not tested.

Good luck!
*/

function solve(s) {
  //..
  const freqCounter = {};
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (freqCounter[currentChar]) {
      freqCounter[currentChar]++;
    } else {
      freqCounter[currentChar] = 1;
    }
  }

  let values = Object.values(freqCounter);
  let copyArr = [...values];

  if (values.length === 1) return true;

  for (let j = 0; j < values.length; j++) {
    let currentNumber = values[j];
    let newNumber = currentNumber - 1;
    let checkIfEqual;
    if (newNumber === 0) {
      let partOneOfArr = values.slice(0, j);
      let partTwoOfArr = values.slice(j + 1);
      let newArr = [...partOneOfArr, ...partTwoOfArr];
      let value = partOneOfArr.length > 0 ? partOneOfArr[0] : partTwoOfArr[0];
      checkIfEqual = newArr.every((num) => num === value);
    } else {
      values[j] = newNumber;
      checkIfEqual = values.every((num) => num === newNumber);
    }
    if (checkIfEqual === true) return true;
    values = [...copyArr];
  }
  return false;
}
