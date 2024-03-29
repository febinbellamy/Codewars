/* 
6 kyu

You've just recently been hired to calculate scores for a Dart Board game!

Scoring specifications:
0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5

If all radii are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

An empty array should return 0.

Examples:
scoreThrows( [1, 5, 11] )    =>  15
scoreThrows( [15, 20, 30] )  =>  0
scoreThrows( [1, 2, 3, 4] )  =>  140
*/

function scoreThrows(radii) {
  //Return total number of points
  if (radii.length === 0) return 0;
  let totalScore = 0;
  let lessThanFiveCount = 0;
  for (let i = 0; i < radii.length; i++) {
    let currentScore = radii[i];
    if (currentScore < 5) {
      totalScore += 10;
      lessThanFiveCount++;
    } else if (currentScore >= 5 && currentScore <= 10) {
      totalScore += 5;
    }
  }
  if (lessThanFiveCount === radii.length) {
    totalScore += 100;
  }

  return totalScore;
}
