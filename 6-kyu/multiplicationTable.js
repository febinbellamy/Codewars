/* 
6 kyu

Your task, is to create NxN multiplication table, of size provided in parameter.

For example, when given size is 3:
    1 2 3
    2 4 6
    3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function (size) {
  // insert code here

  let numberInRow = 1;
  let indexOfRow = 0;

  const finalArr = [];

  while (indexOfRow < size) {
    let elementIndex = 0;
    let newRow = [];

    while (elementIndex < size) {
      if (newRow.length === 0) {
        newRow.push(numberInRow);
      } else {
        newRow.push(newRow[newRow.length - 1] + numberInRow);
      }
      elementIndex++;
    }
    finalArr.push(newRow);
    indexOfRow++;
    numberInRow++;
  }
  //   console.log("finalArr", finalArr);
  return finalArr;
};
