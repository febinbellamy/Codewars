/* 
6 kyu

An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.

Examples
[0, 0, 0, 0, 0, 1]  -->  1
# 1 group of 5 zeros (>= 4), thus the result is 1

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# 2 group of 4 zeros (>= 4), thus the result is 2

[0, 0, 0, 0, 1, 0]  -->  0 
# 1 group of 4 zeros and 1 group of 1 zero (< 4)
# _every_ sequence of zeros must be at least 4 long, thus the result is 0

[0, 0, 0, 1, 0, 0]  -->  0
# 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

[1, 2, 3, 4, 5]  -->  0
# no zeros

[]  -->  0
# no zeros
*/

function zeroPlentiful(arr) {
  if (!arr.includes(0)) return 0;
  let temp = "";
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum === 0 && temp.length === 0) {
      temp += currentNum;
    } else if (currentNum === 0 && temp[temp.length - 1] === "0") {
      temp += currentNum;

      if (temp.length === 4) counter++;
    } else if (currentNum !== 0) {
      if (temp.length < 4 && temp.length > 0) return 0;
      temp = "";
    }
    if (i === arr.length - 1 && temp.length < 4 && temp.length > 0) return 0;
  }
  return counter;
}
