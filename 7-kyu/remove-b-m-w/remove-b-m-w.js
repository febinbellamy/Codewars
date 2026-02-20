function removeBMW(str){
  //TO DO
  if (typeof str !== "string") {
    throw new Error('This program only works for text.')
  }
  return str.split('').filter(char => !'bmwBMW'.includes(char)).join('')
}