/* 
7 kyu

n array is defined to be inertialif the following conditions hold:

a. it contains at least one odd value  
b. the maximum value in the array is even 
c. every odd value is greater than every even value that is not the maximum value.

eg:-
So [11, 4, 20, 9, 2, 8] is inertial because 
a. it contains at least one odd value [11,9] 
b. the maximum value in the array is 20 which is even 
c. the two odd values (11 and 9) are greater than all the even values that are not equal to 20 (the maximum), i.e., [4, 2, 8]

Write a function called is_inertial that accepts an integer array and returns true if the array is inertial; otherwise it returns false.
*/

/*
  function name:- isInertial
  input:- integer array
  ouput:- true if array is inertial false otherwise.
*/
const isInertial = (intArr) => {
  let oddValues = intArr.filter((val) => val % 2 !== 0);
  let evenValues = intArr.filter((val) => val % 2 === 0);
  let maxValue = Math.max(...intArr);
  let minOddValue = Math.min(...oddValues);
  if (oddValues.length === 0 || maxValue % 2 !== 0) return false;

  for (let i = 0; i < evenValues.length; i++) {
    let currentEvenValue = evenValues[i];
    if (currentEvenValue >= minOddValue && currentEvenValue !== maxValue) {
      return false;
    }
  }
  return true;
};
