//return price without vat
function excludingVatPrice(price){
  return price ? +(price/1.15).toFixed(2) : -1;
}