/* 
7 kyu

Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
*/

String.prototype.vowel = function () {
  return this.length === 1 && /[aeiouAEIOU]/.test(this);
};
