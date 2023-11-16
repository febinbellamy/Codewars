function differenceOfSquares(n) {
  // ...

  let num = 1;
  let sumOfNums = 0;
  let sumOfSquaresOfNums = 0;

  while (num <= n) {
    sumOfNums += num;
    sumOfSquaresOfNums += num ** 2;
    num++;
  }
  return sumOfNums ** 2 - sumOfSquaresOfNums;
}
