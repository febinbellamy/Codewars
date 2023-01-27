/* 
6 kyu

A collatz sequence, starting with a positive integern, is found by repeatedly applying the following function to n until n == 1 :

A more detailed description of the collatz conjecture may be found on Wikipedia.

The Problem
Create a function collatz that returns a collatz sequence string starting with the positive integer argument passed into the function, in the following form:
"X0->X1->...->XN"

Where Xi is each iteration of the sequence and N is the length of the sequence.

Sample Input
Input: 4
Output: "4->2->1"

Input: 3
Output: "3->10->5->16->8->4->2->1"

Don't worry about invalid input. Arguments passed into the function are guaranteed to be valid integers >= 1.
*/

function collatz(n) {
  let finalStr = `${n}${n !== 1 ? "->" : ""}`;
  let newNum = n;

  while (newNum > 1) {
    if (newNum % 2 === 0) {
      newNum = newNum / 2;
    } else {
      newNum = 3 * newNum + 1;
    }
    finalStr += `${newNum}${newNum === 1 ? "" : "->"}`;
  }
  return finalStr;
}
