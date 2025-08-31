function triangleArea(triangle){
  // your solution here
  const x1 = triangle["a"]["x"];
  const y1 = triangle["a"]["y"];
  const x2 = triangle["b"]["x"];
  const y2 = triangle["b"]["y"];
  const x3 = triangle["c"]["x"];
  const y3 = triangle["c"]["y"];
  return 0.5 * (Math.abs(x1 * (y2 - y3) + x2*(y3 - y1) + x3*(y1- y2)));
}