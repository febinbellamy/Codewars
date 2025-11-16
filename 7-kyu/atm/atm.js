const solve = (n) => {
  const values = [500, 200, 100, 50, 20, 10];
  let minNumOfBanknotesNeeded = 0;
  let currentDollars = n;
  for(let value of values) {
    let numOfCurrentValue = parseInt(currentDollars / value);
    if (numOfCurrentValue > 0) {
      currentDollars -= value * numOfCurrentValue;
      minNumOfBanknotesNeeded += numOfCurrentValue;
    }
  }
  return !currentDollars ? minNumOfBanknotesNeeded : -1;
}