Array.prototype.first = function() {
  return this ? this[0] : undefined;
}
​
Array.prototype.last = function() {
  return this ? this[this.length - 1] : undefined;
}