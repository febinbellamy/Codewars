function bingo(a) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const bingo = "BINGO";
  const obj = {};
  for(let num of a) {
    obj[alphabet[num - 1]] = true;
  }
  for(let char of bingo) {
    if (!obj[char]) return "LOSE";
  }
  return "WIN";
}