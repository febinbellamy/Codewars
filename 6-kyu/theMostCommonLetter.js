/* 
6 kyu

Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
*/

function replaceCommon(string, letter) {
  // good luck

  const freqCounter = {};
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (currentChar === " ") continue;
    if (freqCounter[currentChar]) {
      freqCounter[currentChar]++;
    } else {
      freqCounter[currentChar] = 1;
    }
  }
  const maxVal = Object.values(freqCounter).sort((a, b) => b - a)[0];
  const mostCommonLetter = Object.keys(freqCounter).find(
    (key) => freqCounter[key] === maxVal
  );
  return string.replaceAll(mostCommonLetter, letter);
}
