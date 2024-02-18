/* 
5 kyu

Find all primes between 1 and n

Return array of primes. Yep.. that's all.

Warning: test requires you to generate all primes between 1 and 20 million without timing out.
*/

var primeList = function (top) {
  //gets upper limit (inclusive)

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
  const primes = [2, 3];
  for (let i = 5; i <= top; i += 2) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
};
