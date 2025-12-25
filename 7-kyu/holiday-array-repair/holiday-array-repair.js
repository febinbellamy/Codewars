function holidayCount (a1, a2){
  let numA1;
  let numA2;
  for(let elem of a1) {
    if (/[0-9]/.test(elem)) {
      numA1 = elem;
      break;
    }
  }
  for (let elem of a2) {
    if (/[0-9]/.test(elem)) {
      numA2 = elem;
      break;
    }
  }
  if (!numA1 || !numA2) return "Not possible";
  if (numA1 > numA2) return "Right"
  if (numA1 < numA2) return "Wrong";
  return "Same";
}