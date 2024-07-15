/* 
7 kyu

Write a program that, given a word, computes the scrabble score for that word.

Letter Values

You'll need these:
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10

There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.

Examples
"cabbage" --> 14

"cabbage" should be scored as worth 14 points:
– 3 points for C
– 1 point for A, twice
– 3 points for B, twice
– 2 points for G
– 1 point for E

And to total:
3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

Empty string should return 0. The string can contain spaces and letters (upper and lower case), you should calculate the scrabble score only of the letters in that string.
""           --> 0
"STREET"    --> 6
"st re et"    --> 6
"ca bba g  e" --> 14
*/

function scrabbleScore(str) {
  const lettersAndScores = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };
  let totalScore = 0;
  let upperCasedString = str.toUpperCase();
  for (let i = 0; i < upperCasedString.length; i++) {
    let currentChar = upperCasedString[i];
    if (currentChar in lettersAndScores) {
      totalScore += lettersAndScores[currentChar];
    }
  }
  return totalScore;
}
