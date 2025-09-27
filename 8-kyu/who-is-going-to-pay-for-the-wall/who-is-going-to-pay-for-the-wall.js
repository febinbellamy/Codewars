function whoIsPaying(name){
  //your code here
  return name.length <= 2 ? [name] : [name, name.slice(0, 2)]
}