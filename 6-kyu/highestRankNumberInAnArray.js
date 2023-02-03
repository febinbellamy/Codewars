/*
6 kyu

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr) {
  //Your Code logic should written here

  const freqObj = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let tempObj = {};

    if (freqObj[currentNum]) {
      freqObj[currentNum]++;
    } else {
      freqObj[currentNum] = 1;
    }
  }

  const arrayOfObjs = [];

  for (let key in freqObj) {
    let tempObj = { number: key, frequency: freqObj[key] };
    arrayOfObjs.push(tempObj);
  }

  //sort arr of objs
  arrayOfObjs.sort((a, b) => {
    if (a.frequency > b.frequency) return -1;
    if (a.frequency < b.frequency) return 1;
    if (Number(a.number) > Number(b.number)) return -1;
    if (Number(a.number) < Number(b.number)) return 1;
  });
  return +arrayOfObjs[0]["number"];
}
