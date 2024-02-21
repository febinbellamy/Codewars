/* 
7 kyu

Your task is to take a given range and return an array of the prime numbers in that range.

You will write a function with the following parameters:

start is the integer from which your range starts. (inclusive)

end is the integer at which your range ends. (inclusive)

If the range does not contain any prime numbers return null.

Examples:
primes(5, 7)  // [5, 7]
primes(8, 9)  // null
primes(1, 10) // [2, 3, 5, 7]
*/

function primes(start, end) {
  //Your code here
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
  const result = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) result.push(i);
  }
  return result.length > 0 ? result : null;
}
