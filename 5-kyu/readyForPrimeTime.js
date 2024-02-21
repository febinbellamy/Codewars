/* 
5 kyu

We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

For example,
11 => [2, 3, 5, 7, 11]
*/

function prime(num) {
  // Generate an array containing every prime number between 0 and the num specified (inclusive)

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
  if (num === 1 || num === 0) return [];
  if (num === 2) return [2];

  const primeArray = [2, 3];
  for (let i = 5; i <= num; i += 2) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray;
}
