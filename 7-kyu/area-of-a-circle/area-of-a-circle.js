function circleArea(radius) {
  if (radius <= 0) {
    throw new Error("Radius needs to be positive");
  }
  return Math.PI * radius ** 2;  
}