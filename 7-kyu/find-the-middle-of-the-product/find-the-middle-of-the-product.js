function findMiddle(str){
  if (typeof str !== "string") return -1;
  const digits = str.split("").filter(char => /[0-9]/.test(char));
  if (digits.length === 0) return -1;
  const productStr = String(digits.reduce((a,c) => +a * +c, 1));
  let middle;
  if (productStr.length % 2 === 0) {
    middle = productStr.length / 2;
    return productStr[middle] !== 0 ? Number(productStr[middle - 1] + productStr[middle]) : Number(productStr[middle]);
  } 
  middle = Math.floor(productStr.length / 2);
  return Number(productStr[middle]);
}