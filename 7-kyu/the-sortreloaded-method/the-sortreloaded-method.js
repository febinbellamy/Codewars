// Always code your solution having best practices in mind
Array.prototype.sortReloaded = function(dir) {
  if (dir && dir !== "asc" && dir !== "desc") return false;
  const copy = [...this];
  if (!dir || dir === "asc") {
    copy.sort((a,b) => a - b);
  } else {
    copy.sort((a,b) => b - a);
  }
  return copy;
}