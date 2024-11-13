/* 
8 kyu

Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(width, height, depth) {
  //  SA = 2lw + 2lh + 2wh
  // volume = length x width x height
  const volume = width * height * depth;
  const surfaceArea =
    2 * width * depth + 2 * depth * height + 2 * width * height;
  return [surfaceArea, volume];
}
