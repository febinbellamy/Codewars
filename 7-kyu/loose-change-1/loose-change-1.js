// Remember you have a CHANGE dictionary to work with ;)
function changeCount( change ) {
  const sumStr = String((change.split(" ").map((coin) => CHANGE[coin]).reduce((a,c) => a+c, 0)).toFixed(2))
  const indexOfDecimal = sumStr.indexOf(".");
  return `$${sumStr}${sumStr[indexOfDecimal + 1] === sumStr.length - 1 ? "0" : ""}`
}