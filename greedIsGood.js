/* 
5 kyu

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

 A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

 In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

function score(dice) {
  const frequencyObj = {};
  for (let die of dice) {
    if (frequencyObj[die]) {
      frequencyObj[die]++;
    } else {
      frequencyObj[die] = 1;
    }
  }

  let totalPoints = 0;
  for (let key in frequencyObj) {
    if (key === "1") {
      // if its 2 or 1..add them to the
      if (frequencyObj[key] >= 3) {
        totalPoints += 1000;
        let remainingFreq = frequencyObj[key] - 3;
        totalPoints += 100 * remainingFreq;
      } else {
        totalPoints += 100 * frequencyObj[key];
      }
    } else if (key === "6") {
      if (frequencyObj[key] >= 3) {
        totalPoints += 600;
      }
    } else if (key === "5") {
      if (frequencyObj[key] >= 3) {
        totalPoints += 500;
        let remainingFreq = frequencyObj[key] - 3;
        totalPoints += 50 * remainingFreq;
      } else {
        totalPoints += 50 * frequencyObj[key];
      }
    } else if (key === "4") {
      if (frequencyObj[key] >= 3) {
        totalPoints += 400;
      }
    } else if (key === "3") {
      if (frequencyObj[key] >= 3) {
        totalPoints += 300;
      }
    } else if (key === "2") {
      if (frequencyObj[key] >= 3) {
        totalPoints += 200;
      }
    }
  }
  return totalPoints;
}
