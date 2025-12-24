function pick(preferred, blacklisted, options) {
  const letters = ["A", "B", "C"]
  let preferredOption = "";
  let percentage = -Infinity;
  let character = "";
  let optionIsNeutral = false;
  for(let i = 0; i < options.length; i++) {
    let currentOptionName = options[i][0]
    let currentOptionPercentage = options[i][1]
    if (preferred.has(currentOptionName)) {
      if (currentOptionPercentage > percentage || optionIsNeutral) {
        preferredOption = currentOptionName;
        percentage = currentOptionPercentage;
        character = letters[i]
        optionIsNeutral = false;
      }
    } else if (!blacklisted.has(currentOptionName)) {
      // neutral
      if (!preferredOption || currentOptionPercentage > percentage && optionIsNeutral) {
        preferredOption = currentOptionName;
        percentage = currentOptionPercentage;
        character = letters[i]
        optionIsNeutral = true;
      }
    }
  }
  return character ? character : "D";
}