function decodePass( passArr, bin ){
  // Code here
  const decryptedPassword = bin.split(" ").map(password => String.fromCharCode(parseInt(password, 2))).join("");
  return passArr.includes(decryptedPassword) ? decryptedPassword : false;
}