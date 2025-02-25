String.prototype.contains = function(char, bool) {
  return !bool ? this.toLowerCase().includes(char.toLowerCase()) : this.includes(char);
}