Array.prototype.reverse = function() {
  let leftPointer = 0;
  let rightPointer = this.length - 1;
  while(leftPointer < rightPointer) {
    let temp = this[leftPointer];
    this[leftPointer] = this[rightPointer];
    this[rightPointer] = temp;
    leftPointer++;
    rightPointer--;
  }
  return this;
};