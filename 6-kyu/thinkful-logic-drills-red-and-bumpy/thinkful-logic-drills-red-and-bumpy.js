function colorProbability(color, texture){
  if (texture === "bumpy") {
    if (color === "red") {
      return String(4/7).slice(0, 4);
    } else if (color === "green") {
      return String(1/7).slice(0, 4);
    } else if (color === "yellow") {
      return String(2/7).slice(0, 4);
    }
  }
  
  return String(1/3).slice(0, 4);
}