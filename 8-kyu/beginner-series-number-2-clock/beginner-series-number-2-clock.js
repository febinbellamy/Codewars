function past(h, m, s){
  const millisecondsHours = ( (h * 60) * 60) * 1000;
  const millisecondsMinutes = m * 60 * 1000;
  const millisecondsSeconds = s * 1000;
  return (millisecondsHours + millisecondsMinutes + millisecondsSeconds)
}