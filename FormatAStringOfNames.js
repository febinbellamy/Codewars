/* 
6 kyu

Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

function list(names) {

    let finalString = "";
    
      for (let i = 0; i < names.length; i++) {
      let currentObject = names[i];
    
       for (let key in currentObject) {
         if (i === names.length - 1 && names.length !== 1) {
           finalString += " & " + currentObject[key];
         } else if (names.length === 1) {
           finalString += currentObject[key];
         } else if (i === names.length - 2) {
           finalString += currentObject[key];
         } else {
           finalString += currentObject[key] + ", ";
         }   
         }
      }
      return finalString;
}