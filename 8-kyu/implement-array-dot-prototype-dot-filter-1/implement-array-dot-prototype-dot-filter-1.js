Array.prototype.filter = function (func) {
  //nothing here, you will feel pretty awesome to write down by yourself
  //have fun :)
  const result = [];
  for(let i = 0; i < this.length; i++) {
    let currentNum = this[i];
    if (func(currentNum) === true) {
      result.push(currentNum)
    }
  }
  return result;
}