function squares(x, n) {
  if (n <= 0) return [];
  const result = [x];
  for(let i = 1; i < n; i++) {
    result.push(result[result.length - 1] ** 2)
  }
  return result;
}