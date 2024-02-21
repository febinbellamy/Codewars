/* 
7 kyu

Code a function which will return an array with all prime numbers smaller than or equal to an arbitrary parameter "n".

Assume that all parameters will be numbers.

Remember that in some test cases with a big enough "n", performance might be (more) important.
*/

var primeArray = function (n) {
  function isPrime(num) {
    if (num <= 0) return false;
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num != 1;
    for (let i = 2; i < sqrtnum + 1; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }
  if (n === 1) return [];
  if (n === 2) return [2];

  const primeArray = [2, 3];
  for (let i = 5; i <= n; i += 2) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray;
};
