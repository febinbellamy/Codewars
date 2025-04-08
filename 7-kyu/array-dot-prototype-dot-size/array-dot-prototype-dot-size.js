Array.prototype.size = function() {
  return this.reduce((c) => 1+c, 0)
};