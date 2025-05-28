function isValid(idn) {
  // Your code here
  if (!idn || /[^_$a-zA-Z]/.test(idn[0])) return false;
  for(let i = 1; i < idn.length; i++) {
    if (/[^_$0-9a-zA-Z]/.test(idn[i])) return false;
  }
  return true;
}