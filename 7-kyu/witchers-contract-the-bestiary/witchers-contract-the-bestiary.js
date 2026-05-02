function identifyMonster(observedWeaknesses, bestiary) {
  // Write your code here, before the darkness consumes you...
  for (let monster in bestiary) {
    const weaknessesArr = bestiary[monster];
    const allObservedWeaknessesPresent = observedWeaknesses.every(w => weaknessesArr.includes(w));
    if (allObservedWeaknessesPresent) return monster;
  }
  return "Unknown monster"
}
​