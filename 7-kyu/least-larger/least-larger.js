const leastLarger = (arrOfNums,index) => {
  const elemAtIndex = arrOfNums[index];
  let smallestNumLargerThanElem = Infinity;
  let finalIndex = -1;
  for(let i = 0; i < arrOfNums.length; i++) {
    let currentNum = arrOfNums[i];
    if (currentNum > elemAtIndex && currentNum < smallestNumLargerThanElem) {
      finalIndex = i;
      smallestNumLargerThanElem = currentNum;
    }
  }
  return finalIndex;
}