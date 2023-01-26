/* 
7 kyu

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array) {
  // code here

  const arrayOfObjs = [];

  for (let i = 0; i < array.length; i++) {
    const newObj = {};
    newObj.num = array[i];
    newObj.length = array[i].toString().length;
    newObj.index = i;
    arrayOfObjs.push(newObj);
  }

  arrayOfObjs.sort((a, b) => {
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    if (a.index > b.index) return 1;
    if (a.index < b.index) return -1;
  });

  return arrayOfObjs[0].num;
}
