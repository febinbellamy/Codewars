function symDiff(s1, s2){
  // ...
  const result = new Set();
  for(let val of s1) if (!s2.has(val)) result.add(val)
  for(let val of s2) if (!s1.has(val)) result.add(val)
  return result;
}