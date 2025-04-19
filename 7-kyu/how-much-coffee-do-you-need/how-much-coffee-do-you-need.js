function howMuchCoffee(events) {
  const allowedPhrases = ["cw", "cat", "dog", "movie"]
  let coffeeCounter = 0;
  for(let event of events) {
    if (!allowedPhrases.includes(event.toLowerCase())) continue;
    coffeeCounter += event.toLowerCase() === event ? 1 : 2;
  }
  return coffeeCounter <= 3 ? coffeeCounter : "You need extra sleep";
}