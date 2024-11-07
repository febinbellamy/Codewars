/* 
8 kyu

Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/

String.prototype.isLetter = function () {
  return /[a-zA-Z]/.test(this) && this.length === 1;
};
