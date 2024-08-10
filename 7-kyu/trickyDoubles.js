/* 
7 kyu

Create a function that returns twice the supplied value unless it is a tricky double.

The trick: if the number passed in is a double, simply return the value that was passed.

Examples of a double number include:
44
77
3333
8787
100100

In the example 8787, the number 87 is doubled (appears twice).

trickyDoubles(15)   // should return 30
trickyDoubles(100)  // should return 200
trickyDoubles(4343) // should return 4343
*/

function trickyDoubles(n) {
  //insert your code here
  const strNumFirstHalf = String(n).slice(0, String(n).length / 2);
  const strNumSecondHalf = String(n).slice(String(n).length / 2);
  return strNumFirstHalf === strNumSecondHalf ? n : n * 2;
}
