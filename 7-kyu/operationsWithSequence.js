/* 
7 kyu

Steps
1. Square the numbers that are greater than zero.
2. Multiply by 3 every third number.
3. Multiply by -1 every fifth number.
4. Return the sum of the sequence.

Example
{ -2, -1, 0, 1, 2 } returns -6

1. { -2, -1, 0, 1 * 1, 2 * 2 }
2. { -2, -1, 0 * 3, 1, 4 }
3. { -2, -1, 0, 1, -1 * 4 }
4. -6

P.S.: The sequence consists only of integers. And try not to use "for", "while" or "loop" statements.
*/

var calc = function (a) {
  const squareNums = a.map((num) => (num > 0 ? num ** 2 : num));
  const multiplyByThree = squareNums.map((num, index) =>
    (index + 1) % 3 === 0 ? num * 3 : num
  );
  const multiplyByNegOne = multiplyByThree.map((num, index) =>
    (index + 1) % 5 === 0 ? num * -1 : num
  );
  return multiplyByNegOne.reduce((a, c) => a + c, 0);
};
