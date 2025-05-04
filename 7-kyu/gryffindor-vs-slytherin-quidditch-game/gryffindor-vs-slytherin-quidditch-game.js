function gameWinners(gryffindor, slytherin) {
    //who has won the game?
  let totalPointsG = gryffindor[0];
  if (gryffindor[1] === 'yes') {
    totalPointsG += 150;
  }
  let totalPointsS = slytherin[0];
  if (slytherin[1] === 'yes') {
    totalPointsS += 150;
  }
  if (totalPointsG > totalPointsS) {
    return "Gryffindor wins!"
  } else if (totalPointsG < totalPointsS) {
    return "Slytherin wins!"
  } else {
    return "It's a draw!"
  }
};