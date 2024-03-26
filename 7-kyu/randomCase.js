/* 
7 kyu

Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

A few examples:
– randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"
– randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"

Notes:
– This function will work within the basic ASCII character set to make this kata easier - so no need to make the function multibyte safe.
– The letters MUST be selected randomly - filters are set to make sure there is no cheating!
*/

function randomCase(x) {
  // Code your solution here
  let finalStr = "";
  for (let i = 0; i < x.length; i++) {
    let currentChar = x[i];
    if (currentChar === " ") {
      finalStr += " ";
    } else {
      let zeroOrOne = Math.floor(Math.random() * 2);
      finalStr +=
        zeroOrOne === 1 ? currentChar.toUpperCase() : currentChar.toLowerCase();
    }
  }
  return finalStr;
}
