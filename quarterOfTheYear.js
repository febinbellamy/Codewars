/* 
8 kyu

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

const quarterOf = (month) => {
  // Your code here
  if (month < 0 || month > 12) return false;

  if (month <= 3) return 1;
  if (month <= 6) return 2;
  if (month <= 9) return 3;
  if (month <= 12) return 4;
};
