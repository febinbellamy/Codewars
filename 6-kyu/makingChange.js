/* 
6 kyu

Complete the method that will determine the minimum number of coins needed to make change for a given amount in American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols H, Q, D, N and P (symbols in Ruby, strings in in other languages)

The argument passed in will be an integer representing the value in cents. The return value should be a hash/dictionary/object with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.

Examples
makeChange(0)   //-->  {}
makeChange(1)   //-->  {"P":1}
makeChange(43)  //-->  {"Q":1, "D":1, "N":1, "P":3}
makeChange(91)  //-->  {"H":1, "Q":1, "D":1, "N":1, "P":1}
*/

const makeChange = (amount) => {
  let total = amount;

  const H = parseInt(total / 50);
  total -= H * 50;

  const Q = parseInt(total / 25);
  total -= Q * 25;

  const D = parseInt(total / 10);
  total -= D * 10;

  const N = parseInt(total / 5);
  total -= N * 5;

  const P = parseInt(total / 1);
  total -= P * 1;

  const finalObj = {};

  if (H > 0) finalObj["H"] = H;
  if (Q > 0) finalObj["Q"] = Q;
  if (D > 0) finalObj["D"] = D;
  if (N > 0) finalObj["N"] = N;
  if (P > 0) finalObj["P"] = P;

  return finalObj;
};
