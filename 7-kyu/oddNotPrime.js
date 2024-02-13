/* 
7 kyu

For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2
*/

function oddNotPrime(n) {
  //your code here
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

  let count = 0;
  let currentNum = n;
  while (currentNum >= 1) {
    if (currentNum % 2 !== 0 && !isPrime(currentNum)) {
      count++;
    }
    currentNum--;
  }

  return count;
}
