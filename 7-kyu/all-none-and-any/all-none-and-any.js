Array.prototype.all = function (p) {
  for(let elem of this) {
    if (!p(elem)) return false;
  }
  return true;
};
​
Array.prototype.none = function (p) {
  for(let elem of this) {
    if (p(elem)) return false;
  }
  return true;
};
​
Array.prototype.any = function (p) {
  return !this.none(p);
};