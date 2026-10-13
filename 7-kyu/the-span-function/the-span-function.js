function span(arr, predicate) {
  // Your Oscar-nominated code goes here.
  let firstArr = [];
  let secondArr = [];
  for(let i=0; i < arr.length; i++) {
    let num = arr[i];
    if (predicate(num)) {
      firstArr.push(num)
    } else {
      secondArr = arr.slice(i);
      break;
    }
  }
  return [firstArr, secondArr];
}