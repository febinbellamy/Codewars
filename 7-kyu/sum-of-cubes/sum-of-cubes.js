function sumCubes(n){
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i ** 3;
  }
  return sum;
}