/* 
7 kyu

Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!
*/

const sumSquareEvenRootOdd = (ns) => {
  // your code goes here
  const newList = ns.map((num, i) =>
    num % 2 === 0 ? num ** 2 : Math.sqrt(num)
  );
  const sum = newList.reduce((a, c) => a + c, 0);
  return Math.round(sum * 100) / 100;
};
