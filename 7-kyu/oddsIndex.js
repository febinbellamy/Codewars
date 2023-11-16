/* 
7 kyu

You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.
*/

function oddBall(arr) {
  //..

  let indexOfOddWord;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "odd") {
      indexOfOddWord = i;
    }
  }
  return arr.includes(indexOfOddWord);
}
