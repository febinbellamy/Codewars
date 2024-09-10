/* 
7 kyu

Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

Good luck!
*/

const ultimateReverse = (s) => {
  const reversedArr = s.join("").split("").reverse();
  const result = [];
  let index = 0;

  for (let i = 0; i < reversedArr.length; i++) {
    let currentWord = s[index];
    let reverse = reversedArr.slice(i, i + currentWord.length).join("");
    result.push(reverse);
    index++;
    i += currentWord.length - 1;
  }
  if (s[s.length - 1] === "") result.push("");
  return result;
};
