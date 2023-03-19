/* 
7 kyu

An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.

More examples in the test cases.

Good luck!
*/

function solve(arr) {
  //..
  const finalArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let currentNum = arr[i];
    let tempArr = arr.slice(i + 1);
    let maxNum = Math.max(...tempArr);
    if (currentNum > maxNum) finalArr.push(currentNum);
  }

  finalArr.push(arr[arr.length - 1]);
  return finalArr;
}
