/* 
7 kyu

Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.

For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/

function spacey(array) {
  const finalArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      finalArr.push(array[i]);
    } else {
      let newWord = array.slice(0, i + 1).join("");
      finalArr.push(newWord);
    }
  }
  return finalArr;
}
