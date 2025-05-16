const divisions = (n, divisor) => {
  let currentNum = n;
  let result = 0;
  while(currentNum >= divisor) {
    currentNum /= divisor;
    result++;
  }
  return result;
};