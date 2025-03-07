function min(a, b){
  if (a === null) {
    a = 0;
  }
  if (b === null) {
    b = 0;
  }
  
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return NaN;
  } else if (typeof a === "number" && typeof b === "number" ) {
    return ( a < b) ? a : b;
  } else {
    return NaN;
  }
}