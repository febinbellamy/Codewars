function cutFruits(fruits){
  //coding here..
  const result = [];
  for(let fruit of fruits) {
    if (fruitsName.includes(fruit)) {
      let middleIndex = Math.ceil(fruit.length/2);
      let firstHalf = fruit.slice(0, middleIndex);
      let secondHalf = fruit.slice(middleIndex);
      result.push(firstHalf, secondHalf);
    } else {
      result.push(fruit)
    }
  }
  return result;
}