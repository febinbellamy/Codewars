function binaryCleaner(arr) {
  const numsLessThanTwo = [];
  const numsGreaterThanOne = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum < 2) {
      numsLessThanTwo.push(currentNum)
    } else if (currentNum > 1) {
      numsGreaterThanOne.push(i)
    }
  }
  return [numsLessThanTwo, numsGreaterThanOne]
}