/* 
7 kyu

Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9
*/

const prevMultOfThree = (n) => {
  //your solution
  if (n % 3 === 0) return n;
  const nArr = n.toString().split("");
  for (let i = 0; i < n.toString().length; i++) {
    if (+nArr.join("") % 3 === 0) {
      return +nArr.join("");
    }
    nArr.pop();
  }
  return null;
};
