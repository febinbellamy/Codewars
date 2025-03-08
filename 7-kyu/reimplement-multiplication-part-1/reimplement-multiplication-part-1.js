const mul = (a, b) => {
  if (a === 0 || b === 0) return 0;
  let currentTotal = a;
  for(let i = 1; i < b; i++) {
    currentTotal += a;
  }
  return currentTotal;
} 