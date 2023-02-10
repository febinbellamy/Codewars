/* 
6 kyu

You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

Be careful about your timing!

Good luck :)
*/

function notPrimes(a, b) {
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

  const finalArr = [];
  let num = a;

  while (num < b) {
    if (!isPrime(num)) {
      let numOfPrimeDigits = num
        .toString()
        .split("")
        .filter((digit) => isPrime(+digit)).length;
      if (num.toString().length === numOfPrimeDigits) {
        finalArr.push(num);
      }
    }
    num += 1;
  }

  return finalArr;
}
