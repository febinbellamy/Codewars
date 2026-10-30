function duplicateSandwich(a) {
  const valuesSeen = {};
  const result = [];
  for(let i = 0; i < a.length; i++) {
    let currValue = a[i]
    if (!valuesSeen.hasOwnProperty(currValue)) {
      valuesSeen[currValue] = i + 1;
    } else {
      result.push(...a.slice(valuesSeen[currValue], i))
    }
  }
  return typeof a === 'string' ? result.join("") : result;
}