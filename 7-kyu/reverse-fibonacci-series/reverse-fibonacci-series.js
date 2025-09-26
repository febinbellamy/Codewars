function reverseFibo(n){
  // insert your code here
  const fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  if (n <= 13) {
    return fibSequence.slice(0, n).reverse().join('');
  }
  for(let i = 12; i < n - 1; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i]);
  }
  return fibSequence.reverse().join('');
}