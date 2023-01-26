/* 
7 kyu

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
    let arrayOfStringChars = word.split('');
    let newArray = [];
    
      for (let i = 0; i < arrayOfStringChars.length; i++) {
        let currentChar = arrayOfStringChars[i];
        if (currentChar.toUpperCase() === currentChar) {
          newArray.push(i);
        }
      }
      return newArray;
}