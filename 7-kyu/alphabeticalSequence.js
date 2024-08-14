/* 
7 kyu

In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

Example
alphaSeq("ZpglnRxqenU") -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"

Technical Details
- The string will include only letters.
- The first letter of each sequence is uppercase followed by n-1 lowercase.
- Each sequence is separated with a comma.
- Return value needs to be a string.
*/

function createString(char) {
  let str = char.toUpperCase();
  let count = char.charCodeAt(0) - 97;
  for (let i = 0; i < count; i++) {
    str += char;
  }
  return str;
}

function alphaSeq(str) {
  const sortedArr = str.toLowerCase().split("").sort();
  const result = [];

  for (let j = 0; j < sortedArr.length; j++) {
    let currentChar = sortedArr[j];
    result.push(createString(currentChar));
  }
  return result.join(",");
}
