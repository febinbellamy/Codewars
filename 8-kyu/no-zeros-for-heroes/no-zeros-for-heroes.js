function noBoringZeros(n) {
  // your code
  if (n === 0) return 0;
  const strNum = String(n);
  for(let i = strNum.length - 1; i >= 0; i--) {
    if (strNum[i] !== "0") {
      return +(strNum.slice(0, i + 1));
    }
  }
}