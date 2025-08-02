function datingRange(age){
  //return min-max
  let min;
  let max;
  if (age <= 14) {
    min = Math.floor(age - 0.10 * age)
    max = Math.floor(age + 0.10 * age)
  } else {
    min = Math.floor((age/2) + 7)
    max = Math.floor(2 * (age - 7))
  }
  return `${min}-${max}`;
}