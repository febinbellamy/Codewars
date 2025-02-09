function validatePIN (pin) {
  //return true or false
  let digits = 0;
  for(let i = 0; i < pin.length; i++) {
    if(/[0-9]/.test(pin[i])) {
      digits ++;
    } else {
      return false;
    }
  }
  return digits === 4 || digits === 6;
}