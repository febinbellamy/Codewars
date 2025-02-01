function wordToBin(str){
  //code away!!!
  const charCodes = str.split("").map((char) => char.charCodeAt(0));
  return charCodes.map((charCode) => "0" + charCode.toString(2))
}