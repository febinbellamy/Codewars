/* 
6 kyu

You're playing to scrabble. But counting points is hard.

You decide to create a little script to calculate the best possible value.

The function takes two arguments:
- `points` : an array of integer representing for each letters from A to Z the points that it pays
- `words` : an array of strings, uppercase

You must return the index of the shortest word which realize the highest score.

If the length and the score are the same for two elements, return the index of the first one.
*/

function getBestWord(points, words) {
  //Return the shortest word realizing the best score

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const arrOfObjs = [];

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let totalscoreForWord = currentWord
      .split("")
      .map((char) => points[alphabet.indexOf(char)])
      .reduce((a, c) => a + c, 0);
    let tempObj = {
      length: currentWord.length,
      score: totalscoreForWord,
      index: i,
    };
    arrOfObjs.push(tempObj);
  }

  arrOfObjs.sort((a, b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
  });
  return arrOfObjs[0]["index"];
}
