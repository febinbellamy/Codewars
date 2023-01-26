/* 
7 kyu

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.
*/

function divCon(x) {
  let total = 0;

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      total -= x[i];
    } else {
      total += x[i];
    }
  }
  return total;
}
