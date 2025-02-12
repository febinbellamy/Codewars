function well(x){
  let goodIdeaCounter = 0;
  
  for(let arr of x) {
    let numOfGoodIdeas = arr.filter((idea) => String(idea).toLowerCase() === "good").length;
    goodIdeaCounter += numOfGoodIdeas;
  }
  
  if (goodIdeaCounter === 0) {
    return "Fail!";
  } 
  
  if (goodIdeaCounter === 1 || goodIdeaCounter === 2) {
    return "Publish!"
  }
  
  if (goodIdeaCounter > 2) {
    return "I smell a series!"
  } 
}