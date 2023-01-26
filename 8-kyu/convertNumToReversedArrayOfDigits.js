/*
8 kyu

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/ 

function digitize(n) { 
    let reversedArray = [];
    let stringNum = String(n);
    for (let i = stringNum.length - 1; i >= 0; i--) {
      let currentElement = Number(stringNum[i]);
      reversedArray.push(currentElement);
    }
    return reversedArray;
}