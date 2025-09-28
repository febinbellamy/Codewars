function lowestTemp(t) {
  return t ? Math.min(...t.split(" ").filter((elem) => elem != "")) : null;
}