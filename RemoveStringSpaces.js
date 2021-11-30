// Simple, remove the spaces from the string, then return the resultant string.
// 8 kyu

function noSpace(x) {
    let newString = "";
      
      for (let i = 0; i < x.length; i++) {
        let currentCharacter = x[i];
        if (currentCharacter === " ") {
          continue;
        } else {
          newString += currentCharacter;
        }
      } return newString;
}