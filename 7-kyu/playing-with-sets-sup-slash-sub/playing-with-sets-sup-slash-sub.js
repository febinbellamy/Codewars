function isSubsetOf(s1, s2){
  // ...
  for(let val of s1) if (!s2.has(val)) return false;
  return true;
}
​
function isSupersetOf(s1, s2){
  // ...
  for(let val of s2) if (!s1.has(val)) return false
  return true;
}