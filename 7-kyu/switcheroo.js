/* 
7 kyu

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:
'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x) {
  let finalStr = "";

  for (let i = 0; i < x.length; i++) {
    let currentChar = x[i];
    if (currentChar === "a") {
      finalStr += "b";
    } else if (currentChar === "b") {
      finalStr += "a";
    } else {
      finalStr += currentChar;
    }
  }
  return finalStr;
}
