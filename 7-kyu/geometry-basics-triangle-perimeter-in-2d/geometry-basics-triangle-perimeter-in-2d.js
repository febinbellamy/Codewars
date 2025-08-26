const trianglePerimeter = (triangle) => {
  // your solution here
  const calculateLengthOfSide = (x2, x1, y2, y1) => {
    return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
  }
  const AB = calculateLengthOfSide(triangle["b"]["x"], triangle["a"]["x"], triangle["b"]["y"], triangle["a"]["y"]);
  const BC = calculateLengthOfSide(triangle["c"]["x"], triangle["b"]["x"], triangle["c"]["y"], triangle["b"]["y"]);
  const CA = calculateLengthOfSide(triangle["a"]["x"], triangle["c"]["x"], triangle["a"]["y"], triangle["c"]["y"]);
  return AB + BC + CA;
}