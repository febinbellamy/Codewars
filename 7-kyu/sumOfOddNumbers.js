/* 
7 kyu

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
  // TODO
  const arr = [[]];
  let rows = 1;

  for (let i = 1; rows <= n; i += 2) {
    if (arr[arr.length - 1].length !== rows) {
      arr[arr.length - 1].push(i);
    } else {
      rows++;
      arr.push([]);
      arr[arr.length - 1].push(i);
    }
  }
  return arr[n - 1].reduce((a, c) => a + c, 0);
}
