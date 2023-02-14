/* 
6 kyu

In this Kata you will be given an array (or another language-appropriate collection) representing contestant ranks. You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.

During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. This goes on until one contestant only is left. If the number of contestants is odd, the last one of the current array becomes the first of the next round.

At the end of the competition, return the results of all the rounds in the form of array of arrays.

Example:
input = [9, 5, 4, 7, 6, 3, 8, 2];

output = [
  [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
  [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2 
  [9, 8],                    // results of 9 vs 7 and 6 vs 8
  [9]                        // results of 9 vs 8
];

Notes:
- Array length will alway be >= 2 and <= 100
- Elements of the array will always be >=1 and <= 100
- Input must not be altered.
*/

const tourney = (array) => {
  let pointer1 = 0;
  let pointer2 = 1;
  const results = [[...array]];
  let tempArr = [];
  let copyOfArr = [...array];

  while (copyOfArr.length !== 1) {
    let contestant1 = copyOfArr[pointer1];
    let contestant2 = copyOfArr[pointer2];

    if (contestant1 > contestant2) {
      tempArr.push(contestant1);
    } else {
      tempArr.push(contestant2);
    }
    pointer1 += 2;
    pointer2 += 2;

    // end of round
    if (pointer2 >= copyOfArr.length) {
      if (copyOfArr.length % 2 !== 0) {
        let lastOne = copyOfArr.pop();
        copyOfArr = [lastOne, ...tempArr];
      } else {
        copyOfArr = [...tempArr];
      }
      results.push([...copyOfArr]);
      tempArr = [];
      pointer1 = 0;
      pointer2 = 1;
    }
  }
  return results;
};
