/* 
6 kyu

Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below:

[number pure odd digit primes below n, largest pure odd digit prime smaller than n, smallest pure odd digit prime higher than n]

Let's see some cases:

only_oddDigPrimes(20) ----> [7, 19, 31]
///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
19, because is the nearest prime of this type to 20
31, is the first pure odd digit that we encounter after 20///

only_oddDigPrimes(40) ----> [9, 37, 53]

In the case that n, the given value, is a pure odd prime, should be counted with the found primes and search for the immediately below and the immediately after.

Happy coding!!
*/

function onlyOddDigPrimes(n) {
  // Your code

  function checkIfNumIsPrime(num) {
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

  let checkDigitsForNum = n;
  let strNumArr;
  let numberOfPureOddDigitPrimesBelowN = 0;
  let nearestPrime;

  while (checkDigitsForNum > 1) {
    if (checkIfNumIsPrime(checkDigitsForNum)) {
      strNumArr = checkDigitsForNum
        .toString()
        .split("")
        .filter((num) => +num % 2 !== 0);
      if (strNumArr.length === checkDigitsForNum.toString().length) {
        numberOfPureOddDigitPrimesBelowN++;
        if (!nearestPrime) {
          nearestPrime = checkDigitsForNum;
        } else {
          nearestPrime = Math.max(nearestPrime, checkDigitsForNum);
        }
      }
    }
    checkDigitsForNum--;
  }

  let smallestPureOddDigitPrimeLargerThanN;
  let counter = n;
  let strArr;

  while (!smallestPureOddDigitPrimeLargerThanN) {
    if (checkIfNumIsPrime(counter)) {
      strArr = counter
        .toString()
        .split("")
        .filter((num) => +num % 2 !== 0);
      if (strArr.length === counter.toString().length) {
        smallestPureOddDigitPrimeLargerThanN = counter;
      }
    }
    counter++;
  }
  return [
    numberOfPureOddDigitPrimesBelowN,
    nearestPrime,
    smallestPureOddDigitPrimeLargerThanN,
  ];
}
