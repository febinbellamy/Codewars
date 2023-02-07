/* 
6 kyu

Given a text, for example:

const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

get an array of last names of people named Michael. The result should be:
["Jordan", "Johnson", "Green", "Wood"]

Notes:
- First name will always be Michael with upper case 'M'.
- There will always be a space character between 'Michael' and last name.
- Last name will always be one word, starting with an upper-case letter and continuing with lower-case letters.
- There will always be at least one 'Micheal' with a valid last name in the input text.
*/

function getMichaelLastName(inputText) {
  // your awesome code here

  const finalArr = [];
  const splitArr = inputText.split(" ");

  for (let i = 0; i < splitArr.length; i++) {
    let currentElem = splitArr[i];
    let nextElem = splitArr[i + 1];

    if (currentElem.includes("Michael")) {
      let firstLetterOfNextElem = nextElem[0];
      if (firstLetterOfNextElem.toUpperCase() === firstLetterOfNextElem) {
        if (!/[a-zA-Z]/.test(nextElem[nextElem.length - 1])) {
          let updatedName = nextElem.slice(0, nextElem.length - 1);
          finalArr.push(updatedName);
        } else {
          finalArr.push(nextElem);
        }
      }
    }
  }

  return finalArr;
}
