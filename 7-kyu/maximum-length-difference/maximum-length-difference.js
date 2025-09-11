const mxdiflg = (a1, a2) => {
  const getSmallestAndLargestStr = (arr) => {
    let minLength = Infinity;
    let maxLength = -Infinity;
    for(let str of arr) {
      if (str.length > maxLength) maxLength = str.length;
      if (str.length < minLength) minLength = str.length;
    }
    return [minLength, maxLength];
  }
  if (!a1.length || !a2.length) return -1;
  const [a1Min, a1Max] = getSmallestAndLargestStr(a1);
  const [a2Min, a2Max] = getSmallestAndLargestStr(a2);
  return Math.max(Math.abs(a1Min - a2Max), Math.abs(a1Max - a2Min));
}