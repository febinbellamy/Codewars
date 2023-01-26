/* 
6 kyu

Write a function that given two strings determines if they differ by exactly one character.

The difference may consist of one charater being added, removed or replaced, in which case the function must return true. In all other cases it must return false.

Examples:

tower / towe -> true
tower / towner -> true
tower / bower -> true
tower / token -> false
tower / tower -> false
*/

function oneCharDifference(s1, s2) {
  // your code here

  if (s1 === s2) return false;

  const s1Arr = s1.split("");
  const s2Arr = s2.split("");

  if (s1Arr.length === s2Arr.length) {
    for (let j = 0; j < s1Arr.length; j++) {
      if (s1Arr[j] !== s2Arr[j]) {
        s1Arr[j] = s2Arr[j];
        if (s1Arr.join("") === s2Arr.join("")) return true;
        return false;
      }
    }
  }

  let longestLengthArr;
  let shortestLengthArr;

  if (s1Arr.length > s2Arr.length) {
    longestLengthArr = s1Arr;
    shortestLengthArr = s2Arr;
  } else if (s1Arr.length < s2Arr.length) {
    longestLengthArr = s2Arr;
    shortestLengthArr = s1Arr;
  }

  let counter = 0;

  for (let i = 0; i < longestLengthArr.length; i++) {
    let currentCharS1 = s1Arr[i];
    let currentCharS2 = s2Arr[i];
    if (currentCharS1 !== currentCharS2) {
      shortestLengthArr.splice(i, 0, longestLengthArr[i]);
      if (shortestLengthArr.join("") === longestLengthArr.join("")) return true;
      return false;
    }
  }
  return false;
}
