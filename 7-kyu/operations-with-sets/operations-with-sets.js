function process2Arrays(arr1, arr2) {
  const set1 = new Set(Array.from(arr1))
  const set2 = new Set(Array.from(arr2))
  let numOfElementsInBoth = 0;
  let numOfElementsOnlyInOne = 0;
  for(let value of set1) {
    set2.has(value) ? numOfElementsInBoth++ : numOfElementsOnlyInOne++;
  }
  for(let value of set2) { 
    if (set1.has(value) === false) numOfElementsOnlyInOne++;
  }
  const remainingElemsInArr1 = set1.size - numOfElementsInBoth;
  const remainingElemsInArr2 = set2.size - numOfElementsInBoth;
  return [numOfElementsInBoth, numOfElementsOnlyInOne, remainingElemsInArr1, remainingElemsInArr2]
}