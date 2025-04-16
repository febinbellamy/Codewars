function areEqual(s1, s2){
  // ...
  let longerSet = s1.size >= s2.size ? s1 : s2;
  let shorterSet = s1.size >= s2.size ? s2 : s1;
  for(let val of longerSet) {
    if (!shorterSet.has(val)) return false;
  }
  return true
}
​
function notEqual(s1, s2){
  // ...
  let longerSet = s1.size >= s2.size ? s1 : s2;
  let shorterSet = s1.size >= s2.size ? s2 : s1;
  for(let val of longerSet) {
    if (!shorterSet.has(val)) return true;
  }
  return false
}