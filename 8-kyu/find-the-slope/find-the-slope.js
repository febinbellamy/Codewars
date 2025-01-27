function slope(points) {
  const numerator = points[3] - points[1];
  const denominator = points[2] - points[0];
  return denominator === 0 ? "undefined" : String(numerator / denominator);
}