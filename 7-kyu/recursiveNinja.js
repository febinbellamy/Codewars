/* 
7 kyu

Ninjas frequently need to signal each other in code, often employing natural sounds as a cover. We’re going to give our ninja the ability to chirp like a cricket, with the number of chirps encoding different messages.

Implement a "recursive function" that takes one parameter (n) and outputs a string i.e.
chirp(4);
output would be chirp-chirp-chirp-chirp.

javascript/coffescript: don't use the String method .repeat(), write a recursive function, remember you're a Ninja!
*/

function chirp(n, str = "") {
  // base case
  if (n === 0) {
    return str;
  }
  str += `chirp${n === 1 ? "" : "-"}`;
  return chirp(n - 1, str);
}
