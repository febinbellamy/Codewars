/* 
6 kyu

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

// Return the output array, and ignore all non-op characters
function parse(data) {
  const returnArray = [];
  let value = 0;
  let index = 0;
  let currentCommand;

  while (index < data.length) {
    currentCommand = data[index];
    if (currentCommand === "i") {
      value++;
    } else if (currentCommand === "d") {
      value--;
    } else if (currentCommand === "s") {
      value = value ** 2;
    } else if (currentCommand === "o") {
      returnArray.push(value);
    }
    index++;
  }
  return returnArray;
}
