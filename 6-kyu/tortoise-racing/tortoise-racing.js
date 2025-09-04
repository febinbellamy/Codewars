function race(aFeetPerHour, bFeetPerHour, aLead) {
    // your code
  const differenceInFeetPerHour = bFeetPerHour - aFeetPerHour;
  let differenceInTime = +((aLead/differenceInFeetPerHour).toFixed(13));
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (differenceInTime <= 0) return null;
  if (differenceInTime >= 1) {
    hours = parseInt(differenceInTime);
    differenceInTime -= hours;
  }
  // minutes
  if (differenceInTime > 0) {
    differenceInTime = differenceInTime * 60;
    minutes = parseInt(differenceInTime);
    differenceInTime -= minutes;
  }
  // seconds
   if (differenceInTime > 0) {
    differenceInTime = differenceInTime * 60;
    seconds = Math.floor(differenceInTime);
    if (seconds === 59) {
      minutes++;
      seconds = 0;
    }
  }
  return [hours, minutes, seconds];
}