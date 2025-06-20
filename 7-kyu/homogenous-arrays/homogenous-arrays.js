function filterHomogenous(arrays) {
  // Alea iacta est, code legionary!
  const output = [];
  for(let i = 0; i < arrays.length; i++) {
    let currentArr = arrays[i];
    if (currentArr.length > 0) {
      const isHomogenous = currentArr.every((elem) => typeof elem === typeof currentArr[0]);
      if (isHomogenous) {
        output.push(currentArr)
      }
    }
  }
  return output;
}