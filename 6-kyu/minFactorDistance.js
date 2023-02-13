/* 
6 kyu

Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

Example:

13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

Hence the asnwer will be 2 (=13-11)
*/

function minDistance(n) {
  const factors = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) factors.push(i);

  const distances = [];
  let pointer1 = 0;
  let pointer2 = 1;
  while (pointer2 < factors.length) {
    let distance = Math.abs(factors[pointer1] - factors[pointer2]);
    distances.push(distance);
    pointer1++;
    pointer2++;
  }
  return Math.min(...distances);
}
