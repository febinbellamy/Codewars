/* 
6 kyu

Complete function findOutPrime, accept a number n(n>0), return the largest prime part in n(return a number, not a string).

If prime part is not found, return null.

Examples
findOutPrime(12)  === 2
findOutPrime(123)  === 23
findOutPrime(121)  === 2
findOutPrime(1234)  === 23
findOutPrime(13579)  === 79
findOutPrime(24680)  === 2
findOutPrime(10)  === null
*/

function findOutPrime(n) {
  //coding here...
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

  let largestPrimePart = null;
  let strNum = n.toString();
  let pointer1 = 0;

  while (pointer1 < strNum.length) {
    let currentNum = strNum[pointer1];
    if (isPrime(+currentNum)) {
      if (largestPrimePart === null || +currentNum > largestPrimePart) {
        largestPrimePart = +currentNum;
      }
    }
    if (pointer1 === strNum.length - 1) break;

    let pointer2 = pointer1 + 1;
    while (pointer2 < strNum.length) {
      currentNum = +strNum.slice(pointer1, pointer2 + 1);
      if (isPrime(+currentNum)) {
        if (largestPrimePart === null || +currentNum > largestPrimePart) {
          largestPrimePart = +currentNum;
        }
      }
      pointer2++;
    }
    pointer1++;
  }
  return largestPrimePart;
}
