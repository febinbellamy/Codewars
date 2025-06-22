function sum(matrix) {
  let sum = 0;
  if (matrix.length === 0) return sum;
  
  let leftPointer = 0;
  let rightPointer = matrix[0].length - 1;
  while(leftPointer < matrix[0].length) {
    let currentArr = matrix[leftPointer];
    let elem1 = matrix[leftPointer][leftPointer];
    let elem2 = matrix[leftPointer][rightPointer];
    sum += elem1 + elem2;
    leftPointer++;
    rightPointer--;
  }
  return sum;
}