/* 
8 kyu

Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

function isToday(date) {
  //Code goes here.
  return (
    date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)
  );
}
