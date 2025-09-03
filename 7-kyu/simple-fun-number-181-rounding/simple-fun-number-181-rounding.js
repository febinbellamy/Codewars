function rounding(n, m) {
  //coding and coding..
  let currentMultiple = m;
  while(currentMultiple < n) {
    currentMultiple += m;
  } 
  const smallerThanN = n - (currentMultiple - m);
  const largerThanN = currentMultiple - n;
  if (smallerThanN === largerThanN) { 
    return n;
  }
  return smallerThanN < largerThanN ? currentMultiple - m : currentMultiple;
}