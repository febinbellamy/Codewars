/* 
7 kyu

Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

For example, solution(20) should return [5, 2, 1]
*/

function solution(number) {
  let currentMultipleOfThree = 3;
  let currentMultipleOfFive = 5;
  let countMultiplesOfThree = 0;
  let countMultiplesOfFive = 0;
  let countMultiplesOfBoth = 0;

  while (currentMultipleOfThree < number) {
    if (currentMultipleOfThree % 5 === 0) countMultiplesOfBoth++;
    if (currentMultipleOfThree % 5 !== 0) countMultiplesOfThree++;
    currentMultipleOfThree += 3;
  }

  while (currentMultipleOfFive < number) {
    if (currentMultipleOfFive % 3 !== 0) countMultiplesOfFive++;
    currentMultipleOfFive += 5;
  }

  return [countMultiplesOfThree, countMultiplesOfFive, countMultiplesOfBoth];
}
