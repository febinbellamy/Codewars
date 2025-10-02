function catMouse(x){
  let indexOfCat;
  for(let i = 0; i < x.length; i++) {
    if (x[i] === "C") {
      indexOfCat = i;
    } else if (x[i] === "m") {
      return (i - indexOfCat) > 4 ? "Escaped!" : "Caught!"
    }
  }
}