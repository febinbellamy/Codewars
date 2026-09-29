function nextItem(xs, item) {
  let found = false;
  for (let curr of xs) {
    if (found === true) {
      return curr;
    }
    if (curr === item) {
      found = true;
    }
  }
  return;
}