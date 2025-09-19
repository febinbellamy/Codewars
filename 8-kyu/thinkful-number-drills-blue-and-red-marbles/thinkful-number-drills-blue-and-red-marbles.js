function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // Your code here.
  const remainingBlue = blueStart - bluePulled;
  const remainingRed = redStart - redPulled;
  return remainingBlue/(remainingBlue+remainingRed);
}