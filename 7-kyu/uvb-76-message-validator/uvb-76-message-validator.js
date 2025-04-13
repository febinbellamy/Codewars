function validate(message){
  //your code here
  const arr = message.split(" ");
  if (arr.length !== 8) return false;
  for(let i = 0; i < arr.length; i++) {
    let currentBlock = arr[i];
    if (i === 0 && currentBlock !== "MDZHB") {
      return false;
    } else if (i === 1 && (/[^0-9]/.test(currentBlock) || currentBlock.length !== 2)) {
      return false;
    } else if (i === 2 && (/[^0-9]/.test(currentBlock) || currentBlock.length !== 3)) {
      return false;
    } else if (i === 3 && /[^A-Z]/.test(currentBlock)) {
      return false;
    } else if (i >= 4 && (/[^0-9]/.test(currentBlock) || currentBlock.length !== 2)) {
      return false;
    }
  }
  return true;
}