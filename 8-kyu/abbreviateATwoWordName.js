/* 
8 kyu

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H
patrick feeney => P.F
*/

function abbrevName(name) {
  // code away
  const nameArr = name.split(" ");
  let finalStr = "";

  for (let i = 0; i < nameArr.length; i++) {
    let currentWord = nameArr[i];

    finalStr += currentWord[0].toUpperCase();
    if (i === 0) finalStr += ".";
  }
  return finalStr;
}
