/* 
6 kyu

In a simple memory game (http://en.wikipedia.org/wiki/Concentration_(game)) we need an array containing tiles represented by integers in pairs.

Memory games basics
In the memory game, numbers are randomly placed face-down in a grid. Each turn, the player chooses a number to peek at, and then replace, face down. If they choose two of the same number in a row, those numbers are removed from the grid. The aim is to clear the board!

Your job is to produce an array of pairs of numbers, placed in a random spot in the array.

The array (and result) could look somthing like:
[3,1,2,1,3,2,4,4]
for an 8 tile memory game. (4 pairs). createTiles(8)

Your task is to implement the function createTiles(n) where n is the number of tiles. The function should return an array with the length n containing randomized, paired, integers starting with 1. Duplicate pairs are not allowed.

Special cases:
if n is odd or zero, an empty array should be returned
*/

function createTiles(n) {
  // TODO: Return array of bricks

  if (n === 0 || n % 2 !== 0) return [];

  const arr = [];
  let counter = 1;
  while (counter <= n / 2) {
    arr.push(counter);
    arr.unshift(counter);
    counter++;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return shuffleArray(arr);
}
