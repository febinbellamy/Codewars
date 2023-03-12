/* 
6 kyu

A twin prime is a prime number that is either 2 less or 2 more than another prime number—for example, either member of the twin prime pair (41, 43). In other words, a twin prime is a prime that has a prime gap of two. Sometimes the term twin prime is used for a pair of twin primes; an alternative name for this is prime twin or prime pair. (from wiki https://en.wikipedia.org/wiki/Twin_prime)

Your mission, should you choose to accept it, is to write a function that counts the number of sets of twin primes from 1 to n.

If n is wrapped by twin primes (n-1 == prime && n+1 == prime) then that should also count even though n+1 is outside the range.

Ex n = 10

Twin Primes are (3,5) (5,7) so your function should return 2!
*/

function twinPrime(n) {
  if (n < 4) return 0;

  const isPrime = (num) => {
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num != 1;
    for (var i = 2; i < sqrtnum + 1; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  };
  let primes = [2];
  let setsOfTwinPrimes = 0;
  let currentNum = 3;

  while (currentNum <= n) {
    if (isPrime(currentNum)) {
      primes.push(currentNum);

      if (currentNum - 2 === primes[primes.length - 2]) {
        setsOfTwinPrimes++;
      }
    }
    currentNum += 1;
  }

  if (isPrime(n + 1) && isPrime(n - 1)) {
    setsOfTwinPrimes++;
  }
  return setsOfTwinPrimes;
}
