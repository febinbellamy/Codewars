/* 
7 kyu

Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)

Examples
powerOf4(1024) // returns true
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false
*/

function powerOf4(n) {
  if (!n || typeof n !== "number" || n < 0) return false;
  let power = 0;
  let num = 0;

  while (num < n) {
    num = 4 ** power;
    power++;
  }
  return num === n;
}
