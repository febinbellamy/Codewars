/* 
7 kyu

There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering

Examples
>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'
*/

function reOrdering(text) {
  //your code here

  const textArr = text.split(" ");
  const finalArr = [];

  for (let i = 0; i < textArr.length; i++) {
    let currentWord = textArr[i];
    if (/[A-Z]/.test(currentWord[0])) {
      finalArr.unshift(currentWord);
    } else {
      finalArr.push(currentWord);
    }
  }
  return finalArr.join(" ");
}
