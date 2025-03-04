Array.prototype.max = function() {
  let maxValue = -Infinity;
  for(let i = 0; i < this.length; i++) {
    let currentElem = +this[i];
    if (/[0-9]/.test(currentElem)) {
      if (currentElem > maxValue) {
        maxValue = currentElem;
      }
    } else {
      return NaN;
    }
  }
  return maxValue;
}