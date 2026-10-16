function century(year) {
  const result = Math.floor(year/100);
  const strYear = String(year); 
  return strYear.slice(strYear.length - 2) === "00" ? result : result + 1;
}