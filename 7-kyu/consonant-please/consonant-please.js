function sortLetters(arr) {
//your code here
  const vowels = [];
  const consonants = [];
  for(let subArr of arr) {
    for (let elem of subArr) {
      if (/[aeiouAEIOU]/.test(elem)) {
        vowels.push(elem.toUpperCase())
      } else if (/[a-zA-Z]/.test(elem)) {
        consonants.push(elem.toUpperCase())
      }
    } 
  }
  return [vowels, consonants];
}