/* 
6 kyu

In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Good luck!
*/

function total(arr) {
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
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(i)) sum += arr[i];
  }
  return sum;
}
