function whySoSerious(str) {
  const requiredCards = ["Jc", "7s", "5s", "As", "9c"];
  for(let card of requiredCards) {
    if (!str.includes(card)) return false;
  }
  return true;
}