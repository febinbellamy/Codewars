function diagonalSum(matrix){
  //...
  let sum = 0;
  for(let i = 0; i < matrix.length; i++) {
    let currentSubArr = matrix[i];
    sum += currentSubArr[i];
  }
  return sum;
}