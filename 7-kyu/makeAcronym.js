/* 
7 kyu

Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:
1. split string to words by space char
2. take every first letter from word in given string
3. uppercase it
4. join them toghether

Eg:
Code wars -> C, w -> C W -> CW

Note: There will be at least two words in the given string!
*/

function toAcronym(inp) {
  // ...
  return inp
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}
