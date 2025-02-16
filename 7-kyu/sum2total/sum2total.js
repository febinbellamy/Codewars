function total(arr) {
  let indexOfNum1 = 0;
  let indexOfNum2 = 1;
  let currentArr = arr.slice(0);
  while(currentArr.length > 1) {
    let tempArr = [];
    while(indexOfNum2 < currentArr.length) {
      let currentNum = currentArr[indexOfNum1];
      let nextNum = currentArr[indexOfNum2];
      let sum = currentNum + nextNum;
      tempArr.push(sum);
      indexOfNum1++;
      indexOfNum2++;
    }
    currentArr = tempArr;
    indexOfNum1 = 0;
    indexOfNum2 = 1;
  }
  return currentArr[0];
}