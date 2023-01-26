/*
7 kyu

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/ 

function XO(str) {
    let totalX = 0;
    let totalO = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === "x") {
        totalX++;
      } else if (str[i].toLowerCase() === "o") {
        totalO++;
      }
    }
    
    if (totalX === totalO) {
        return true;
    } else if (totalX > totalO) {
        return false;
    } else if (totalX < totalO) {
        return false;
    } else if (totalX === 0 && totalO === 0) {
        return false;
    }
}