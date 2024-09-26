/* 
7 kyu

Write a function that replaces 'two', 'too' and 'to' with the number '2'. Even if the sound is found mid word (like in octopus) or not in lowercase grandma still thinks that should be replaced with a 2. Bless her.

'I love to text' becomes 'I love 2 text'
'see you tomorrow' becomes 'see you 2morrow'
'look at that octopus' becomes 'look at that oc2pus'

Note that 'too' should become '2', not '2o'
*/

function textin(s) {
  // write your code here
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let twoLetterWord = s.slice(i, i + 2).toLowerCase();
    let threeLetterWord = s.slice(i, i + 3).toLowerCase();
    if (threeLetterWord === "too" || threeLetterWord === "two") {
      result += "2";
      i += 2;
    } else if (twoLetterWord === "to") {
      result += "2";
      i++;
    } else {
      result += s[i];
    }
  }
  return result;
}
