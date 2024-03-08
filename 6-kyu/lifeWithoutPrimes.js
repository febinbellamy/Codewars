/* 
6 kyu

Consider an array that has no prime numbers, and none of its elements has any prime digit. It would start with: [1,4,6,8,9,10,14,16,18,40,44..].

12 and 15 are not in the list because 2 and 5 are primes.

You will be given an integer n and your task will be return the number at that index in the array. For example:

solve(0) = 1
solve(2) = 6

More examples in the test cases.

Good luck!

If you like Prime Katas, you will enjoy this Kata: Simple Prime Streaming
*/

function solve(n) {
  //..
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

  const noPrimes = [];
  let currentNumToCheck = 1;
  while (noPrimes.length - 1 < n) {
    if (isPrime(currentNumToCheck) === false) {
      let strNum = currentNumToCheck.toString();
      if (strNum.length === 1) {
        noPrimes.push(currentNumToCheck);
      } else {
        let nonPrimeDigits = strNum
          .split("")
          .filter((digit) => isPrime(+digit) === false);
        if (nonPrimeDigits.length === strNum.length) {
          noPrimes.push(currentNumToCheck);
        }
      }
    }
    currentNumToCheck++;
  }
  return noPrimes[noPrimes.length - 1];
}
