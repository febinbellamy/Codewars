/* 
6 kyu

Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

1. Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
2. Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
3. Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
4. Other characters: 0 value

Note: input will always be a string
*/

function lettersToNumbers(s) {
  //your code......
  const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let totalScore = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (/[a-z]/.test(char)) {
      totalScore += lowerCaseAlphabet.indexOf(char) + 1;
    } else if (/[A-Z]/.test(char)) {
      totalScore += (upperCaseAlphabet.indexOf(char) + 1) * 2;
    } else if (/[0-9]/.test(char)) {
      totalScore += +char;
    }
  }
  return totalScore;
}
