/* 
6 kyu

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :)
*/

function longestRepetition(s) {
  if (s === "") return ["", 0];

  const repetitions = [];
  let temp = s[0];

  for (let i = 1; i < s.length; i++) {
    let currentChar = s[i];

    if (currentChar === temp[temp.length - 1]) {
      temp += currentChar;
    } else {
      repetitions.push(temp);
      temp = currentChar;
    }

    if (i === s.length - 1) {
      repetitions.push(temp);
    }
  }

  repetitions.sort((a, b) => b.length - a.length);
  return [repetitions[0][0], repetitions[0].length];
}
