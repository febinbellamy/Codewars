/* 
7 kyu

A population of bears consists of black bears, brown bears, and white bears.

The input is an array of two elements.

Determine whether the offspring of the two bears will return 'black', 'brown', 'white', 'dark brown', 'grey', 'light brown', or 'unknown'.

Elements in the the array will always be a string.

Examples:
bear_fur(['black', 'black'])  returns 'black'
bear_fur(['brown', 'brown'])  returns 'brown'
bear_fur(['white', 'white'])  returns 'white'
bear_fur(['black', 'brown'])  returns 'dark brown'
bear_fur(['black', 'white'])  returns 'grey'
bear_fur(['brown', 'white'])  returns 'light brown'
bear_fur(['yellow', 'magenta'])  returns 'unknown'
*/

const bearFur = (bears) => {
  const firstBear = bears[0];
  const secondBear = bears[1];

  if (firstBear === "black" && secondBear === "black") return "black";
  if (firstBear === "brown" && secondBear === "brown") return "brown";
  if (firstBear === "white" && secondBear === "white") return "white";

  if (
    (firstBear === "black" && secondBear === "brown") ||
    (firstBear === "brown" && secondBear === "black")
  )
    return "dark brown";
  if (
    (firstBear === "white" && secondBear === "black") ||
    (firstBear === "black" && secondBear === "white")
  )
    return "grey";
  if (
    (firstBear === "white" && secondBear === "brown") ||
    (firstBear === "brown" && secondBear === "white")
  )
    return "light brown";

  return "unknown";
};
