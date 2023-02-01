/* 
7 kyu

Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example
capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

function capMe(names) {
  for (let i = 0; i < names.length; i++) {
    let newName = names[i][0].toUpperCase() + names[i].toLowerCase().slice(1);
    names[i] = newName;
  }
  return names;
}
