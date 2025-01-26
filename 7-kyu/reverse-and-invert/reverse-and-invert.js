function reverseInvert(array){
  //your code here
  const integers = array.filter((num) => parseInt(num) === num);
  
  for(let i = 0; i < integers.length; i++) {
    let strNum = integers[i].toString();
    let newNum;
    if (strNum[0] !== "-") {
      newNum = Number("-" + strNum.split("").reverse().join(''));
    } else {
      newNum = Number(strNum.slice(1).split("").reverse().join(''));
    }
    integers[i] = newNum;
  }
  return integers;
}