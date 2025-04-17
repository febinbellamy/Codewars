function union(s1, s2){
  //...
  const result = new Set();
  for(let val of s1) result.add(val);
  for(let val of s2) result.add(val);
  return result;
}