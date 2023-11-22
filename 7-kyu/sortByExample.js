function exampleSort(arr, exampleArr) {
  const finalSortedArr = [];
  const visitedNums = {};

  for (let i = 0; i < exampleArr.length; i++) {
    let currentNum = exampleArr[i];
    if (!visitedNums[currentNum]) {
      visitedNums[currentNum] = 1;
      let filteredNums = arr.filter((num) => num === currentNum);
      finalSortedArr.push(...filteredNums);
    }
  }
  return finalSortedArr;
}
