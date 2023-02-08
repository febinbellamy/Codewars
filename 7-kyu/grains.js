/* 
7 kyu

Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on each square is double the previous one.

There are 64 squares on a chessboard.

#Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...

Write a program that shows how many grains were on each square.
*/

function square(number) {
  //your code here
  let total = 1;
  let square = 1;
  while (square < number) {
    total *= 2;
    square++;
  }
  return total;
}
