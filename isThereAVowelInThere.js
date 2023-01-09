/* 
8 kyu

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel. Return the resulting array.
*/

function isVow(a) {
  const codeA = "a".charCodeAt(0);
  const codeE = "e".charCodeAt(0);
  const codeI = "i".charCodeAt(0);
  const codeO = "o".charCodeAt(0);
  const codeU = "u".charCodeAt(0);

  const arr = [codeA, codeE, codeI, codeO, codeU];

  for (let i = 0; i < a.length; i++) {
    if (arr.indexOf(a[i]) > -1) {
      let indexOf = arr.indexOf(a[i]);
      let charCode = arr[indexOf];
      a[i] = String.fromCharCode(charCode);
    }
  }
  return a;
}
