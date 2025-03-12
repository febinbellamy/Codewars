const nextId = (ids) => {
  ids.sort((a,b) => a-b);
  let smallestUnusedId = 0;
  for(let i = 0; i < ids.length; i++) {
    if (ids[i] === smallestUnusedId) smallestUnusedId++;
  }
  return smallestUnusedId;
}