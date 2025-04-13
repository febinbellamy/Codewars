function recycleMe(recycle){ 
// your code here
  let plasticItems = 0;
  let glassItems = 0
  let cardItems = 0;
  for(let item of recycle) {
    if (item > 0) {
      plasticItems++;
    } else if (item < 0) {
      glassItems++;
    } else if (item === 0) {
      cardItems++;
    }
  }
  return [plasticItems, glassItems, cardItems];
}