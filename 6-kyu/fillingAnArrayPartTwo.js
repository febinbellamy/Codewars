/* 
6 kyu

Following on from Part 1, part 2 looks at some more complicated array contents.

So let's try filling an array with...

...square numbers
The numbers from 1 to n*n
const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]

...a range of numbers
A range of numbers starting from start and increasing by step
const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]

...random numbers
A bunch of random integers between min and max
const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]

...prime numbers
All primes starting from 2 (obviously)...
const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]

HOTE: All the above functions should take as their first parameter a number that determines the length of the returned array.
*/

const squares = (n) => {
  const result = [];
  let i = 1;
  while (i <= n) {
    result.push(i * i);
    i++;
  }
  return result;
};

const range = (n, start, step) => {
  const result = [];
  let i = start;
  while (result.length !== n) {
    result.push(i);
    i += step;
  }
  return result;
};

const random = (n, min, max) => {
  const result = [];
  let i = min;
  while (result.length !== n) {
    let randInt = Math.floor(Math.random() * (max + 1 - min) + min);
    result.push(randInt);
  }
  return result;
};

const primes = (n) => {
  const isPrime = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  };
  const result = [];
  let i = 2;
  while (result.length !== n) {
    if (isPrime(i)) result.push(i);
    i++;
  }
  return result;
};
