/* 
7 kyu

Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

For example:
roundToFive([34.5, 56.2, 11, 13]);

should return:
[35, 55, 10, 15]

Roundings have to be done like "in real life": 22.5 -> 25
*/

function roundToFive(numbers) {
  const finalArr = [];
  let i = 0;

  while (i < numbers.length) {
    let currentNum = Math.round(numbers[i]);
    if (currentNum % 5 === 0) {
      finalArr.push(currentNum);
    } else {
      let newNumHigher = currentNum;
      let newNumLower = currentNum;
      while (true) {
        newNumHigher++;
        newNumLower--;
        if (newNumLower % 5 === 0) {
          finalArr.push(newNumLower);
          break;
        } else if (newNumHigher % 5 === 0) {
          finalArr.push(newNumHigher);
          break;
        }
      }
    }
    i++;
  }
  return finalArr;
}
