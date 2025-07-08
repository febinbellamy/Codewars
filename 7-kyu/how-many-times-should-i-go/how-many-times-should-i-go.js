function howManyTimes(annualPrice, individualPrice) {
  // code here
  if (individualPrice === 0) return Infinity;
  let count = 1;
  let currentNum = individualPrice;
  while(currentNum < annualPrice) {
    currentNum += individualPrice;
    count++;
  }
  return count;
}