/* 
6 kyu

Three candidates take part in a TV show.

In order to decide who will take part in the final game and probably become rich, they have to roll the Wheel of Fortune!

The Wheel of Fortune is divided into 20 sections, each with a number from 5 to 100 (only mulitples of 5).

Each candidate can roll the wheel once or twice and sum up the score of each roll. The winner one that is closest to 100 (while still being lower or equal to 100). In case of a tie, the candidate that rolled the wheel first wins.

You receive the information about each candidate as an array of objects: each object should have a name and a scores array with the candidate roll values.

Your solution should return the name of the winner or false if there is no winner (all scored more than 100).

Example:
var c1 = { name: "Bob", scores: [10, 65] };
var c2 = { name: "Bill", scores: [90, 5] };
var c3 = { name: "Charlie", scores: [40, 55] };
winner([c1, c2, c3]); // Returns "Bill"

Please note that inputs may be invalid: in this case, the function should return false.

Potential errors derived from the specifications are:
- More or less than three candidates take part in the game.
- A candidate did not roll the wheel or rolled it more than twice.
- Scores are not valid.
- Invalid user entry (no name or no score).
*/

function winner(candidates) {
  if (candidates.length !== 3) return false;

  let currentWinnerName;
  let currentWinnerSum;

  for (let i = 0; i < candidates.length; i++) {
    let currentCandidateObj = candidates[i];
    let scores = currentCandidateObj["scores"];
    let name = currentCandidateObj["name"];

    if (!scores || scores.length === 0 || !name || scores.length > 2)
      return false;
    let checkScores = scores.filter(
      (num) => num % 5 === 0 && num >= 5 && num <= 100
    );
    if (checkScores.length !== scores.length) return false;

    let sum = checkScores.reduce((a, c) => a + c, 0);
    if (sum <= 100) {
      if (
        (!currentWinnerSum && !currentWinnerName) ||
        Math.abs(sum - 100) < Math.abs(currentWinnerSum - 100)
      ) {
        currentWinnerName = name;
        currentWinnerSum = sum;
      }
    }
  }
  return currentWinnerName ? currentWinnerName : false;
}
