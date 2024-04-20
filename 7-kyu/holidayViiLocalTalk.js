/* 
7 kyu

In Bali, as far as I can gather, when ex-pats speak to locals, they basically insert the word 'Pak' as often as possible. I am assured it means something like 'mate' or 'sir' but that could be completely wrong.

Anyway, as some basic language education(??) this kata requires you to turn any sentence provided (s) into ex-pat balinese waffle by inserting the word 'pak' between every other word. Simple 8kyu :D

Pak should not be the first or last word. Strings of just spaces should return an empty string.
*/

function pak(s) {
  const arrOfWords = s.split(" ");
  if (arrOfWords[0] === "") return "";

  const result = [];
  let index = 0;
  while (index < arrOfWords.length) {
    let currentWord = arrOfWords[index];
    result.push(currentWord);
    if (index !== arrOfWords.length - 1) {
      result.push("pak");
    }
    index++;
  }
  return result.join(" ");
}
