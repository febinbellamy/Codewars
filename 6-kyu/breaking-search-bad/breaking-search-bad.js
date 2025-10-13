// TITLES is a preloaded array of String to search throught
​
function search(searchTerm) {
  const regexPattern = new RegExp(searchTerm, 'i');
  return TITLES.filter(title => regexPattern.test(title))
}