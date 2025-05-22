Array.prototype.map = function(x, fn) {
  const result = [];
  for(let elem of this) result.push(x(elem))
  return result;
}