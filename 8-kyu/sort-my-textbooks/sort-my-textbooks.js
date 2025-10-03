function sorter(textbooks) {
  textbooks.sort((a,b) => {
    if (a.toUpperCase() > b.toUpperCase()) return 1;
    if (a.toUpperCase() < b.toUpperCase()) return -1;
  });
  return textbooks
}