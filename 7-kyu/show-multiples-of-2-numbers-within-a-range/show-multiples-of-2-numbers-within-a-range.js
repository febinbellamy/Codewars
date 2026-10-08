function multiples(a, b, limit) {
  const count = {};
  for(let i = a; i <= limit; i += a) {
    count[i] = i in count ? count[i] + 1 : 1;
  }
   for(let j = b; j <= limit; j += b) {
     count[j] = j in count ? count[j] + 1 : 1;
  }
  const result = [];
  for(let num in count) {
    if (count[num] === 2) {
      result.push(+num);
    }
  }
  return result;
}