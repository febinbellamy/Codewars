function top3(products, amounts, prices) {
  const arrOfObjs = [];
  for(let i = 0; i < products.length; i++) {
    arrOfObjs.push({"product": products[i], "index": i, "revenue": amounts[i] * prices[i]})
  }
  arrOfObjs.sort((a,b) => {
    if (a.revenue < b.revenue) return 1
    if (a.revenue > b.revenue) return -1
    if (a.index < b.index) return -1
    if (a.index > b.index) return 1
  })
  return arrOfObjs.map((obj) => obj.product).slice(0, 3);
}