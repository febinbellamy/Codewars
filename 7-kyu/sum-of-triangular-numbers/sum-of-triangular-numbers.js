function sumTriangularNumbers(n) {
  if (n <= 0) return 0;
  let sum = 0;
  let addBy = 1;
  let currentNum = 1;
  while(addBy <= n) {
    sum += currentNum;
    addBy++;
    currentNum += addBy;
  }
  return sum;
}