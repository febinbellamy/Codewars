/* 
7 kyu

We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

Examples:
doubleton(120) === 121
doubleton(1234) === 1311
doubleton(10) === 12
*/

function doubleton(num) {
  let currentNum = num + 1;

  while (true) {
    let strNum = currentNum.toString();
    let temp = "";
    let i = 0;
    let count = 0;

    while (i < strNum.length) {
      if (!temp.includes(strNum[i])) {
        temp += strNum[i];
        count++;
      }
      i++;
    }

    if (count === 2) return +strNum;

    currentNum++;
  }
}
