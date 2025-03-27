function battle(x, y) {
  // Lets the battle begin!
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let totalX = 0;
  let totalY = 0;
  for (let char of x) totalX += alphabet.indexOf(char) + 1;
  for (let char of y) totalY += alphabet.indexOf(char) + 1;
  if (totalX > totalY) {
    return x;
  } else if (totalX < totalY) {
    return y;
  } else {
    return "Tie!"
  }
}