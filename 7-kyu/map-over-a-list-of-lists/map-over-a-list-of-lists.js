function gridMap(fn,a) {
  const result = [];
  for(let subArr of a) {
    let tempArr = []; 
    for(let currentElem of subArr) {
      tempArr.push(fn(currentElem));
    }
    result.push(tempArr);
  }
  return result;
}