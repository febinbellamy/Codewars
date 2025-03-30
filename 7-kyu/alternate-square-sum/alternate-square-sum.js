function alternateSqSum(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += i % 2 !== 0 ? arr[i] ** 2 : arr[i];
  }
  return sum;
}