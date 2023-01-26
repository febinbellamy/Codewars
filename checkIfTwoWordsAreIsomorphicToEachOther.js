/* 
6 kyu

Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a to every character of b. And all occurrences of every character in a map to same character in b.

Task
In this kata you will create a function that return True if two given strings are isomorphic to each other, and False otherwise. Remember that order is important.

Your solution must be able to handle words with more than 10 characters.

Example
True:
- CBAABC DEFFED
- XXX YYY
- RAMBUNCTIOUSLY THERMODYNAMICS

False:
- AB CC
- XXY XYY
- ABAB CD
*/

function isomorph(a, b) {
  if (a.length !== b.length) return false;

  let finalStringA = "";
  let strA = "";
  let currentNumA = 1;

  for (let i = 0; i < a.length; i++) {
    let currentChar = a[i];

    if (!strA.includes(currentChar)) {
      strA += currentChar;
      finalStringA += currentNumA;
      currentNumA++;
    } else {
      strA += currentChar;
      let num = finalStringA[strA.indexOf(currentChar)];
      finalStringA += num;
    }
  }

  let currentNumB = 1;
  let finalStringB = "";
  let strB = "";

  for (let j = 0; j < b.length; j++) {
    let currentChar = b[j];

    if (!strB.includes(currentChar)) {
      strB += currentChar;
      finalStringB += currentNumB;
      currentNumB++;
    } else {
      strB += currentChar;
      let num = finalStringB[strB.indexOf(currentChar)];
      finalStringB += num;
    }
  }
  return finalStringB === finalStringA;
}
