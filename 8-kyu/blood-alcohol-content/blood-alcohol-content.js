function bloodAlcoholContent({ounces, abv}, weightInPounds, gender, timeInHours){
  // (A × 5.14 / W × r) - .015 × H 
  const distributionRatio = gender === "male" ? 0.73 : 0.66;
  const output = ((ounces * abv) * 5.14 / weightInPounds * distributionRatio ) - .015 * timeInHours;
  return +(output.toFixed(4));
}