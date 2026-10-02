function squareIt(int) {
  const strInt = String(int);
  const sqrRoot = Math.sqrt(strInt.length);
  if (!Number.isInteger(sqrRoot)) return "Not a perfect square!";
  let result = "";
  for(let i = 0; i < strInt.length; i++) {
    result += strInt[i];
    if ((i + 1) % sqrRoot === 0 && i !== strInt.length - 1) {
      result += "\n";
    }
  }
  return result;
}