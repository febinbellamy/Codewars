function oracle(gestures) {
  let rockWinningCount = 0;
  let paperWinningCount = 0;
  let scissorWinningCount = 0;
  for(let gesture of gestures) {
    if (gesture === "rock") {
      paperWinningCount++;
      scissorWinningCount--;
    } else if (gesture === "paper") {
      scissorWinningCount++;
      rockWinningCount--;
    } else {
      rockWinningCount++;
      paperWinningCount--;
    }
  }
  if (rockWinningCount <= 0 && paperWinningCount <= 0 && scissorWinningCount <= 0) {
    return "tie";
  }
  let result = "";
  if (rockWinningCount > 0) {
    result += "rock"
  }
  if (paperWinningCount > 0) {
    result += result ? "/paper" : "paper";
  }
  if (scissorWinningCount > 0) {
    result += result ? "/scissors" : "scissors";
  }
  return result;
}