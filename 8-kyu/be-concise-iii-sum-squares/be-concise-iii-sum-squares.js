function sumSquares(array) {
  return array.map((num) => num ** 2).reduce((a,c) => a+c,0);
}