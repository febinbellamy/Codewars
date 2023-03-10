/* 
6 kyu

Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples
'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']

All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/

function moreZeros(s) {
  const num2bin = (num) => (num >>> 0).toString(2);
  const finalArr = [];

  for (let i = 0; i < s.length; i++) {
    let currentCharASCII = s[i].charCodeAt();
    let binary = num2bin(currentCharASCII);
    let numOfZeroes = binary.split("").filter((char) => char === "0").length;
    if (numOfZeroes > Math.floor(binary.length / 2)) finalArr.push(s[i]);
  }

  return finalArr.filter((num, index) => finalArr.indexOf(num) === index);
}
