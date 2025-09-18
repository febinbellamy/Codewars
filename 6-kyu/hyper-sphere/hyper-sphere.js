function inSphere(coords, radius) {
  // Write code here.
  return coords.map((value) => value ** 2).reduce((a,c) => a+c, 0) <= radius ** 2;
}