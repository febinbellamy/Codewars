/* 
7 kyu

Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

Examples
9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9"
*/

const findSquares = (num) => {
  let counter = 1;
  let nextCounter;
  let bigger;
  let smaller;

  while (!bigger && !smaller) {
    nextCounter = counter + 1;
    if (nextCounter ** 2 - counter ** 2 === num) {
      bigger = nextCounter ** 2;
      smaller = counter ** 2;
    }
    counter++;
  }
  return `${bigger}-${smaller}`;
};
