function HTMLGen () {
  // Your code here plox!
  this.a = text => `<a>${text}</a>`
  this.b = text => `<b>${text}</b>`
  this.p = text => `<p>${text}</p>`
  this.body = text => `<body>${text}</body>`
  this.div = text => `<div>${text}</div>`
  this.span = text => `<span>${text}</span>`
  this.title = text => `<title>${text}</title>`
  this.comment = text => `<!--${text}-->`
}