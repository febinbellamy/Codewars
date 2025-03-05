function generateMenu (menuItems) {
  // Your code goes here..
  let result = "";
  for(let {url, text} of menuItems) {
    result += `<a href="${url}">${text}</a>`;
  }
  return result;
}