/* 
7 kyu

In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the alphabetically lowest character. [For Golang return rune]

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'

More examples in test cases. Good luck!
*/

function solve(st) {
  const visited = {};
  const arrOfCharsAndValues = [];
  for (let i = 0; i < st.length; i++) {
    let currentChar = st[i];
    if (!(currentChar in visited)) {
      visited[currentChar] = 1;
      let difference = st.lastIndexOf(currentChar) - st.indexOf(currentChar);
      arrOfCharsAndValues.push({ char: currentChar, value: difference });
    }
  }
  arrOfCharsAndValues.sort((a, b) => {
    if (a.value < b.value) return 1;
    if (a.value > b.value) return -1;
    if (a.char < b.char) return -1;
    if (a.char > b.char) return 1;
  });
  return arrOfCharsAndValues[0]["char"];
}
