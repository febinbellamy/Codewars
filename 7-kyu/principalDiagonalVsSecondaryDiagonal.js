/* 
7 kyu

Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.
Secondary Diagonal -- the secondary diagonal of a matrix identifies those elements of the matrix running from North-East to South-West.

For example:
matrix:             [1, 2, 3]
                    [4, 5, 6]
                    [7, 8, 9]

principal diagonal: [1, 5, 9]
secondary diagonal: [3, 5, 7]

Task
Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.

- If the principal diagonal is larger, return "Principal Diagonal win!"
- If the secondary diagonal is larger, return "Secondary Diagonal win!"
- If they are equal, return "Draw!"

Note: You will always receive matrices of the same dimension.
*/

function diagonal(matrix) {
  // write your code ....
  let principalTotal = 0;
  let secondaryTotal = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let index = 0;
  while (index < matrix.length) {
    principalTotal += matrix[index][left];
    secondaryTotal += matrix[index][right];
    left++;
    right--;
    index++;
  }
  if (principalTotal > secondaryTotal) {
    return "Principal Diagonal win!";
  } else if (principalTotal < secondaryTotal) {
    return "Secondary Diagonal win!";
  } else {
    return "Draw!";
  }
}
