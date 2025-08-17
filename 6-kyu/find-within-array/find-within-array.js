function findInArray(array, iterator) {
  for(let i = 0; i < array.length; i++) {
    let currentElem = array[i];
    if (iterator(currentElem, i)) return i;
  }
  return -1;
};