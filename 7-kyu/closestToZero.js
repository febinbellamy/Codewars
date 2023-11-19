/* 
7 kyu

Simply find the closest value to zero from the list. Notice that there are negatives in the list.

List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

Examples:
[2, 4, -1, -3]  => -1
[5, 2, -2]      => None
[5, 2, 2]       => 2
[13, 0, -6]     => 0
*/

function closest(arr) {
  // return null if it is not possible to return 1 unique closest value

  let closestValueToZero = arr[0];
  const closestValuesArr = [closestValueToZero];

  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];

    if (Math.abs(currentNum) <= Math.abs(closestValueToZero)) {
      closestValueToZero = currentNum;
      closestValuesArr.push(currentNum);
    }
  }

  const filteredArr = closestValuesArr.filter(
    (num) => Math.abs(num) === Math.abs(closestValueToZero)
  );
  filteredArr.sort((a, b) => a - b);

  return filteredArr[0] !== filteredArr[filteredArr.length - 1]
    ? null
    : filteredArr[0];
}
