/* 
6 kyu

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
  const tower = [];
  const finalFloor = [];
  let newStr = "";

  for (let j = 0; j < nFloors * 2 - 1; j++) {
    finalFloor.push("*");
  }

  tower.push(finalFloor.join(""));

  if (tower.length === nFloors) return tower;
  for (let i = nFloors - 1; i >= 1; i--) {
    let copyOfLastFloor = [...tower[0]];
    let numberOfStarsInPreviousFloor = tower[0]
      .split("")
      .filter((char) => char === "*").length;
    let numberOfStarsNeededForCurrentFloor = numberOfStarsInPreviousFloor - 2;
    let stars = copyOfLastFloor.filter((char) => char === "*");

    while (stars.length !== numberOfStarsNeededForCurrentFloor) {
      let lastIndexOfStar = copyOfLastFloor.lastIndexOf("*");
      let indexOfStar = copyOfLastFloor.indexOf("*");
      copyOfLastFloor[indexOfStar] = " ";
      copyOfLastFloor[lastIndexOfStar] = " ";
      stars = copyOfLastFloor.filter((char) => char === "*");
    }
    tower.unshift(copyOfLastFloor.join(""));
  }
  return tower;
}
