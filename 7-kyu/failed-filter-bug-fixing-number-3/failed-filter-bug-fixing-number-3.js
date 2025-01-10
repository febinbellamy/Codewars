let FilterNumbers = function(str) {
  return str.split('').filter(c => /[^0-9]/.test(c)).join('');
}