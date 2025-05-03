function polydivisible(x) {
  const strNum = String(x);  
  for(let i = 0; i < strNum.length; i++) {
    let currentNum = +(strNum.slice(0, i + 1))
    if (currentNum % (i + 1) !== 0) return false;
  }
  return true;
}