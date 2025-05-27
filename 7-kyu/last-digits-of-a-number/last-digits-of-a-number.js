function lastDigit(n, d) {
  if (d <= 0) return [];
  const digits = String(n);
  const result = [];
  let count = 0;
  for(let i = digits.length - 1; i >= 0; i--) {
    let currentDigit = digits[i];
    result.unshift(+currentDigit)
    count++;
    if (count === d) return result;
  }
  return result;
}