function one(arr, fun){
  let count = 0;
  for(let elem of arr) {
    if(fun(elem)) count++;
  }
  return count === 1;
}