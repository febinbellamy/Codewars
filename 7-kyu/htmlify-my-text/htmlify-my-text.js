function htmlify(string){
  const mappings = { "–": "&ndash;","’": "&rsquo;", "&": "&amp;", "“": "&ldquo;", "”": "&rdquo;"};
  return `<p>${string.split("").map(char => char in mappings ? mappings[char] : char).join("")}</p>`;
}
​
​