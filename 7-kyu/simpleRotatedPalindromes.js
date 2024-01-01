/* 
7 kyu

In this Kata, you will be given a string and your task is to determine if that string can be a palindrome if we rotate one or more characters to the left.

solve("4455") = true, because after 1 rotation, we get "5445" which is a palindrome
solve("zazcbaabc") = true, because after 3 rotations, we get "abczazcba", a palindrome

More examples in test cases. Input will be strings of lowercase letters or numbers only.

Good luck!
*/

function solve(st) {
  //..

  let index = 0;
  let newStr = st;

  while (index < newStr.length) {
    let lastChar = newStr[newStr.length - 1];
    let restOfStr = newStr.slice(0, newStr.length - 1);
    newStr = lastChar + restOfStr;
    if (newStr === newStr.split("").reverse().join("")) return true;
    index++;
  }
  return false;
}
