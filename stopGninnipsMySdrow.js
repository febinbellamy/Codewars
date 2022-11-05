/* 
6 kyu

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/

function spinWords(string) {
  //TODO Have fun :)

  const arrOfWords = string.split(" ");

  if (arrOfWords.length === 1) {
    return arrOfWords[0].length >= 5
      ? arrOfWords[0].split("").reverse().join("")
      : arrOfWords[0];
  }

  for (let i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length >= 5) {
      arrOfWords[i] = arrOfWords[i].split("").reverse().join("");
    }
  }
  return arrOfWords.join(" ");
}
