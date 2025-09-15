function drawStairs(n) {
  // your code here
  if (n === 0) return "I";
  let numberOfStairsDrawn = 1;
  let stairs = "I";
  let spaces = "";
  while(numberOfStairsDrawn < n) {
    spaces += " ";
    stairs += "\n" + spaces + "I";
    numberOfStairsDrawn++;
  }
  return stairs;
}