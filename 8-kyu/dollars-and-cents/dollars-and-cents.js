function formatMoney(amount){
  // your formatting code here
  const strNum = String(amount);
  const indexOfDecimal = strNum.indexOf(".");
  if (indexOfDecimal === -1) {
    return `$${strNum}.00`
  } else if (strNum.length - 1 === indexOfDecimal + 1) {
    return `$${strNum}0`
  } else {
    return `$${strNum}`
  }
}