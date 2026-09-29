function translateDate(dateStr){
  const arrOfChars = dateStr.split("");
  for (let i = 0; i < arrOfChars.length; i++) {
    if (arrOfChars[i] !== "-") {
      let newValue = arrOfChars[i].charCodeAt(0) - 50;
      if (newValue.toString().length === 1) {
        newValue = "0" + newValue;
      }
      arrOfChars[i] = newValue
    }
  }
  return arrOfChars.join("");
}