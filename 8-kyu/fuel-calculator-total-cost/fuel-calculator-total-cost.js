function fuelPrice(litresPurchased, pricePerLitre) {
  if (litresPurchased === 1) { 
    return pricePerLitre;
  }
  if (litresPurchased < 4) {
    return +((pricePerLitre - 0.05) * litresPurchased).toFixed(2);
  }
  if (litresPurchased < 6) {
    return +((pricePerLitre - 0.10) * litresPurchased).toFixed(2);
  }
  if (litresPurchased < 8) {
    return +((pricePerLitre - 0.15) * litresPurchased).toFixed(2);
  }
  if (litresPurchased < 10) {
    return +((pricePerLitre - 0.20) * litresPurchased).toFixed(2);
  }
  return +((pricePerLitre - 0.25) * litresPurchased).toFixed(2);
}