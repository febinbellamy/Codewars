function arpeggio(notes) {
  const scale = "ABCDEFG";
  if (!scale.includes(notes)) return;
  const result = [notes];
  let lastIndex = scale.indexOf(notes);
  for(let i = 0; i < 3; i++) {
    let indexOfNextChar = result.length === 3 ? lastIndex + 3 : lastIndex + 2;
    result.push(scale[indexOfNextChar % 7]);
    lastIndex = indexOfNextChar;
  }
  return result;
}