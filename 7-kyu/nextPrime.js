/* 
7 kyu

Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 10^12.

Examples
5   =>  7
12  =>  13
*/

function nextPrime(n) {
  //have fun ^.^
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

  let currentNum = n + 1;
  while (true) {
    if (isPrime(currentNum)) return currentNum;
    currentNum++;
  }
}
