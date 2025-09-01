function sumOfN(n) {
  // insert here your code
  const result = [];
  let total = 0;
  for(let i = 0; i <= Math.abs(n); i++) {
    total = n > 0 ? total + i : total - i;
    result.push(total);
  }
  return result;
}