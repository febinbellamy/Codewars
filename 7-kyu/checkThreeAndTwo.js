/* 
7 kyu

Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

function checkThreeAndTwo(array) {
  //your code here
  const freqObj = {};
  for (let i = 0; i < array.length; i++) {
    let currentElem = array[i];
    if (currentElem in freqObj) {
      freqObj[currentElem]++;
    } else {
      freqObj[currentElem] = 1;
    }
  }
  const values = Object.values(freqObj).sort((a, b) => a - b);
  return values[0] === 2 && values[1] === 3;
}
