function batteryBars(percent) {
  // your code here
  const int = parseInt(percent/20);
  if (int === 1) {
    return "[#....]"
  } else if (int === 2) {
    return "[##...]"
  } else if (int === 3) {
    return "[###..]";
  } else if (int === 4) {
    return "[####.]"
  } else if (int === 5) {
    return "[#####]"
  } else {
    return "[.....]"
  }
}