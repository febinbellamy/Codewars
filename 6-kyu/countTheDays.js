/* 
6 kyu

Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

Your job is to help her out.

Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!"
If the event is today, return "Today is the day!"
Else, return "x days"

PS: This is my first kata. I hope you have fun^^
*/

function countDays(d) {
  //have fun with coding! :)

  let dIsoString = d.toISOString();
  let todaysDate = new Date().toISOString();

  let dYear = dIsoString.slice(0, 4);
  let dMonth = dIsoString.slice(5, 7);
  let dDay = dIsoString.slice(8, 10);
  let currentYear = todaysDate.slice(0, 4);
  let currentMonth = todaysDate.slice(5, 7);
  let currentDay = todaysDate.slice(8, 10);

  if (dYear + dMonth + dDay === currentYear + currentMonth + currentDay)
    return "Today is the day!";
  if (+currentYear > +dYear || +currentYear + +currentMonth > +dYear + +dMonth)
    return "The day is in the past!";

  let x = Math.round(
    (Date.parse(dIsoString) - Date.parse(todaysDate)) / 86400000
  );
  return `${x} days`;
}
