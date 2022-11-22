/* 
5 kyu

In some countries of former Soviet Union there was a belief about lucky tickets. A transport ticket of any sort was believed to posess luck if sum of digits on the left half of its number was equal to the sum of digits on the right half. Here are examples of such numbers:

003111    #             3 = 1 + 1 + 1
813372    #     8 + 1 + 3 = 3 + 7 + 2
17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6

Such tickets were either eaten after being used or collected for bragging rights.

Your task is to write a funtion luck_check(str), which returns true/True if argument is string decimal representation of a lucky ticket number, or false/False for all other numbers. It should throw errors for empty strings or strings which don't represent a decimal number.
*/

function luckCheck(ticket) {
  if (String(ticket) === "") throw new Error("No empty strings allowed!");
  let str = ticket.toString().split("");
  const filteredTicket = str.filter((char) => /^\d$/.test(char));
  if (filteredTicket.length !== str.length)
    throw new Error("Only numbers allowed!");

  let midIndex;
  let sumOfFirstHalf;
  let sumOfSecondHalf;

  if (str.length % 2 === 0) {
    midIndex = ticket.length / 2 - 1;
    sumOfFirstHalf = str.slice(0, midIndex + 1).reduce((a, c) => +a + +c);
    sumOfSecondHalf = str.slice(midIndex + 1).reduce((a, c) => +a + +c);
  } else {
    midIndex = Math.floor(ticket.length / 2);
    sumOfFirstHalf = str.slice(0, midIndex).reduce((a, c) => +a + +c);
    sumOfSecondHalf = str.slice(midIndex + 1).reduce((a, c) => +a + +c);
  }
  return sumOfFirstHalf === sumOfSecondHalf;
}
