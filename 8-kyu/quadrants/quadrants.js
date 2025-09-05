function quadrant(x, y) {
  // Poveli!
  if (x < 0) {
    return y > 0 ? 2 : 3;
  } 
  
  if (x > 0) {
    return y > 0 ? 1 : 4;
  }
}