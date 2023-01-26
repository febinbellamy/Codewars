/* 
7 kyu

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

function removeDuplicateWords(s) {
  // your perfect code...

  const wordsArr = s.split(" ");
  const finalArr = [];

  for (let word of wordsArr) {
    if (finalArr.indexOf(word) < 0) {
      finalArr.push(word);
    }
  }
  return finalArr.join(" ");
}
