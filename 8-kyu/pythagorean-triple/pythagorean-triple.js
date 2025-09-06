function isPythagoreanTriple(integers) {
  // Good luck friends!
  const squares = integers.map((int) => int ** 2);
  return (
    squares[0] + squares[1] === squares[2] || 
    squares[1] + squares[2] === squares[0] || 
    squares[0] + squares[2] === squares[1]
  );
}