/* 
8 kyu

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
Goodluck :)
*/

function nearestSq(n) {
  // your code

  // edge case: if n is a square num, return it.
  if (Math.sqrt(n) === parseInt(Math.sqrt(n))) return n;

  // find the nearest square num greater than N;
  let count = n + 1;
  let nearestSquareNumGreaterThanN;

  while (!nearestSquareNumGreaterThanN) {
    if (Math.sqrt(count) === parseInt(Math.sqrt(count))) {
      nearestSquareNumGreaterThanN = count;
    }
    count++;
  }

  // find the nearest square num less than N;
  let nearestSquareNumLessThanN;
  let counter = n - 1;

  while (!nearestSquareNumLessThanN && counter > 0) {
    if (Math.sqrt(counter) === parseInt(Math.sqrt(counter))) {
      nearestSquareNumLessThanN = counter;
    }
    counter--;
  }

  // return the square num closest to N;
  if (
    Math.abs(n - nearestSquareNumLessThanN) <
    Math.abs(n - nearestSquareNumGreaterThanN)
  ) {
    return nearestSquareNumLessThanN;
  } else {
    return nearestSquareNumGreaterThanN;
  }
}