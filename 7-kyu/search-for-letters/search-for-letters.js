const change = s => {
  return "abcdefghijklmnopqrstuvwxyz".split('').map((elem) => s.toLowerCase().includes(elem) ? "1" : "0").join('');
}