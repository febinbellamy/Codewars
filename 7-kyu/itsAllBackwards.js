/* 
7 kyu

I give you this: ['This', 'Is', 'a' 'Example');

You give me back this: 'examplE a iS thiS'

So. I want what I give you back in reverse order, with only the last letter of each item capitalized. If the item is a single letter word and not capitilized when I give it to you, do not capitalize it.
*/

function flipper(stringArr) {
  const reversedOrder = [];

  for (let i = 0; i < stringArr.length; i++) {
    let currentElem = stringArr[i];
    if (currentElem.length === 1) {
      reversedOrder.push(currentElem);
    } else {
      let lowerCasedStr = currentElem.toLowerCase();
      let finalStr = `${lowerCasedStr.slice(
        0,
        lowerCasedStr.length - 1
      )}${lowerCasedStr[lowerCasedStr.length - 1].toUpperCase()}`;
      reversedOrder.push(finalStr);
    }
  }
  return reversedOrder.reverse().join(" ");
}
