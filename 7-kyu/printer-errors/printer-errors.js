function printerError(s) {
    // your code
  return String(s.split("").filter(char => /[^a-mA-M]/.test(char)).length) + "/" + s.length
  
}