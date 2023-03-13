/* 
6 kyu

Define a "prime prime" number to be a rational number written as one prime number over another prime number: primeA / primeB (e.g. 7/31)

Given a whole number N / n, generate the number of "prime prime" rational numbers less than 1, using only prime numbers between 0 and N / n(non inclusive).

Return the count of these "prime primes", and the integer part of their sum.

Example
N = 6

// The "prime primes" less than 1 are:
2/3, 2/5, 3/5               // count: 3

2/3 + 2/5 + 3/5 = 1.6667    // integer part: 1

Thus, the function should return [3, 1].
*/

const primePrimes = (n) => {
  //

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

  const primes = [];
  let currentNum = 1;

  while (currentNum < n) {
    if (isPrime(currentNum)) {
      primes.push(currentNum);
    }
    currentNum++;
  }
  let pointer1 = 0;
  let pointer2 = 1;

  let primePrimesCounter = 0;
  let sum = 0;

  while (pointer1 < primes.length - 1) {
    let pointer1Num = primes[pointer1];

    while (pointer2 < primes.length) {
      let pointer2Num = primes[pointer2];
      sum += pointer1Num / pointer2Num;
      primePrimesCounter++;
      pointer2++;
    }

    pointer1++;
    pointer2 = pointer1 + 1;
  }
  return [primePrimesCounter, parseInt(sum)];
};
