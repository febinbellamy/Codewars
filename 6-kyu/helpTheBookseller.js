/* 
6 kyu

A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

    L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
    or
    L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....

You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

    M = {"A", "B", "C", "W"} 
    or
    M = ["A", "B", "C", "W"] or ...

and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):
    (A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).

Notes:
- In the result codes and their values are in the same order as in M.
- See "Samples Tests" for the return.

*/

function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) return "";

  const sum = {};
  const splitArr = listOfArt.join(" ").split(" ");

  for (let i = 0; i < splitArr.length; i++) {
    let currentElem = splitArr[i];
    if (i % 2 === 0) {
      if (sum[currentElem[0]]) {
        sum[currentElem[0]] += Number(splitArr[i + 1]);
      } else {
        sum[currentElem[0]] = Number(splitArr[i + 1]);
      }
    }
  }

  let finalStr = "";
  for (let j = 0; j < listOfCat.length; j++) {
    let currentElem = listOfCat[j];

    // if the element exists in the sum object...Grab the value (sum)
    if (sum[currentElem]) {
      if (j === 0) {
        finalStr += `(${currentElem} : ${sum[currentElem]}) -`;
      } else if (j !== listOfCat.length - 1) {
        finalStr += ` (${currentElem} : ${sum[currentElem]}) -`;
      } else {
        finalStr += ` (${currentElem} : ${sum[currentElem]})`;
      }

      // if the element doesn't exists in the sum object.. mark currentChar as 0.
    } else {
      if (j === 0) {
        finalStr += `(${currentElem} : 0) -`;
      } else if (j !== listOfCat.length - 1) {
        finalStr += ` (${currentElem} : 0) -`;
      } else {
        finalStr += ` (${currentElem} : 0)`;
      }
    }
  }
  return finalStr;
}
