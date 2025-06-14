function seqlist(first, c, l) {
  // Thou shalt begin !
  const result = [];
  let currentNum = first;
  let count = 0;
  while(count !== l) {
    result.push(currentNum)
    currentNum += c;
    count++;
  }
  return result;
}