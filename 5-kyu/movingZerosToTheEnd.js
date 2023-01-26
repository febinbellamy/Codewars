/* 
5 kyu

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/ 

var moveZeros = function (arr) {
  let newArray = [];
  let arrayWithZeros = [];
  for (let i = 0; i < arr.length; i++) {
    
    let currentElem = arr[i];
    if (currentElem === 0) {
      arrayWithZeros.push(currentElem);
    } else if (currentElem !== 0) {
      newArray.push(currentElem);
    }
  }
  let finalArray = [...newArray, ...arrayWithZeros];
  return finalArray;
}