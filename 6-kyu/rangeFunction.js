/* 
6 kyu

Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

Examples:
range(5) --> 1,2,3,4,5
range(3, 7) --> 3,4,5,6,7
range(2, 3, 15) --> 2,5,8,11,14

*/

const range = (...args) => {
  const result = [];
  let startingNum;
  let endingNum;
  let stepNum;

  // if theres only 1 argument, then the start needs to be 1, the step needs to be 1, and the stop is the argument passed in
  // if there are only 2 arguments, then the start needs to be argument 1, the step needs to be 1, and the stop is the 2nd argument
  // if there are 3 arguments, then the start is first arg, the step is the second arg, and the stop is the 3rd argument

  if (args.length === 1) {
    startingNum = 1;
    endingNum = args[0];
    stepNum = 1;
  } else if (args.length === 2) {
    startingNum = args[0];
    endingNum = args[1];
    stepNum = 1;
  } else if (args.length === 3) {
    startingNum = args[0];
    endingNum = args[2];
    stepNum = args[1];
  }

  for (let i = startingNum; i <= endingNum; i += stepNum) {
    result.push(i);
  }
  return result;
};
