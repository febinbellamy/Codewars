/* 
6 kyu

We need a function prime_bef_aft() that gives the largest prime below a certain given value n,

befPrime or bef_prime (depending on the language),

and the smallest prime larger than this value,

aftPrime/aft_prime (depending on the language).

The result should be output in a list like the following: primeBefAft == [befPrime, aftPrime]

If n is a prime number it will give two primes, n will not be included in the result.

Let's see some cases:
primeBefAft(100) == [97, 101]
primeBefAft(97) == [89, 101]
primeBefAft(101) == [97, 103]

Range for the random tests: 1000 <= n <= 200000

(The extreme and special case n = 2 will not be considered for the tests. Thanks Blind4Basics)

Happy coding!!
*/

function primeBefAft(num) {
  // your code

  const isPrime = (num) => {
    let sqrtnum = Math.floor(Math.sqrt(num));
    let prime = num != 1;
    for (let i = 2; i < sqrtnum + 1; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  };

  let nearestPrimeLowerThanNum = num - 1;
  let nearestPrimeHigherThanNum = num + 1;

  while (!isPrime(nearestPrimeLowerThanNum)) nearestPrimeLowerThanNum--;
  while (!isPrime(nearestPrimeHigherThanNum)) nearestPrimeHigherThanNum++;

  return [nearestPrimeLowerThanNum, nearestPrimeHigherThanNum];
}
