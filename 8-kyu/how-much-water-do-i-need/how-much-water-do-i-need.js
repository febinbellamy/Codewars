function howMuchWater(amountOfWaterRequiredToWashLoad, loadAkaLimit, amountOfClothesToWash){
  if (amountOfClothesToWash > 2 * loadAkaLimit) {
    return "Too much clothes";
  }
  if (amountOfClothesToWash < loadAkaLimit) { 
    return "Not enough clothes";
  }
  if (amountOfClothesToWash > loadAkaLimit) { 
    return +(amountOfWaterRequiredToWashLoad * 1.1 ** (amountOfClothesToWash - loadAkaLimit)).toFixed(2) 
  };
  
  return +((amountOfWaterRequiredToWashLoad / amountOfClothesToWash) * loadAkaLimit).toFixed(2);
}