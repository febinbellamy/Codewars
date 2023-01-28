/* 
7 kyu

No description!!!

Input :: [10,20,25,0]
Output :: ["+0", "+10", "+15", "-10"]
*/

function equalize(array) {
  //Write your own Code!
  return array.map(
    (num) => `${num - array[0] >= 0 ? "+" : ""}${num - array[0]}`
  );
}
