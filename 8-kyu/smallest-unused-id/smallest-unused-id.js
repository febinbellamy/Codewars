function nextId(ids){
  //this will be awesome!
  console.log("ids", ids)
  
  ids.sort((a,b) => a-b);
  let smallestUnusedId = 0;
  for(let i = 0; i < ids.length; i++) {
    let currentId = ids[i];
    if (currentId === smallestUnusedId) {
      smallestUnusedId++;
    }
  }
  return smallestUnusedId;
}
​