function Calculator(vatRate){ 
  //your code here
  this.getNet = function(grossPrice){
    return +(grossPrice / (1 + (vatRate/100))).toFixed(2);
  }
  
  this.getVat = function(grossPrice){
    return +(grossPrice - this.getNet(grossPrice)).toFixed(2);
  }
}