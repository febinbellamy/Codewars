/* 
7 kyu

Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

'mean' - in case mean value is larger than median value
'median' - in case median value is larger than mean value
'same' - in case both mean and median share the same value

Array will always be valid (odd-length >= 3)
*/

function meanVsMedian(numbers) {
  const mean = Math.round(numbers.reduce((a, c) => a + c, 0) / numbers.length);
  numbers.sort((a, b) => a - b);
  const median = numbers[Math.floor(numbers.length / 2)];
  if (mean > median) {
    return "mean";
  } else if (mean < median) {
    return "median";
  } else {
    return "same";
  }
}
