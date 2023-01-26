/* 
5 kyu

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:
- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered.

Examples
- scramble('rkqodlw', 'world') ==> True
- scramble('cedewaraaossoqqyt', 'codewars') ==> True
- scramble('katas', 'steak') ==> False
*/

function scramble(str1, str2) {
  const freqObj1 = {};
  const freqObj2 = {};

  for (let i = 0; i < str1.length; i++) {
    let currentElem = str1[i];
    if (freqObj1[currentElem]) {
      freqObj1[currentElem]++;
    } else {
      freqObj1[currentElem] = 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    let currentElem = str2[j];
    if (freqObj2[currentElem]) {
      freqObj2[currentElem]++;
    } else {
      freqObj2[currentElem] = 1;
    }
  }

  for (let key in freqObj2) {
    if (!freqObj1[key]) return false;
    if (freqObj1[key] < freqObj2[key]) return false;
  }
  return true;
}
