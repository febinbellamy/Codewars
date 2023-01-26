/* 
7 kyu

You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
Your task is to return an array of those missing numbers:

[-1,0,2,3,4]
*/

function findMissingNumbers(arr) {
  let minNum = arr[0];
  let maxNum = arr[arr.length - 1];

  const newArr = [];
  for (let i = minNum; i <= maxNum; i++) newArr.push(i);
  return newArr.filter((num) => arr.indexOf(num) === -1);
}
