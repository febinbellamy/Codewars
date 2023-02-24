/* 
6 kyu

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

- dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
- dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/

function dup(s) {
  const arr = [];
  let index = 0;
  while (index < s.length) {
    let currentWord = s[index];
    let i = 1;
    let temp = currentWord[0];
    while (i < currentWord.length) {
      let currentChar = currentWord[i];
      if (temp[temp.length - 1] !== currentChar) temp += currentChar;
      i++;
    }
    arr.push(temp);
    index++;
  }
  return arr;
}
