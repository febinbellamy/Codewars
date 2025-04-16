function inter(s1, s2){
  // ...
  const result = new Set();  
  for(let val of s1) {
    if (s2.has(val)) result.add(val);
  }
  return result;
}