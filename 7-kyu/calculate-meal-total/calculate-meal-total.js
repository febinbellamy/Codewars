function calculate_total(subtotal, tax, tip) {
  const tipAmount = subtotal * (tip/100);
  const taxAmount = subtotal * (tax/100);
  return +(tipAmount + taxAmount + subtotal).toFixed(2);
}