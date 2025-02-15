const getTurkishNumber = (num) => {
  const unitsAndNames = {
    "0" : "sıfır",
    "1" : "bir",
    "2" : "iki",
    "3" : "üç",
    "4" : "dört",
    "5" : "beş",
    "6" : "altı",
    "7" : "yedi",
    "8" : "sekiz",
    "9" : "dokuz",
    "10" : "on",
    "20" : "yirmi",
    "30" : "otuz",
    "40" : "kırk",
    "50" : "elli",
    "60" : "altmış",
    "70" : "yetmiş",
    "80" : "seksen",
    "90" : "doksan",
  }
  const strNum = String(num);
  if (strNum.length === 1 || strNum[1] === "0") {
    return unitsAndNames[strNum];
  }
  const ones = strNum[1];
  const tens = `${strNum[0]}0`  
  return `${unitsAndNames[tens]} ${unitsAndNames[ones]}`
}