/* 
7 kyu

Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.
multiples(3, 5.0)

should return
[5.0, 10.0, 15.0]
*/

function multiples(m, n) {
  // code here
  const result = [];
  for (let i = 1; i <= m; i++) {
    result.push(n * i);
  }
  return result;
}
