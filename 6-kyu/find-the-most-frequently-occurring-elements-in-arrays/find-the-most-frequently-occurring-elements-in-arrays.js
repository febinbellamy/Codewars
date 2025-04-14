function getMostFrequent({temperature}) {
  // your code here
  const mostFrequentTemps = [];
  for (let currentDayTemps of temperature) {
    let currentMostFrequentTemp = 0;
    let currentHighestFreq = 0;
    const freqCounter = {};
    for (let currentThreeHourTemp of currentDayTemps) {
      if (currentThreeHourTemp in freqCounter) {
        freqCounter[currentThreeHourTemp]++;
      } else {
        freqCounter[currentThreeHourTemp] = 1;
      }
      if (freqCounter[currentThreeHourTemp] >= currentHighestFreq) {
        currentMostFrequentTemp = currentThreeHourTemp;
        currentHighestFreq = freqCounter[currentThreeHourTemp]
      }
    }
    mostFrequentTemps.push(currentMostFrequentTemp);
  }
  return mostFrequentTemps;
}