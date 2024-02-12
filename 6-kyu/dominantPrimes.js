/* 
6 kyu

The prime number sequence starts with: 2,3,5,7,11,13,17,19.... Notice that 2 is in position one.

3 occupies position two, which is a prime-numbered position. Similarly, 5, 11 and 17 also occupy prime-numbered positions. We shall call primes such as 3,5,11,17 dominant primes because they occupy prime-numbered positions in the prime number sequence. Let's call this listA.

As you can see from listA, for the prime range range(0,10), there are only two dominant primes (3 and 5) and the sum of these primes is: 3 + 5 = 8.

Similarly, as shown in listA, in the range (6,20), the dominant primes in this range are 11 and 17, with a sum of 28.

Given a range (a,b), what is the sum of dominant primes within that range? Note that a <= range <= b and b will not exceed 500000.

Good luck!
*/

function solve(a, b) {
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

  const primes = [];
  let position = 1;
  for (let num = 0; num <= b; num++) {
    if (isPrime(num)) {
      primes.push({ number: num, position: position });
      position++;
    }
  }

  let indexOfFirstPrimeInRange;
  let index = 0;
  while (index < primes.length) {
    let currentObj = primes[index];
    if (currentObj["number"] >= a) {
      indexOfFirstPrimeInRange = index;
      break;
    }
    index++;
  }

  let sum = 0;
  for (let j = indexOfFirstPrimeInRange; j < primes.length; j++) {
    let currentObj = primes[j];
    if (isPrime(currentObj["position"])) {
      sum += currentObj["number"];
    }
  }
  return sum;
}
