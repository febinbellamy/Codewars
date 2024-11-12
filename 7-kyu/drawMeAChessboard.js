/* 
7 kyu

A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).

Making a digital chessboard I think is an interesting way of visualising how loops can work together.

Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.

So chessBoard(6,4) should return an array like this:
[
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"],
    ["O","X","O","X"],
    ["X","O","X","O"]
]

And chessBoard(3,7) should return this:
[
    ["O","X","O","X","O","X","O"],
    ["X","O","X","O","X","O","X"],
    ["O","X","O","X","O","X","O"]
]

The white spaces should be represented by an: 'O'
and the black an: 'X'

The first row should always start with a white space 'O'
*/

function chessBoard(rows, columns) {
  // your code goes here
  const output = [];
  let currentLetter = "O";
  for (let i = 0; i < rows; i++) {
    let currentRow = [];
    for (let j = 0; j < columns; j++) {
      currentRow.push(currentLetter);
      currentLetter = currentLetter === "O" ? "X" : "O";
    }
    currentLetter = currentRow[0] === "O" ? "X" : "O";
    output.push(currentRow);
  }
  return output;
}
