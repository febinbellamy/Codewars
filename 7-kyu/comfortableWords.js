/* 
7 kyu

A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.

The word will always be a string consisting of only ascii letters from a to z.

To avoid problems with image availability, here's the lists of letters for each hand:

Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
Right: y, u, i, o, p, h, j, k, l, n, m

Examples
"yams"  -->  true
"test"  -->  false
*/

const comfortableWord = (word) => {
  // TODO: complete

  const left = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "a",
    "s",
    "d",
    "f",
    "g",
    "z",
    "x",
    "c",
    "v",
    "b",
  ];
  const right = ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"];

  let index = 0;
  let str = "";

  while (index < word.length) {
    let currentChar = word[index];
    if (left.includes(currentChar)) {
      str += "0";
    } else {
      str += "1";
    }

    if (str.length > 0 && str[str.length - 1] === str[str.length - 2])
      return false;
    index++;
  }

  return true;
};
