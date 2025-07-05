function equableTriangle(a,b,c) {
  //Your code here!
  const perimeter = a + b + c;
  const semiPerimeter = perimeter / 2;
  const area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
  return area === perimeter;
}