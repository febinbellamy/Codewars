function isLucky(ticket) {
  if (ticket.length !== 6) return false;
  let sumOfFirstThree = 0;
  let sumOfSecondThree = 0;
  for(let i = 0; i < ticket.length; i++) {
    let currChar = ticket[i];
    if (/[^0-9]/.test(currChar)) return false;
    if (i < 3) {
      sumOfFirstThree += +currChar;
    } else {
      sumOfSecondThree += +currChar;
    }
  }
  return sumOfFirstThree === sumOfSecondThree;
}