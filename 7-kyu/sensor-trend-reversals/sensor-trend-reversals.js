function countDirectionChanges(readings) {
  let count = 0;
  let trend = "";
  for(let i = 0; i < readings.length - 1; i++) {
    let currNum = readings[i];
    let nextNum = readings[i + 1];
    if (currNum < nextNum) {
      if (trend === "negative") count++;
      trend = "positive";
    } else if (currNum > nextNum) {
      if (trend === "positive") count++;
      trend = "negative"
    }
      
  }
  return count;
}