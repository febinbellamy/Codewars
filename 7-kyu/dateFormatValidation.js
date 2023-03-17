/* 
7 kyu

Create a function that will return true if the input is in the following date time format 01-09-2016 01:20 and false if it is not.

This Kata has been inspired by the Regular Expressions chapter from the book Eloquent JavaScript.
*/

function dateChecker(date) {
  // code here

  const format = "01-09-2016 01:20";
  if (format.length !== date.length) return false;

  for (let i = 0; i < date.length; i++) {
    if (i === 2 || i === 5 || i === 10 || i === 13) {
      if (date[i] !== format[i]) return false;
    } else if (Number.isNaN(+date[i])) {
      return false;
    }
  }
  return true;
}
