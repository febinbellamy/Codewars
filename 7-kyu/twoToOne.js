/* 
7 kyu

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  // your code
  let longestString = "";

  for (let char of s1)
    if (longestString.indexOf(char) === -1) longestString += char;
  for (let char of s2)
    if (longestString.indexOf(char) === -1) longestString += char;

  return longestString.split("").sort().join("");
}
