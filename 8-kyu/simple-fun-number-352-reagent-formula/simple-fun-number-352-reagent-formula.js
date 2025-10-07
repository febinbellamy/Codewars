function isValid(formulaArray){
  //coding and coding..
  const set = new Set(formulaArray)
  if (set.has(1) && set.has(2) || set.has(3) && set.has(4)) {
    return false;
  }
  if (set.has(5) && !set.has(6) || set.has(6) && !set.has(5) ) {
    return false;
  }
  if (!set.has(7) && !set.has(8)) {
    return false;
  }
  return true;
}