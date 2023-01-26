/*
8 kyu

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (numofRepeats, stringtoRepeat) {
    let finalString = '';
    for (let i = 0; i < numofRepeats; i++) {
      finalString += stringtoRepeat
    }
    return finalString;
}
  
