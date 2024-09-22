/* 
7 kyu

Description:
Count the number of exclamation marks and question marks, return the product.

Examples
""          --->   0
"!"         --->   0
"!ab? ?"    --->   2
"!!"        --->   0
"!??"       --->   2
"!???"      --->   3
"!!!??"     --->   6
"!!!???"    --->   9
"!???!!"    --->   9
"!????!!!?" --->  20
*/

function product(string) {
  //coding and coding....
  let qCount = 0;
  let eCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "!") {
      eCount++;
    } else if (string[i] === "?") {
      qCount++;
    }
  }
  return qCount * eCount;
}
