// return the magic index
function findMagic(arr){
  for(let i = 0; i < arr.length; i++) if (i === arr[i]) return i;
  return -1;
}