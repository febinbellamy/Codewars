const arrayConversion = arr => {
  let currentArr = arr.slice(0);
  while(currentArr.length !== 1) {
    const sums = [];
    for(let i = 0; i < currentArr.length; i+=2) {
      sums.push(currentArr[i] + currentArr[i+1]);
    }
    if (sums.length === 1) return sums[0]; 
    const products = [];
    for(let j = 0; j < sums.length; j += 2) {
      products.push(sums[j + 1] * sums[j])
    }
    currentArr = products.slice(0);
  }
  return currentArr[0];  
}