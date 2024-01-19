/* 
7 kyu

I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
*/

function mutateMyStrings(stringOne, stringTwo) {
  let finalStr = stringOne + "\n";
  let stringOneArr = stringOne.split("");
  for (let i = 0; i < stringOneArr.length; i++) {
    if (stringOneArr[i] !== stringTwo[i]) {
      stringOneArr[i] = stringTwo[i];
      finalStr += `${stringOneArr.join("")}\n`;
    }
  }
  return finalStr;
}
