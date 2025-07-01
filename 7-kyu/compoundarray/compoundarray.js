function compoundArray(a, b) {
  const result = [];  
  let index = 0;
  while (index < a.length) {
    let currentElemA = a[index];
    let currentElemB = b[index];
    if (currentElemA === undefined || currentElemB === undefined) break;
    result.push(currentElemA, currentElemB);
    index++;
  }
  if (a.length < b.length) {
    result.push(...b.slice(index))
  } else if (a.length > b.length) {
    result.push(...a.slice(index))
  } 
  return result;
}