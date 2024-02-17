/* 
6 kyu

When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
What's a reversible prime? That is: A prime, reverse all the digits, get a new number. If the new number is also a prime, then it is a reversible prime .

We can get a sequence of reversible prime:
n(start from 0)  --> 0 1 2 3 4  5  6  7  8  .....
reversible prime --> 2 3 5 7 11 13 17 31 37 .....

Task
Complete function reversiblePrime. Function accept argument n(a integer, 0 <= n <= 10000). Returns the n-th reversible prime.

Some examples:
reversiblePrime(0) === 2
reversiblePrime(1) === 3 
reversiblePrime(5) === 13 
reversiblePrime(10) === 73 
reversiblePrime(20) === 167 
reversiblePrime(100) === 1669 
*/

function reversiblePrime(n) {
  const maxPrime = 9_007_199_254_740_881;
  const dividers = [
    0, 2, 6, 8, 12, 18, 20, 26, 30, 32, 36, 42, 48, 50, 56, 60, 62, 68, 72, 78,
    86, 90, 92, 96, 98, 102, 110, 116, 120, 126, 128, 132, 138, 140, 146, 152,
    156, 158, 162, 168, 170, 176, 180, 182, 186, 188, 198, 200,
  ];

  function isPrime(x) {
    if (isNaN(x) || x < 2 || x > maxPrime || x % 1) {
      return false;
    }
    if (x % 2 === 0) return x === 2;
    if (x % 3 === 0) return x === 3;
    if (x % 5 === 0) return x === 5;
    if (x % 7 === 0) return x === 7;
    const m = Math.sqrt(x);
    for (let i = 11; i <= m; i += 210) {
      for (const a of dividers) {
        if (x % (i + a) === 0) {
          return i + a === x;
        }
      }
    }
    return true;
  }

  const reversablePrimes = [2, 3, 5, 7, 11, 13, 17, 31, 37];
  const primes = {};
  let currentNum = 39;
  while (reversablePrimes.length < n + 1) {
    let strNum = currentNum.toString();
    if (isPrime(currentNum)) {
      primes[strNum] = true;
      let reversedNum = +strNum.split("").reverse().join("");
      if (!primes[reversedNum]) {
        if (isPrime(reversedNum)) {
          primes[reversedNum] = true;
          reversablePrimes.push(currentNum);
        }
      } else if (primes[reversedNum]) {
        reversablePrimes.push(currentNum);
      }
    }
    currentNum += 2;
  }
  return reversablePrimes[n];
}
