function sillycase(silly) {
  //your code
  const midpointIndex = silly.length % 2 === 0 ? (silly.length / 2) : Math.ceil(silly.length / 2);
  return silly.slice(0, midpointIndex).toLowerCase() + silly.slice(midpointIndex).toUpperCase();
}