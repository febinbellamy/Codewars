/* 
6 kyu

In this Kata, you will be given a number and your task will be to return the nearest prime number.

solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one. 
solve(125) = 127

We'll be testing for numbers up to 1E10. 500 tests.

More examples in test cases.

Good luck!
*/

function solve(n) {
  //..

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

  if (isPrime(n)) return n;

  let nearestPrimeLowerThanNum = n - 1;
  let nearestPrimeHigherThanNum = n + 1;

  while (!isPrime(nearestPrimeLowerThanNum)) nearestPrimeLowerThanNum--;
  while (!isPrime(nearestPrimeHigherThanNum)) nearestPrimeHigherThanNum++;

  let differenceLower = Math.abs(n - nearestPrimeLowerThanNum);
  let differenceHigher = Math.abs(n - nearestPrimeHigherThanNum);
  return differenceLower <= differenceHigher
    ? nearestPrimeLowerThanNum
    : nearestPrimeHigherThanNum;
}
