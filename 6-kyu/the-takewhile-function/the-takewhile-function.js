function takeWhile (arr, pred) {
  const result = [];
  let index = 0;
  while(index < arr.length) {
    let currentNum = arr[index];
    if (pred(currentNum)) {
      result.push(currentNum);
      index++;
    } else {
      break;
    }
  }
  return result;
}