function distanceBetweenCircles(a, b){
  const numToSqrt = ((b["center"]["x"] - a["center"]["x"]) ** 2) + ((b["center"]["y"] - a["center"]["y"]) ** 2);
  const distanceBetweenCenters = Math.sqrt(numToSqrt);
  const sumOfRadii = a["radius"] + b["radius"];
  const shortestDistance = distanceBetweenCenters - sumOfRadii;
  return shortestDistance > 0 ? shortestDistance : 0;
}