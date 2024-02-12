/* 
7 kyu

Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function which returns true if x & y are sexy, false otherwise.

Examples
5, 11   -->  true
61, 67  -->  true
7, 13   -->  true
5, 7    -->  false
1, 7    -->  false  (1 is not a prime)

Note: x & y are always positive integers, but they are not always in order of precendence... For example you can be given either (5, 11) or (11, 5) - both are valid.
*/

function sexy_prime(x, y) {
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
  return isPrime(x) && isPrime(y) && Math.abs(x - y) === 6;
}
