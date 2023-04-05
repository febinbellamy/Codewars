/* 
7 kyu

Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.
*/

function consecutive(arr) {
  //code me
  let count = 0;

  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    let currentElem = arr[i];
    let prevElem = arr[i - 1];

    let difference = currentElem - prevElem;
    count += difference - 1;
  }

  return count;
}
