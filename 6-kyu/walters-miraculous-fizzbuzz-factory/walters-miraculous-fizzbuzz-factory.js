function fizzBuzzFactory (arr){
  return function (num){
    let result = String(num);
    for (let subarr of arr) {
      if (num % subarr[0] === 0) {
        result = subarr[1];
      }
    }
    return result;
  }
}