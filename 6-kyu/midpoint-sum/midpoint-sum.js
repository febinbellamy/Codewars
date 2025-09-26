var midpointSum=function(n){
  //your code here
  if (n.length <= 2) return;
  let leftSum = n[0];
  let rightSum = n.reduce((a,c) => a+c,0) - (n[0] + n[1]);
  for(let i = 1; i < n.length - 1; i++) {
    if (leftSum === rightSum) return i;
    rightSum -= n[i + 1];
    leftSum += n[i];
  }
};