/* 
7 kyu

The goal of this kata is to create a sign function. sign(n) should return the sign of a number n, indicating whether the number is positive, negative, zero or NaN.

The function may return 1, -1, 0 or NaN representing "positive number", "negative number", "zero" or NaNrespectively.

If a string argument may be converted to number then sign should return the sign of this number.

###Example
sign(3)     //  1
sign(-3)    // -1
sign("-3")  // -1
sign(0)     //  0
sign(NaN)   // NaN
sign("foo") // NaN
sign()      // NaN

###Single-element-array Arrays of 1 element may be coerced to numbers or strings. eg:
2*[5]   // -> 10
2*['5'] // -> 10
10-[5]  // ->  5
10+[5]  // -> 105 !!

The sign function will treat "single-element-arrays" as Javascript used to do, ie as number if possible.

Then:
sign([42])  // ->  1
sign([-42]) // -> -1
sign([0])   // ->  0
sign([4,2]) // -> NaN (only 1 element arrays are coercible)

//...and... 
sign(['42'])  // ->  1
sign(['-42']) // -> -1
sign(['0'])   // ->  0
sign(['4','2']) // -> NaN

###Note: Math.sign() is an experimental part of the ECMAScript 6 proposal. So if implemented, it will be de disabled.
*/

function sign(number) {
  // ...
  if (Array.isArray(number) && number.length === 1) number = number[0];
  if (typeof number !== "number" && typeof number !== "string") return NaN;
  if (Number.isNaN(+number)) return NaN;
  if (+number === 0) return 0;
  if (number.toString()[0] === "-") return -1;
  return 1;
}
