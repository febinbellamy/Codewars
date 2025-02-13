function michaelPays(costs) {
  //Insert your code here
  if (costs < 5) return +costs.toFixed(2);
  const amountKateWillPay = costs * (1/3);  
  return amountKateWillPay < 10 ? +(costs - amountKateWillPay).toFixed(2) : +(costs - 10).toFixed(2);
}