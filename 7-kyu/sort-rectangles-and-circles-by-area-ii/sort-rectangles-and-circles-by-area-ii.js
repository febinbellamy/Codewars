function sortByArea(array) {
  // area of a circle: PI & radius ** 2
  // area of a rectange: l * w
  const areas = [];
  for(let elem of array) {
    const area = Array.isArray(elem) ? elem[0] * elem[1] : Math.PI * (elem ** 2);
    areas.push({"elem": elem, "area": area})
  }
  areas.sort((a,b) => a.area - b.area);
  return areas.map((obj) => obj.elem)
 }