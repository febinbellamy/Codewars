/* 
7 kyu

Create a function to return true type of variable, i.e.

type([]) == 'array'
type({}) == 'object'
type('') == 'string'
type(NaN) == 'number'
*/

function type(value) {
  if (Array.isArray(value)) {
    return "array";
  } else if (value instanceof Date) {
    return "date";
  } else if (value === null) {
    return "null";
  } else {
    return typeof value;
  }
}
