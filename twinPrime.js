/* 
6 kyu

A twin prime is a prime number that differs from another prime number by 2. Write a function named is_twin_prime which takes an int parameter and returns true if it is a twin prime, else false.

Examples
given 5, which is prime
5 + 2 = 7, which is prime 
5 - 2 = 3, which is prime
hence, 5 has two prime twins and it is a Twin Prime.

given 7, which is prime
7 - 2 = 5, which is prime
7 + 2 = 9. which is not prime
hence, 7 has one prime twin, and it is a Twin Prime.

given 9, which is not prime 
hence, 9 is not a Twin Prime

given 953, which is prime
953 - 2 = 951, which is not prime
953 + 2 = 955, which is not prime 
hence, 953 is not a Twin Prime
*/

function isTwinPrime(n) {
  function checkIfPrime(num) {
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

  if (!checkIfPrime(n)) return false;

  if (checkIfPrime(n + 2) || checkIfPrime(n - 2)) {
    return true;
  } else if (checkIfPrime(n + 2) && checkIfPrime(n - 2)) {
    return true;
  } else {
    return false;
  }
}
