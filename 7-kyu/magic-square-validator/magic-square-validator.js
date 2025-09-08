function isMagical(square) {
  // return true if the given square is valid and false otherwise
  if (new Set(square).size !== square.length || square.length !== 9) return false
  const diagonal1Sum = square[0] + square[4] + square[8];
  const diagonal2Sum = square[2] + square[4] + square[6];
  const col1Sum = square[0] + square[3] + square[6];
  const col2Sum = square[1] + square[4] + square[7];
  const col3Sum = square[2] + square[5] + square[8];
  const row1Sum = square[0] + square[1] + square[2];
  const row2Sum = square[3] + square[4] + square[5];
  const row3Sum= square[6] + square[7] + square[8];
  return [diagonal1Sum, diagonal2Sum, col1Sum, col2Sum, col3Sum, row1Sum, row2Sum, row3Sum].every(val => val === 15)
}