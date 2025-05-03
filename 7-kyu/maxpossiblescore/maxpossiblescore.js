function maxPossibleScore(obj, arr) {
  // Good luck.
  let totalScore = 0;
  for(let test in obj) {
    if (arr.includes(test)) {
      totalScore += obj[test] * 2;
    } else {
      totalScore += obj[test];
    }
  }
  return totalScore;
}