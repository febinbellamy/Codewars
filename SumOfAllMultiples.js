/*
7 kyu

Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

function findSum(n) {

    let sumOfThree = 0;
    let sumOfFive = 0;
    
      for (let i = 3; i <= n; i += 3) {
        if (i % 5 === 0) {
          continue;
        } else {
          sumOfThree += i;
        }
        }
      
      for (let j = 5; j <= n; j += 5) {
          sumOfFive += j;
      }
    
      let sum = sumOfThree + sumOfFive;
      return sum;
}