/* 
6 kyu

You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad

Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]
- Super Happy -> Happy -> Normal -> Sad -> Super Sad

If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]
- Super Sad -> Sad -> Normal -> Happy -> Super Happy

Example:

arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]

More in test cases!

Notes:
- The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
- All emotions will be valid
*/

function sortEmotions(arr, order) {
  if (arr.length === 0) return arr;

  const emotions = [
    { emotion: ":D", rank: 1 },
    { emotion: ":)", rank: 2 },
    { emotion: ":|", rank: 3 },
    { emotion: ":(", rank: 4 },
    { emotion: "T_T", rank: 5 },
  ];

  const arrOfObjs = [];

  for (let i = 0; i < arr.length; i++) {
    let currentEmotion = arr[i];
    let rank = emotions.filter((obj) => obj.emotion === currentEmotion)[0][
      "rank"
    ];
    arrOfObjs.push({ emotion: currentEmotion, rank: rank });
  }

  if (order === true) {
    arrOfObjs.sort((a, b) => a.rank - b.rank);
  } else {
    arrOfObjs.sort((a, b) => b.rank - a.rank);
  }

  return arrOfObjs.map((obj) => obj.emotion);
}
