/* 
6 kyu

Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.

Example
If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

Be aware that you'll get enormous books having up to 100.000 pages.

All inputs will be valid.

Here's the opposite kata, which is more complex (Paginating a huge book)
*/

function amountOfPages(summary) {
  let counter = 0;
  let numOfDigits = 0;

  while (numOfDigits !== summary) {
    counter++;
    if (counter < 10) {
      numOfDigits += 1;
    } else if (counter < 100) {
      numOfDigits += 2;
    } else if (counter < 1000) {
      numOfDigits += 3;
    } else if (counter < 10000) {
      numOfDigits += 4;
    } else if (counter < 100000) {
      numOfDigits += 5;
    } else if (counter < 1000000) {
      numOfDigits += 6;
    }
  }
  return counter;
}
