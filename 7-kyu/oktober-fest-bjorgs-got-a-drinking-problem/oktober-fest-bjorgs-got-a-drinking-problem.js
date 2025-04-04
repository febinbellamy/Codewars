function gameOfFives(bavarianBeerBears,scandinavianSchöllers){
  const numOfFives1 = bavarianBeerBears.filter((num) => num === 5).length;
  const numOfFives2 = scandinavianSchöllers.filter((num) => num === 5).length;
  return numOfFives1 === numOfFives2 ? "Drinks All Round! Free Beers on Bjorg!" : "Uh Oh! Bjorg's a donut! No beer for anyone!";
}