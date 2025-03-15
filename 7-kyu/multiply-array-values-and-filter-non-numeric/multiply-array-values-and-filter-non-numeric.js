function multiplyAndFilter(array, multiplier){
  // your code
  return array.filter((elem) => typeof elem === "number").map((num) => num * multiplier);
}