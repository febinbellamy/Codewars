function sortByArea(array) {
  // your code here
  const areasOfShapes = array.map((shape) => Array.isArray(shape) ? shape[0] * shape[1] : Math.PI * (shape ** 2));
  areasOfShapes.sort((a,b) => a-b);
  return areasOfShapes
}