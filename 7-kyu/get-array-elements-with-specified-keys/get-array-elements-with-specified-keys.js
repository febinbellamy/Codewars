Array.prototype.only = function(keys) {
  return keys.sort((a,b) => a-b).map((elem) => this[elem]);
}