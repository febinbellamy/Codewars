/* 
6 kyu

Format any integer provided into a string with "," (commas) in the correct places.

Example:

numberFormat(100000); // return '100,000'
numberFormat(5678545); // return '5,678,545'
numberFormat(-420902); // return '-420,902'
*/

var numberFormat = function (number) {
  //Your code here

  const strNum =
    number.toString()[0] === "-"
      ? number.toString().slice(1)
      : number.toString();
  const arr = [];
  let counter = 1;

  for (let i = strNum.length - 1; i >= 0; i--) {
    let currentChar = strNum[i];
    arr.unshift(currentChar);
    if (counter % 3 === 0 && i !== 0) arr.unshift(",");
    counter++;
  }
  if (number.toString()[0] === "-") arr.unshift("-");
  return arr.join("");
};
