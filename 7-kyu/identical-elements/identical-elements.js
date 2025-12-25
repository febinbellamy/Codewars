function duplicateElements(m, n) {
  for(let elem of m) {
    if (n.includes(elem)) return true;
  }
  return false;
}
     