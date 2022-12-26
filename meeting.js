/* 
6 kyu

John has invited some friends. His list is:
s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that
- makes this string uppercase
- gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too.

Notes
You can see another examples in the "Sample tests".
*/

function meeting(s) {
  const splitStr = s.toUpperCase().split(";");
  const arrayOfObjects = [];

  for (let i = 0; i < splitStr.length; i++) {
    let currentWord = splitStr[i];
    let newWord = currentWord.split(":").reverse();
    let newObj = { lastName: newWord[0], firstName: newWord[1] };
    arrayOfObjects.push(newObj);
  }

  arrayOfObjects.sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    if (a.firstName > b.firstName) return 1;
    if (a.firstName < b.firstName) return -1;
  });

  let finalStr = "";

  for (let i = 0; i < arrayOfObjects.length; i++) {
    let currentObj = arrayOfObjects[i];
    finalStr += `(${currentObj["lastName"]}, ${currentObj["firstName"]})`;
  }
  return finalStr;
}
