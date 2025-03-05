Array.prototype.remove = function(index) {
  for(let i = 0; i < this.length; i++) {
    if (i === index) {
      this.splice(i, 1);
    }
  }
  return this;
};